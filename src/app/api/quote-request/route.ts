import { NextResponse } from "next/server";
import { Resend } from "resend";
import { quoteRequestSchema } from "@/lib/validation/quote-request";
import { buildBusinessNotificationEmail, buildClientConfirmationEmail } from "@/lib/quote-email";
import { getServiceBySlug } from "@/data/services";
import { companyInfo } from "@/data/contact";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = quoteRequestSchema.safeParse(json);
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Invalid request.";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const data = parsed.data;

  // Honeypot — silently accept bot submissions without sending anything.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const selectedServices = data.serviceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  if (selectedServices.length === 0) {
    return NextResponse.json({ error: "Select at least one valid service." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[quote-request] RESEND_API_KEY is not configured — logging submission instead of sending email.");
    console.info("[quote-request] New quotation request", {
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      message: data.message,
      services: selectedServices.map((s) => s.slug),
      requirements: data.requirements,
    });
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(apiKey);
  const fromAddress = process.env.QUOTE_FROM_EMAIL || "RankVibez <onboarding@resend.dev>";
  const businessEmail = process.env.BUSINESS_EMAIL || companyInfo.email;

  try {
    await resend.emails.send({
      from: fromAddress,
      to: businessEmail,
      replyTo: data.email,
      subject: `New Quotation Request — ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html: buildBusinessNotificationEmail({
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        message: data.message,
        services: selectedServices,
        requirements: data.requirements,
      }),
    });

    await resend.emails.send({
      from: fromAddress,
      to: data.email,
      subject: "We've received your quote request — RankVibez",
      html: buildClientConfirmationEmail({ name: data.name, services: selectedServices }),
    });
  } catch (err) {
    console.error("[quote-request] Failed to send email", err);
    return NextResponse.json(
      { error: "We couldn't send your request right now. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

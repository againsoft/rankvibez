import { NextResponse } from "next/server";

const budgetOptions = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
  "Enterprise / Custom",
];

function sanitize(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 2000) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = sanitize(body.name);
  const company = sanitize(body.company);
  const email = sanitize(body.email);
  const phone = sanitize(body.phone);
  const country = sanitize(body.country);
  const service = sanitize(body.service);
  const budget = sanitize(body.budget);
  const description = sanitize(body.description);
  const website = sanitize(body.website);

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !description) {
    return NextResponse.json({ error: "Name, work email and project description are required." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please provide a valid work email address." }, { status: 400 });
  }

  if (budget && !budgetOptions.includes(budget)) {
    return NextResponse.json({ error: "Invalid budget option." }, { status: 400 });
  }

  console.info("[contact] New inquiry received", {
    name,
    company,
    email,
    phone,
    country,
    service,
    budget,
    description,
  });

  return NextResponse.json({ ok: true });
}

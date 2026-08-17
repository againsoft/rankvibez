import type { Service } from "@/data/services";

type BusinessEmailData = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message?: string;
  services: Service[];
  requirements: Record<string, string>;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function wrapper(title: string, body: string) {
  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#f4f4f6;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f6;padding:32px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e5ea;">
            <tr>
              <td style="background:#0d0e14;padding:24px 32px;">
                <span style="color:#ffffff;font-size:18px;font-weight:700;letter-spacing:0.02em;">RankVibez</span>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <h1 style="margin:0 0 16px;font-size:20px;color:#111114;">${title}</h1>
                ${body}
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background:#fafafa;border-top:1px solid #e5e5ea;">
                <p style="margin:0;font-size:12px;color:#8a8a94;">RankVibez &middot; admin@rankvibez.com</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildBusinessNotificationEmail(data: BusinessEmailData) {
  const servicesList = data.services
    .map((service) => {
      const requirement = data.requirements[service.slug];
      return `<li style="margin-bottom:14px;">
          <strong style="color:#111114;">${escapeHtml(service.name)}</strong>
          ${
            requirement
              ? `<div style="margin-top:4px;font-size:13px;color:#4b4b55;white-space:pre-wrap;">${escapeHtml(requirement)}</div>`
              : ""
          }
        </li>`;
    })
    .join("");

  const body = `
    <table role="presentation" width="100%" style="font-size:14px;color:#333;margin-bottom:24px;">
      <tr><td style="padding:4px 0;color:#8a8a94;width:110px;">Name</td><td style="padding:4px 0;color:#111114;font-weight:600;">${escapeHtml(data.name)}</td></tr>
      ${data.company ? `<tr><td style="padding:4px 0;color:#8a8a94;">Company</td><td style="padding:4px 0;color:#111114;">${escapeHtml(data.company)}</td></tr>` : ""}
      <tr><td style="padding:4px 0;color:#8a8a94;">Email</td><td style="padding:4px 0;color:#111114;"><a href="mailto:${escapeHtml(data.email)}" style="color:#e2323f;text-decoration:none;">${escapeHtml(data.email)}</a></td></tr>
      ${data.phone ? `<tr><td style="padding:4px 0;color:#8a8a94;">Phone</td><td style="padding:4px 0;color:#111114;">${escapeHtml(data.phone)}</td></tr>` : ""}
    </table>
    <h2 style="font-size:12px;text-transform:uppercase;letter-spacing:0.06em;color:#8a8a94;margin:0 0 12px;">Requested Services</h2>
    <ul style="margin:0 0 24px;padding-left:18px;">${servicesList}</ul>
    ${
      data.message
        ? `<h2 style="font-size:12px;text-transform:uppercase;letter-spacing:0.06em;color:#8a8a94;margin:0 0 8px;">Additional Message</h2><p style="font-size:14px;line-height:1.6;color:#333;white-space:pre-wrap;margin:0;">${escapeHtml(data.message)}</p>`
        : ""
    }
  `;

  return wrapper("New Quotation Request", body);
}

export function buildClientConfirmationEmail(data: { name: string; services: Service[] }) {
  const servicesList = data.services
    .map((s) => `<li style="margin-bottom:6px;color:#333;font-size:14px;">${escapeHtml(s.name)}</li>`)
    .join("");

  const body = `
    <p style="font-size:14px;line-height:1.6;color:#333;margin:0 0 16px;">Hi ${escapeHtml(data.name)},</p>
    <p style="font-size:14px;line-height:1.6;color:#333;margin:0 0 16px;">
      Thanks for reaching out to RankVibez. We've received your quotation request for the following service${data.services.length > 1 ? "s" : ""}:
    </p>
    <ul style="margin:0 0 20px;padding-left:18px;">${servicesList}</ul>
    <p style="font-size:14px;line-height:1.6;color:#333;margin:0 0 16px;">
      A member of our team will review your requirements and get back to you shortly with a custom quote.
    </p>
    <p style="font-size:14px;line-height:1.6;color:#333;margin:0;">— The RankVibez Team</p>
  `;

  return wrapper("We&rsquo;ve received your request", body);
}

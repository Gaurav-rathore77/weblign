import nodemailer, { type Transporter } from 'nodemailer';

export const DEFAULT_CONTACT_NOTIFICATION_EMAIL = 'info.weblign@gmail.com';

export interface InquiryEmailData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  details: string;
}

export type EmailDeliveryStatus = 'sent' | 'not-configured' | 'failed';

let cachedTransporter: Transporter | null = null;
let cachedTransporterKey = '';

export function isEmailConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASSWORD?.trim(),
  );
}

function getTransporter(): Transporter | null {
  if (!isEmailConfigured()) return null;

  const host = process.env.SMTP_HOST!.trim();
  const user = process.env.SMTP_USER!.trim();
  const password = process.env.SMTP_PASSWORD!;
  const parsedPort = Number(process.env.SMTP_PORT || 587);
  const port = Number.isFinite(parsedPort) ? parsedPort : 587;
  const secure =
    process.env.SMTP_SECURE === 'true' ||
    (process.env.SMTP_SECURE !== 'false' && port === 465);
  const key = [host, port, secure, user].join('|');

  if (!cachedTransporter || cachedTransporterKey !== key) {
    cachedTransporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass: password },
      connectionTimeout: 10_000,
      socketTimeout: 15_000,
    });
    cachedTransporterKey = key;
  }

  return cachedTransporter;
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      })[character] ?? character,
  );
}

function oneLine(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

export async function sendInquiryEmail(
  inquiry: InquiryEmailData,
): Promise<EmailDeliveryStatus> {
  const transporter = getTransporter();
  if (!transporter) return 'not-configured';

  const to = process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_CONTACT_NOTIFICATION_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || process.env.SMTP_USER!.trim();
  const safeName = oneLine(inquiry.fullName) || 'Website visitor';
  const subject = `New website inquiry from ${safeName}`.slice(0, 200);
  const text = [
    `New inquiry from ${inquiry.fullName}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone || 'Not provided'}`,
    `Company: ${inquiry.company || 'Not provided'}`,
    `Service: ${inquiry.service || 'Not specified'}`,
    `Budget: ${inquiry.budget || 'Not specified'}`,
    '',
    inquiry.details,
  ].join('\n');
  const html = `
    <h2>New website inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(inquiry.fullName)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(inquiry.email)}">${escapeHtml(inquiry.email)}</a></p>
    <p><strong>Phone:</strong> ${escapeHtml(inquiry.phone || 'Not provided')}</p>
    <p><strong>Company:</strong> ${escapeHtml(inquiry.company || 'Not provided')}</p>
    <p><strong>Service:</strong> ${escapeHtml(inquiry.service || 'Not specified')}</p>
    <p><strong>Budget:</strong> ${escapeHtml(inquiry.budget || 'Not specified')}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap">${escapeHtml(inquiry.details)}</p>
  `;

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: inquiry.email,
      subject,
      text,
      html,
    });
    return 'sent';
  } catch {
    return 'failed';
  }
}

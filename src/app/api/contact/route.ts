import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY in .env.local" },
        { status: 500 }
      );
    }

    if (!to || !from) {
      return NextResponse.json(
        { error: "Missing CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL in .env.local" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: `GeekVentures <${from}>`,
      to: [to],
      subject: `New inquiry from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;">
          <h2>New GeekVentures inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
      text: `
New GeekVentures inquiry

Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message || "Resend failed to send the email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    console.error("Contact route error:", err);

    return NextResponse.json(
      {
        error:
          err instanceof Error
            ? err.message
            : "Something went wrong while sending the message.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
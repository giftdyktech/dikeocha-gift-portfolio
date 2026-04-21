import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.MY_EMAIL!,
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:auto;padding:28px;border:1px solid #eee;border-radius:14px;">
          
          <h2 style="color:#16a34a;margin-bottom:4px;">
            New Portfolio Message 🎉
          </h2>
          <p style="color:#888;font-size:13px;margin-bottom:24px;">
            Someone reached out via your portfolio contact form.
          </p>

          <table style="width:100%;font-size:14px;margin-bottom:20px;">
            <tr>
              <td style="color:#888;padding:8px 0;width:90px;">Name</td>
              <td style="font-weight:600;color:#111;">${name}</td>
            </tr>
            <tr>
              <td style="color:#888;padding:8px 0;">Email</td>
              <td>
                <a href="mailto:${email}" style="color:#16a34a;">${email}</a>
              </td>
            </tr>
          </table>

          <div style="padding:16px;background:#f9f9f9;border-radius:10px;border-left:3px solid #16a34a;">
            <p style="color:#888;font-size:11px;margin-bottom:6px;text-transform:uppercase;letter-spacing:1px;">Message</p>
            <p style="color:#111;font-size:14px;line-height:1.8;white-space:pre-wrap;">${message}</p>
          </div>

          <p style="margin-top:24px;font-size:11px;color:#bbb;">
            Sent from dikeocha-gift.vercel.app
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
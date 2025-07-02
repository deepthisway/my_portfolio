// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail", // or another SMTP provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "contactdeep01@gmail.com",
      subject: `New message from ${name}: ${subject}`,
      text: message,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h2 style="color: #111827; border-bottom: 1px solid #d1d5db; padding-bottom: 10px;">📩 New Contact Message</h2>
            
            <table style="width: 100%; margin-top: 20px;">
            <tr>
                <td style="font-weight: bold; padding: 8px 0; color: #374151;">Name:</td>
                <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
                <td style="font-weight: bold; padding: 8px 0; color: #374151;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
            </tr>
            <tr>
                <td style="font-weight: bold; padding: 8px 0; color: #374151;">Subject:</td>
                <td style="padding: 8px 0;">${subject}</td>
            </tr>
            <tr>
                <td style="font-weight: bold; padding: 8px 0; color: #374151; vertical-align: top;">Message:</td>
                <td style="padding: 8px 0; white-space: pre-wrap; color: #1f2937;">${message}</td>
            </tr>
            </table>

            <p style="margin-top: 30px; font-size: 14px; color: #6b7280;">
            Sent from your portfolio contact form.
            </p>
        </div>
`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}

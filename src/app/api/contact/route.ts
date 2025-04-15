import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_SMTP_SERVER,
    port: process.env.NEXT_SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.NEXT_SMTP_USERNAME,
      pass: process.env.NEXT_SMTP_PASSWORD,
    },
  } as SMTPTransport.Options);

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'yuri.zc36@gmail.com',
      subject: subject || 'New Contact Message',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json(
      { success: false, error: 'Error sending email' },
      { status: 500 }
    );
  }
}

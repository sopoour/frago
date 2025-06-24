import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async function contact(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, message, gdpr } = req.body;

  if (!name || !email || !message || !gdpr) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Deine Website <onboarding@resend.dev>',
      to: 'frago.mp3.music@gmail.com',
      subject: `Neue Nachricht von ${name}`,
      replyTo: email,
      text: `Du hast eine neue Nachricht erhalten:\n\nName: ${name}\nE-mail: ${email}\n\nNachricht:\n${message}`,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';
// Update the import path below to the correct location of EmailTemplate
import { EmailTemplate } from '../../components/emailTemplate'; // Adjust the path as necessarys
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const body = await request.json();
    console.log('Received body:', body);
    const { name, message, email, subject } = body;

  if (!name || !message || !email) {
    return new Response(JSON.stringify({ error: 'Name, message, and email are required.' }), { status: 400 });
  }

  let emailStr = `${name} <Delivered@resend.dev>`;
  const { data, error } = await resend.emails.send({
    from: emailStr,
    to: ['connerarmour@gmail.com'],
    subject: subject || 'New Contact Form Submission',
    react: EmailTemplate({ name, message, subject: subject || 'New Contact Form Submission', email }),
  });

  if (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify(error), { status: 400 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
};
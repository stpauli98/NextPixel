import * as React from 'react';
import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, email, phone, message } = formData;
    
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'NextPixel <onboarding@resend.dev>',
      to: [process.env.RECIPIENT_EMAIL || 'delivered@resend.dev'],
      subject: `Nova poruka od ${name}`,
      react: EmailTemplate({ 
        firstName: name,
        email,
        phone,
        message 
      }) as React.ReactElement,
    });

    if (error) {
      console.error('Error sending email:', error);
      return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Error in API route:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
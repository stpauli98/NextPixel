import { Resend } from 'resend';
import { EmailTemplate } from '../components/EmailTemplate';
import React from 'react';
import { renderToString } from 'react-dom/server';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(formData: ContactFormData) {
  const { name, email, subject, message } = formData;
  
  try {
    // Za testiranje koristimo direktan API ključ
    // U produkciji bi trebalo koristiti sigurniji način pristupa API ključu
    const apiKey = 're_DC8YXV5C_DbG8KqJvKkNq3yjhUsr9pxSf';
    
    // Ovo je samo za testiranje, u produkciji bi trebalo koristiti sigurniji pristup
    console.log('Using direct API key for testing');
    
    if (!apiKey) {
      console.error('API key is missing');
      return { success: false, error: 'API key is missing' };
    }
    
    // Initialize Resend with API key
    const resend = new Resend(apiKey);
    
    // Create the email content using the template
    const emailContent = renderToString(
      React.createElement(EmailTemplate, { name, email, subject, message })
    );

    const { data, error } = await resend.emails.send({
      from: 'NextPixel <onboarding@resend.dev>', // Update with your verified domain
      to: ['info@nextpixel.com'], // Update with your recipient email
      subject: `New Contact Form Submission: ${subject}`,
      html: emailContent,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error: error.message };
    }
    
    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}

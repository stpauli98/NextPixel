// Jednostavna serverless funkcija za slanje emaila putem Resend API-ja
// Ovo je alternativa Express serveru

const sendEmailViaResend = async (formData) => {
  const { name, email, subject, message } = formData;
  
  try {
    // Direktan poziv Resend API-ja
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_RESEND_API_KEY || 're_DC8YXV5C_DbG8KqJvKkNq3yjhUsr9pxSf'}`,
      },
      body: JSON.stringify({
        from: 'NextPixel <onboarding@resend.dev>',
        to: ['info@nextpixel.com'],
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #3B82F6; font-size: 24px; margin-bottom: 16px;">
              New Contact Form Submission
            </h1>
            <div style="padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; background-color: #f9fafb;">
              <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject}</p>
              <div style="margin: 16px 0;">
                <p style="margin: 8px 0;"><strong>Message:</strong></p>
                <p style="margin: 8px 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            <p style="font-size: 14px; color: #6b7280; margin-top: 24px; text-align: center;">
              This email was sent from the NextPixel contact form.
            </p>
          </div>
        `,
      }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to send email');
    }
    
    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending email via Resend API:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send email' 
    };
  }
};

export default sendEmailViaResend;

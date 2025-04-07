const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Resend } = require('resend');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Inicijalizacija Resend s API ključem
// Koristimo hardkodirani API ključ ako nije dostupan u env varijablama
// NAPOMENA: U produkciji, uvijek koristite env varijable za API ključeve
const resendApiKey = process.env.RESEND_API_KEY || 're_DC8YXV5C_DbG8KqJvKkNq3yjhUsr9pxSf';
const resend = new Resend(resendApiKey);

console.log('Application initialized successfully');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// API endpoint za slanje emaila
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }
    
    // Kreiranje HTML sadržaja emaila
    const htmlContent = `
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
    `;
    
    // Slanje emaila koristeći Resend
    const { data, error } = await resend.emails.send({
      from: 'NextPixel <onboarding@resend.dev>',
      to: ['dzonifu@gmail.com'],
      subject: `New Contact Form Submission: ${subject}`,
      html: htmlContent,
    });
    
    if (error) {
      console.error('Error sending email:', error);
      return res.status(400).json({ success: false, error: error.message });
    }
    
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

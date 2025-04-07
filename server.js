require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
const port = process.env.PORT || 5002;

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

// API endpoint for sending emails
app.post('/api/send', async (req, res) => {
  console.log('Received form submission:', req.body);
  
  try {
    const { name, email, phone, message } = req.body;
    
    if (!name || !email || !message) {
      console.log('Missing required fields');
      return res.status(400).json({ 
        error: 'Name, email, and message are required' 
      });
    }
    
    // Send email using Resend
    console.log('Sending email with Resend...');
    const { data, error } = await resend.emails.send({
      from: 'NextPixel <onboarding@resend.dev>',
      to: [process.env.REACT_APP_RECIPIENT_EMAIL || 'delivered@resend.dev'],
      subject: `Nova poruka od ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Nova poruka od ${name}</h2>
          <p><strong>Ime:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || 'Nije uneseno'}</p>
          <h3>Poruka:</h3>
          <p>${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ 
        error: 'Failed to send email',
        details: error
      });
    }

    console.log('Email sent successfully:', data);
    return res.status(200).json({ 
      success: true, 
      data 
    });
  } catch (error) {
    console.error('Error in API handler:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message
    });
  }
});

// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`API available at http://localhost:${port}/api/send`);
  console.log(`Make sure REACT_APP_RESEND_API_KEY is set in your .env file`);
});

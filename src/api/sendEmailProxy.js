// Proxy funkcija za slanje emaila putem našeg backend servera
// Umjesto direktnog poziva Resend API-ja, koristimo naš backend endpoint

const sendEmailViaResend = async (formData) => {
  const { name, email, subject, message } = formData;
  
  try {
    // Određivanje ispravnog URL-a za API endpoint
    // U development okruženju koristimo localhost:3001, u produkciji relativni path
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? '' // U produkciji, koristimo relativni path
      : 'http://localhost:3001'; // U developmentu, koristimo localhost
    
    // Poziv našeg backend API-ja
    const response = await fetch(`${baseUrl}/api/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message
      }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || 'Failed to send email');
    }
    
    return { success: true, data: result.data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send email' 
    };
  }
};

export default sendEmailViaResend;

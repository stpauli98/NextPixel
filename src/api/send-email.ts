// Uvoz funkcije za slanje emaila direktno putem Resend API-ja
import sendEmailViaResend from './sendEmailProxy';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(formData: ContactFormData) {
  try {
    console.log('Sending email via Resend API');
    
    // Korištenje funkcije za direktno slanje emaila putem Resend API-ja
    const result = await sendEmailViaResend(formData);
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to send email');
    }

    return { success: true, data: result.data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Failed to send email' };
  }
}

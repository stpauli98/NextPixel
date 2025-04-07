import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  message?: string;
  email?: string;
  phone?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message = '',
  email = '',
  phone = '',
}) => (
  <div style={{
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    border: '1px solid #eaeaea',
    borderRadius: '5px',
  }}>
    <h1 style={{ color: '#0070f3', marginBottom: '20px' }}>Nova poruka od {firstName}</h1>
    
    <div style={{ marginBottom: '15px' }}>
      <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Email:</p>
      <p style={{ margin: '5px 0' }}>{email}</p>
    </div>
    
    {phone && (
      <div style={{ marginBottom: '15px' }}>
        <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Telefon:</p>
        <p style={{ margin: '5px 0' }}>{phone}</p>
      </div>
    )}
    
    <div style={{ marginBottom: '15px' }}>
      <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Poruka:</p>
      <p style={{ margin: '5px 0', whiteSpace: 'pre-wrap' }}>{message}</p>
    </div>
    
    <div style={{ marginTop: '30px', borderTop: '1px solid #eaeaea', paddingTop: '20px', fontSize: '12px', color: '#666' }}>
      <p>Ova poruka je poslana putem kontakt forme na NextPixel web stranici.</p>
    </div>
  </div>
);
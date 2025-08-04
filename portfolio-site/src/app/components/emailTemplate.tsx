import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  message: string;
  subject: string;
}

export function EmailTemplate({ name, message, subject }: EmailTemplateProps) {
  return (
    <div>
      <h1>New Contact Form Submission From {name}</h1>
      <p>{message}</p>
    </div>
  );
}
import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  message: string;
  subject: string;
  email: string;
}

export function EmailTemplate({ name, message, subject, email }: EmailTemplateProps) {
  return (
    <div>
      <h1>{subject}</h1>
      <h2>Message from {name}</h2>
      <p>{message}</p>
      <p>Reply to: {email}</p>
    </div>
  );
}
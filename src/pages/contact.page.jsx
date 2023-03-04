import { useState } from 'react';

export default function ContactPage() {
  let [text, setText] = useState('Contact');

  return (
    <div>
      <h1>{`${text}`}</h1>
    </div>
  );
}

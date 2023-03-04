import { useState } from 'react';

export default function CalculatePage() {
  let [text, setText] = useState('Calculate');

  return (
    <div>
      <h1>{`${text}`}</h1>
    </div>
  );
}

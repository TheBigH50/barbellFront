import { useState } from 'react';

export default function HomePage() {
  let [text, setText] = useState('Home');

  return (
    <div>
      <h1>{`${text}`}</h1>
    </div>
  );
}

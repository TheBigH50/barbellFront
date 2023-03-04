import { useState } from 'react';

export default function InventoryPage() {
  let [text, setText] = useState('Inventory');

  return (
    <div>
      <h1>{`${text}`}</h1>
    </div>
  );
}

import React from 'react';

export default function NewMessage({ messages }) {

   return (
    <div>
    <ul>
      {messages.map((message) => showMsg(message))}
    </ul>
    </div>
  );
}


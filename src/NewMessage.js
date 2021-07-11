import React, { useEffect, useRef } from 'react';

export default function NewMessage({ messages, currentMember }) {

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth'});
  }

  useEffect(scrollToBottom, [messages]);

  const showMsg = (message) => {
    const { member, data } = message;
    const myMessage = member.id === currentMember.id;
    const naming = myMessage ?
    "You" : member.clientData.name;
    const className = myMessage ?
    "Messages-message currentMember" : "Messages-message";
    return(
      <li className={className} key={message.id}>
        <div className="Content">
          <div className="Name">{naming}</div>
          <div className="Text">{data}</div>
        </div>
      </li>
    )
  }

  return (
    <div>
    <ul className="Messages-list">
      {messages.map((message) => showMsg(message))}
    </ul>
    <div ref={messagesEndRef} />
    </div>
  );
}


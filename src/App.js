import React from 'react';
import Message from './Message';
import NewMessage from './NewMessage';


function App() {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState('');

     
  return (
    <div>
      <div>
        <h1>Chat application</h1>
      </div>      
      <Message handleSendMessage={handleSendMessage} />        
      <NewMessage messages={messages} />
    </div>
  );  
}

export default App;

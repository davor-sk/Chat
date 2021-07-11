import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Message from './Message';
import NewMessage from './NewMessage';
import './style.css';

const randomUser = () => {
  const adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy"];
  const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset"];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

const roomName = 'observable-room';
const CHANNEL_ID = 'ZFOMKI4xay3JzHlY';

function App() {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({
    name: randomUser(),
  });

  const drone = useMemo(() => new window.Scaledrone(CHANNEL_ID, { data: {name: randomUser()}}), []);  // mogu raščlanit member data:{name: randomUser(), color: randomColor()}
  console.log(drone); 
  
  useEffect(() => {
    drone.on('open', (error) => {
      if(error){
        return console.error(error);
      }
        setMember({
          name: randomUser(),
          id: drone.clientId,
        });    

      const room = drone.subscribe(roomName);

      room.on('open', (error) => {
        if(error) {
          return console.error(error);
        } 
      });    
      room.on('message', (message) => {
        setMessages((messages) => [...messages, message]);
      });
    }
  )}, []);  
  

  const handleSendMessage = useCallback(
    (message) => {
        drone.publish({
        room:roomName,
        message
      });
    }, [drone]);

   
  return (
    <div className="body">
      <div className="title">
        <h1>Chat application</h1>
      </div>      
      <Message handleSendMessage={handleSendMessage} />        
      <NewMessage messages={messages} currentMember={member} />
    </div>
  );  
}

export default App;

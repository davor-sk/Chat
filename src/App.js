import React from "react";
import Input from './Input';
import NewMessage from './NewMessage';



export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      users: [
        {id: 1, name: 'Davor', color: 'blue', message: ''},
        {id: 2, name: 'Nikolina', color: 'pink', message: ''}
      ],
      maxId: 2
    }
  };

  handleAddMsg = (msg) => {
    const messages = this.state.messages;
     messages.push({
       text: msg,
       member: this.state.member
     })
    this.setState({messages: messages})
  }

   

  render(){
    return(<div>
              <Input onAdd={this.handleAddMsg} />
              <NewMessage />
          </div>);
  }
}

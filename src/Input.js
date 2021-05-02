import React from 'react';

export default class Input extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            message: ''
        }
    }

    handleNewMsg = (e) => {
        this.setState({message: e.target.value});
    }

    submitMessage = (e) => {
        e.preventDefault();

        const msgTrimano = this.message.trim();
        if (msgTrimano.length < 1) {
            return;
        }
        this.setState({message: ''});
        
    }

    render() {
        return(
            <form onSubmit={this.submitMessage}>
                <input onChange={this.handleNewMsg} type='text' placeholder='Enter message' value={this.message}></input>
                <input type='button' value='Send' />
            </form>);
    }
}
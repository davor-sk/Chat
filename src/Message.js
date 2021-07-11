import React, { Component } from 'react';

export default class Message extends Component {
    constructor(props){
        super(props);

        this.state = {
            text: "",
        };
    }

    handleSendMsg = (e) => {
        e.preventDefault();
        const trimmedTxt = this.state.text.trim();
        if(trimmedTxt.length > 0){
            this.props.handleSendMessage(trimmedTxt);
            this.setState({text: ''});
        }else{
            return;
        }        
    };

    
    handleChange = (e) => {
        this.setState({text: e.target.value});
    };


    render() {
        return (
            <form onSubmit= {(e) => this.handleSendMsg(e)}>
                <input onChange={(e) => this.handleChange(e)} type='text' placeholder="Enter message" value={this.state.text} autoFocus={true} />
                <input type='submit' value='SEND' /> 
            </form>
        )
    }
}

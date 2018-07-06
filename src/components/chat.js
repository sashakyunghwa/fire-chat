import React, { Component } from 'react';
import db from '../firebase';
import { connect } from 'react-redux';
import { updateChat } from '../actions';
import '../assets/css/chat.css';

class Chat extends Component {
    componentDidMount(){
        db.ref('/chat').on('value', snapshot => {
            this.props.updateChat(snapshot.val());
        });
    }

    render(){
        console.log('Chat Log:', this.props.log);

        const messages = this.props.log.map((msg, index) => {
            return (
                <p key={index}>
                    <b>{msg.author}: </b>
                    <span>{msg.message}</span>
                </p>
            )
        })

        return (
            <div className="container chat">
                <h1 className="center">Chat Room</h1>
                <div className="messages">
                    {messages}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        log: state.chat.log
    }
}

export default connect(mapStateToProps, { updateChat })(Chat);
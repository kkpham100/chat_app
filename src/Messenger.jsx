import "./messenger.css"
import React from 'react'
import Conversation from "./Conversation"
import Message from "./Message"
import ChatOnline from "./ChatOnline"
export default function Messenger() {
    return (
    <div classname="messenger">
        <div className = "chatMenu"> 
            <div className = "chatMenuWrapper"> 
                <input placeholder="Search for friends" className="chatMenuInput"/> 
                <Conversation/>
            </div>
        </div>

        <div className = "chatBox"> 
            <div className = "chatBoxWrapper">
                <div className= "chatBoxTop">
                    <Message/>
                 
                </div>

                <div className= "ChatBoxBottom">
                    <textarea className="chatMessageInput" placeholder="write something..."> </textarea>
                    <button className="chatSubmitButton"> Send </button>
                </div>
            </div>
        </div>

        <div className = "chatOnline"> 
            <div classname= "chatOnlineWrapper">
                <ChatOnline/>
            </div>
        </div>
    </div>
    );
}


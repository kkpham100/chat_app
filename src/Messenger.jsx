import "./messenger.css"
import React from 'react'
import Message from "./Message"
import ChatOnline from "./ChatOnline"
import Friend from "./Friend"
export default function Messenger() {
    return (
    <div classname="messenger">
        <div className = "chatMenu"> 
            <div className = "chatMenuWrapper"> 
                <input placeholder="Search for friends" className="chatMenuInput"/> 
                <Friend/>
                <Friend/>
                <Friend/>
            </div>
        </div>

        <div className = "chatBox"> 
            <div className = "chatBoxWrapper">
                <div className= "chatBoxTop">
                    <Message/>
                    <Message own={true}/>
                    <Message/>
                    <Message/>
                    <Message own={true}/>
                    <Message/>
                    <Message/>
                </div>

                <div className= "ChatBoxBottom">
                    <textarea className="chatMessageInput" placeholder="write something..."> </textarea>
                    <button className="chatSubmitButton"> Send </button>
                </div>
            </div>
        </div>

        <div className = "chatOnline"> 
            <div className= "chatOnlineWrapper">
                <ChatOnline/>
                <ChatOnline/>
                <ChatOnline/>
            </div>
        </div>
    </div>
    );
}


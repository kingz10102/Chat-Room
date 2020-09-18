import { Avatar } from '@material-ui/core';
import React from 'react';
import '../css/Chat.css';


function Chat() {
    return (
        <div className='cht'>
           <div className='chat__heading'>
               <Avatar/>
               <div className='chat__headingInfo'>
                <h3>Room name</h3>
                <p>Last seen at</p>
               </div>
           </div>
        </div>
    )
}

export default Chat

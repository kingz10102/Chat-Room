import React from 'react';
import '../css/Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons';


function Chat() {
    return (
        <div className='chat'>
           <div className='chat__heading'>
               <Avatar/>
               <div className='chat__headingInfo'>
                <h3>Room name</h3>
                <p>Last seen at</p>
               </div>
               <div classname='chat__headingRight'>
               <IconButton>     
                    <SearchOutlined/>
                </IconButton>
                <IconButton>  
                    <AttachFile/>
                </IconButton>  
                <IconButton>  
                    <MoreVert/>
                </IconButton>  
               </div>
           </div>
           <div className='chat__bodySpace'>
            <p>
                <span 
                className='chatter__name'>
                    Kingz
                </span>
                This is a message comp
                  <span 
                  className='chatter__timeslot'>
                    {new Date().toUTCString()}
                     </span>
                </p>
           </div>
        </div>
    )
}

export default Chat

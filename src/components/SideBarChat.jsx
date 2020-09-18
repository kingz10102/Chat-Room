import React from 'react';
import '../css/SideBarChat.css';
import { Avatar } from '@material-ui/core';

function SideBarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>This is the message com</p>
            </div>
        </div>
    );
}

export default SideBarChat

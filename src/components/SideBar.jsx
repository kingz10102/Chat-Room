import React from 'react'
import '../css/SideBar.css';
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import { Avatar, IconButton } from '@material-ui/core';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import { SearchOutlined } from "@material-ui/icons";

function SideBar() {

    // const [{ user }, dispatch] = useStateValue();

    return (
        <div className='sidebar'>
            <div className='sidebar__heading'>
                <Avatar />
                <div className='sidebar__headingRight'>
                    {/* makes it clickable */}
                    <IconButton>
                        <DonutLargeRoundedIcon/>
                    </IconButton>
                    <IconButton>
                        <ForumRoundedIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertRoundedIcon/>
                    </IconButton>
                </div>
            </div>

             {/* search icon built-search engine */}
             <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                <SearchOutlined/>
              <input 
              placeholder="Look up or chat away!" 
              type="text"
              />
        </div>
        </div>





        </div>
    )
}

export default SideBar;

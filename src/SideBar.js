import React, { useState } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ChatIcon from '@material-ui/icons/Chat';
import './SideBar.css';

function SideBar({ likes, shares, messages }) {
    const [liked, setLiked] = useState(false);
    const likeFunction = () => {
        if(liked){
            setLiked(false);
        }else {
            setLiked(true);
        }
    }
    return (
        <div className="sideBar">
            <div className="sideBar__icons">
                {liked ? <FavoriteIcon onClick={likeFunction}/> : <FavoriteBorderIcon onClick={likeFunction}/>}
                <p>{liked ? likes+1 : likes}</p>
            </div>
            <div className="sideBar__icons">
                <ChatIcon />
                <p>{messages}</p>
            </div>
            <div className="sideBar__icons">
            <ShareIcon />
                <p>{shares}</p>
            </div>
            
            
        </div>
    )
}

export default SideBar

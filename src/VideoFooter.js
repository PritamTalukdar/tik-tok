import React from 'react'
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter({channel, description, song}) {
    return (
        <div className="video__Footer">
            <div className="video__Footer__Text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon"/>
                    <Ticker mode="smooth">
                        {({index}) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img 
                    className="disc" 
                    src="https://cdn4.iconfinder.com/data/icons/glyph-set-one/32/glyph-set-one-33-512.png"
                    alt="tik-tok-video-link"    
            ></img>
        </div>
    )
}

export default VideoFooter

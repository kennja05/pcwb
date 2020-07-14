import React from 'react'
import Song from './Song'
import FirstSong from './audio/PCWBfinalSong2017.mp3'

export default class Audio extends React.Component {
    


    render(){
        return(
            <div className='container-fluid'>
                <h1 className='display-5'>Audio Recordings</h1>
                <hr className='my-2'></hr>
                <div className='song-list container'>
                    
                    <Song title="2017 Song" src={FirstSong}/>
                
                </div>
            </div>
        )
    }

}
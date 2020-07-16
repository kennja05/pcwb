import React from 'react'
import Song from './Song'
import InstantConcert from './audio/instantConcert.mp3'
import WeddingDance from './audio/weddingDance.mp3'

export default class Audio extends React.Component {
    


    render(){
        return(
            <div className='container-fluid'>
                <h1 className='display-5'>Audio Recordings</h1>
                <hr className='my-2'></hr>
                <div className='song-list container'>
                    {/* the date of the concert... could change to a tooltip if desired */}
                    <h2>July 21, 2017</h2>
                    <Song title="Instant Concert (1970), Harold Walters" src={InstantConcert}/>
                    <Song title="Wedding Dance (1955/1967), Jacques Press; Herbert Johnston, arr." 
                        src={WeddingDance} />
                </div>
            </div>
        )
    }

}
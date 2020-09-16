import React from 'react'
import Song from './Song'
import StyledTitle from './StyledComponents/StyledTitle'
import StyledHr from './StyledComponents/StyledHr'

import InstantConcert from './audio/instantConcert.mp3'
import WeddingDance from './audio/weddingDance.mp3'

export default class Audio extends React.Component {
    


    render(){
        return(
            <div className='container-fluid'>
                <StyledTitle text='Audio Recordings' type='h1'/>
                <StyledHr />
                <div className='song-list container'>
                    {/* the date of the concert... could change to a tooltip if desired */}
                    <StyledTitle text='July, 21, 2017' type='h2'/>
                    <Song title="Instant Concert (1970), Harold Walters" src={InstantConcert}/>
                    <Song title="Wedding Dance (1955/1967), Jacques Press; Herbert Johnston, arr." 
                        src={WeddingDance} />
                </div>
            </div>
        )
    }

}
import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

export default class Song extends React.Component {


    render(){
        const {title, src, releaseDate, composer} = this.props
        return(
        <div className='song container-fluid'>
            <div className='row'>
                <div className='col-sm-6'>
                    <span className='song-info'>{title}({releaseDate}) - {composer}</span>
                </div>
                <div className='col-sm-6'>
                    <ReactAudioPlayer style={{width: '100%'}} src={src} controls/>
                </div>
            </div>
        </div>)
    }


}
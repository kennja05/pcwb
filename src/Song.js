import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'

export default class Song extends React.Component {


    render(){
        const {title, src} = this.props
        return(
        <div className='song container-fluid'>
            <div className='row'>
                <div className='col-sm-7'>
                    <span className='song-info'>{title}</span>
                </div>
                <div className='col-sm-4'>
                    <ReactAudioPlayer style={{width: '100%'}} src={src} controls/>
                </div>
            </div>
        </div>)
    }


}
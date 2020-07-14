import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

export default class Song extends React.Component {


    render(){
        return(
        <div style={{border: '1px solid red'}} className='song'>
            <span>{this.props.title}</span>
            <ReactAudioPlayer src={this.props.src} controls/>
        </div>)
    }


}
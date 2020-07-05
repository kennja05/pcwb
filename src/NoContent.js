import React from 'react'
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'

const NoContent = () => {
    return(
        <div style={{fontFamily: 'Raleway', color: '#f37856'}}className='container jumbotron'>
            <h1>No Content Found</h1>
            <a href='/'><FontAwesomeIcon size='3x' icon={faHome} /></a>
            <a className='sr-only' href='/'>Home Page</a>
        </div>
    )
}

export default NoContent
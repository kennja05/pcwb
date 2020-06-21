import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons'


const Navigationalbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">PCWB</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/media">Media</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/director">Director</a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='/events'>Events</a>
                    </li>
                    <li className='nav-item'>
                      <a target='_blank' rel="noopener noreferrer" className='nav-link' 
                        href='https://www.facebook.com/PennCentralWindBand'>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        <span className='sr-only'>PCWB Facebook Page</span>
                      </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
    
}

export default Navigationalbar
import React from 'react'


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
                      <a className="nav-link" href="/director" tabIndex="-1" aria-disabled="true">Director</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
    
}

export default Navigationalbar
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'


class Navigationalbar extends React.Component {

  state={
    location: ''
  }

  determineCurrentLocation(urlString){

  }

  render() {
    console.log(window.location)
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a className="navbar-brand" href="/">PCWB</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/media">Media</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/director">Director</a>
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
}

export default Navigationalbar
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <a className="navbar-brand" href="/">PCWB</a>
        //     <div id="navbarSupportedContent"> {/*className="collapse navbar-collapse" -removed so nav bar still functions on mobile*/}
        //         <ul className="navbar-nav mr-auto">
        //             <li className="nav-item">
        //               <a className="nav-link" href="/about">About</a>
        //             </li>
        //             <li className="nav-item">
        //               <a className="nav-link" href="/media">Media</a>
        //             </li>
        //             <li className="nav-item">
        //               <a className="nav-link" href="/director">Director</a>
        //             </li>
        //             <li className='nav-item'>
        //               <a className='nav-link' href='/events'>Events</a>
        //             </li>
                    // <li className='nav-item'>
                    //   <a target='_blank' rel="noopener noreferrer" className='nav-link' 
                    //     href='https://www.facebook.com/PennCentralWindBand'>
                    //     <FontAwesomeIcon icon={faFacebookSquare} />
                    //     <span className='sr-only'>PCWB Facebook Page</span>
                    //   </a>
                    // </li>
        //         </ul>
        //     </div>
        // </nav>
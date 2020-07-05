import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'


class Navigationalbar extends React.Component {

  render() {
    const {location} = this.props
    return (
        <Navbar bg='light' expand='md'>
            <Navbar.Brand href='/'>PCWB</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className="mr-auto">
                <Nav.Link active={location === ''} href="/">Home</Nav.Link>
                <Nav.Link active={location === 'media'} href="/media">Media</Nav.Link>
                <Nav.Link active={location === 'events'} href="/events">Events</Nav.Link>
                <Nav.Link active={location === 'director'} href="/director">Director</Nav.Link>
                <Nav.Link target='_blank' href='https://www.facebook.com/PennCentralWindBand'>
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      )
    }
  }

export default Navigationalbar
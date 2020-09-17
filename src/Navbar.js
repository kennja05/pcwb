import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'


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
                <Nav.Link active={location === 'director'} href="/director">Director</Nav.Link>
                <Nav.Link active={location === 'events'} href="/events">Events</Nav.Link>
                <NavDropdown active={location === 'posters' || location === 'programs' ||location === 'audio' || location === 'whyband'} 
                  title='Media' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='/audio'>Audio</NavDropdown.Item>
                  <NavDropdown.Item href='/posters'>Posters</NavDropdown.Item>
                  {/* <NavDropdown.Item href='/programs'>Programs</NavDropdown.Item> */}
                  <NavDropdown.Item href='/whyband'>Why Band?</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link target='_blank' href='https://www.facebook.com/PennCentralWindBand'>
                  <FontAwesomeIcon icon={faFacebook} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      )
    }
  }

export default Navigationalbar
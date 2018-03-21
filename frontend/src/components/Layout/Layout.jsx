import React from 'react';
import { Navbar, NavItem, MenuItem, Nav, NavDropdown } from 'react-bootstrap';
import style from './style.css';
import clanLogo from '../../images/clanlogo.png';
import { Scrollbars } from 'react-custom-scrollbars';
import {getCookie} from '../../globalFunctions';

const Layout = props => (
  <div>
    <Navbar inverse collapseOnSelect className={style.Bar}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="http://eu.wargaming.net/clans/wot/500149962/">
            <img src={clanLogo} className={style.Logo} />
          </a>
        </Navbar.Brand>
        <Navbar.Brand>
          <a href="http://eu.wargaming.net/clans/wot/500149962/">
            5H1LD
        </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="https://de.wot-life.com/eu/clan/5H1LD-500149962/">
            WOT-Life
      </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Coming Soon</MenuItem>
            {/* <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem> */}
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          
          {
            getCookie('access_token') === '' ?
            //TODO: import the link for login and evaluate it
            <NavItem eventKey={2} href="https://api.worldoftanks.eu/wot/auth/login/?application_id=7bb6be0bf4b5d8ad86e8074c13acf70e&redirect_uri=http%3A%2F%2Flocalhost%3A3000/api/login">Login</NavItem>
            :
            //TODO: Make this with an axios request and not by an a tag
            <NavItem eventKey={2} href="/api/logout">Logout</NavItem>
          }
      
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className={style.Body}>
      <Scrollbars
        style={{ width: '100%', height: '100%'}}
      >
        <div className={style.BodyContent}>
          {props.children}
        </div>
      </Scrollbars>
    </div>
  </div>
)

export default Layout;
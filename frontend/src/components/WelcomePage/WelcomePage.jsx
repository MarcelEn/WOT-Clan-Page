import React from 'react';
import { Grid, Row, Col, PageHeader, small } from 'react-bootstrap';
import style from './style.css';
import clanLogo from '../../images/clanlogo.png';
import Footer from '../Footer/Footer.jsx';


const WelcomePage = props => (
  <div>
    <Grid>
      <Row>
        <div className={style.Center}>
          <img src={clanLogo} className={style.imageStyle} />
          <PageHeader>
            5H1LD
          <br />
            <small>
              Strategic Head Infantery of Lovely Dudes
            <br />
              <strong>♥ We are the lovely Dudes ♥</strong>
            </small>
          </PageHeader>
        </div>
      </Row>
      <Row>
        <h1>
          About Us
      </h1>
        <p>
          Wir sind ein kleiner Haufen aktiver Spieler die sich der Herausforderung des Aufbaus einer gemeinsamen Community stellen! Unser Ziel ist es BW/CW mit viel Skill und wenig Niveau zu fahren und uns auf der Weltkarte zu etablieren.
      </p>
        <h3>
          Was wir dir bieten:
      </h3>
        <ul>
          <li>
            eigenen TS-3-Server
        </li>
          <li>
            BW/CW sobald möglich
      </li>
          <li>
            das gewisse Maß an Schwachsinn
      </li>
        </ul>
        <h3>
          Was wir erwarten:
      </h3>
        <ul>
          <li>
            1300+ Wn8  +++recentWn8
        </li>
          <li>
            Teamfähigkeit
        </li>
          <li>
            Aktivität im Spiel und auf TS
        </li>
          <li>
            Tier 8 (2) und 10 (4)  CW/BW-Panzer
      </li>
        </ul>
        <p>
          Solltest du unser Interesse teilen und hast Lust mit uns rumzugurken, dann quatsch uns einfach an oder schau auf unserem TS vorbei!
      </p>
        <p>
          Lovely dudes sind immer willkommen, lovely girls natürlich auch <strong>♥</strong>
        </p>
        <p>
          TS: <strong>5h1ld.goip.de</strong>
        </p>
      </Row>
    </Grid>
    <Footer />
  </div>
  // <div>
  //   <div className={}>
  //     <img src={clanLogo} className={style.imageStyle} />
  //   </div>
  // </div>
)

export default WelcomePage;
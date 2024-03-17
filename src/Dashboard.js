
import React from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; 

const Dashboard = () => {
  const iconSize = "50px";

  return (
    <div>
      <header>
        <div className="logo">BOOK & TRAVEL</div>
        <nav>
          <ul className="mainmenu">
            <li><a href="#">Accommodations</a></li>
            <li><a href="#">Flights</a></li>
            <li><a href="#">Car Rentals</a></li>
           
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </nav>
        <div className="menu-toggle">
          <i className="fa fa-bars" style={{ fontSize: iconSize }}></i>
        </div>
        <div className="socialmedia">
          <a href="#" style={{ marginRight: '10px' }}><FontAwesomeIcon icon={faFacebook} style={{ fontSize: iconSize }} /></a>
          <a href="#" style={{ marginRight: '10px' }}><FontAwesomeIcon icon={faTwitter} style={{ fontSize: iconSize }} /></a>
          <a href="#" style={{ marginRight: '10px' }}><FontAwesomeIcon icon={faLinkedin} style={{ fontSize: iconSize }} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} style={{ fontSize: iconSize }} /></a>
        </div>
      </header>


      <div id="page1">
        <img alt="plane" className="plane" src="https://i.ibb.co/52bG3RC/landingpage-assets-0005-plane.png" />
        <div className="right">
          <h1 className="book">BOOK </h1> 
          <h1 className="travel">& TRAVEL</h1>
          <h4> Wherever you go, make yourself at home</h4>
          <form className="reservation">   
            <fieldset>
              <label> DESTINATION</label>
              <div>
                <input type="text" id="cities" name="cities" size="20" value="" placeholder="Paris, France" required />
              </div>
              <div className="left2">
                <label>CHECK-IN DATE</label>
                <input type="date" id="start" name="trip" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
                <label>ADULTS</label>
                <input list="adults" id="adults-number" name="adults-number" />
                <datalist id="adults">
                  <option value="1 adult" />
                  <option value="2 adults" />
                  <option value="3 adults" />
                  <option value="+3 adults" />
                </datalist>
              </div>
              <div className="right2">
                <label>CHECK-OUT DATE</label>
                <input type="date" id="end" name="trip" value="2019-07-29" min="2019-01-01" max="2019-12-31" />
                <label>CHILDREN</label>
                <input list="children" id="children-number" name="children-number" />
                <datalist id="children">
                  <option value="No children" />
                  <option value="1" />
                  <option value="2" />
                  <option value="3" />
                </datalist>
              </div>
              <div className="button">
                <input type="button" className="btn" value="START SEARCH" />
              </div>
            </fieldset>
          </form>
        </div>
      </div>

      <div id="page2">
        <h1> 25000 </h1>  
        <img alt="mondo" className="mondo" src="https://i.ibb.co/grLS2HM/Hot-Air-Balloon-960x1153.png" />
        <div className="sinistra">
          <h2>Travelers booked lovely trips</h2>
          <p>Well prepared means well traveled. Your journey starts much before you take your bag and set off. We help to find the ticket and accommodation you need, offer the routes, car rentals, and even book a taxi. Just choose the destination - we will do the rest.</p>
          <div className="button">
            <input type="button" className="bottone" value="READ MORE  →" />
          </div>   
        </div>
      </div>

      <div id="page3">
        <h2 className="intro">Introducing new features and offers</h2> 
        <div className="slider-container">
          <div className="menu">
            <label htmlFor="slide-dot-1"></label>
            <label htmlFor="slide-dot-2"></label>
            <label htmlFor="slide-dot-3"></label>
          </div>
          <input id="slide-dot-1" type="radio" name="slides" checked />
          <div className="slide slide-1">
            <div className="top-left">
              TRAVELER BONUS 
              <p className="tl"> Big networks of partners allow us to offer you the extra bonuses and services at your destinations. Free museums and excursions, gyms, breakfasts, parties, gifts, discounts for families, and much more. Check and choose.</p>
              <div className="button">
                <input type="button" className="bottone1" value="ALL BONUSES  →" />
              </div>
            </div>
            <img alt="paper" className="paper" src="https://i.ibb.co/HgVfMQQ/Paper-Plane-800x800.png" />  
          </div>
          <input id="slide-dot-2" type="radio" name="slides" />
          <div className="slide slide-2"></div>
          <input id="slide-dot-3" type="radio" name="slides" />
          <div className="slide slide-3"></div>
        </div>
      </div>

      <div id="page4">
        <h2 className="base">Our base consists of:</h2>
        <table>
          <tr>
            <th>1 billion</th>
            <th>120</th> 
            <th>250</th>
            <th>4K</th>
          </tr>
          <tr>
            <td>Hotels, guesthouses<br />and apartments</td>
            <td>Countries</td>
            <td>Airlines and<br />low-costers</td>
            <td>Travel agencies<br />and companies</td>
          </tr>
        </table>
      </div>

      <div id="sin2">
        <p className="business">
          Be it business, education, family holiday, a city break with friends, or a tour, we are here to support your travel. Comfortable journey and cozy accommodation - everything to make you feel at home whatever is the corner of the world.
        </p>
        <div className="button">
          <input type="button" className="bottone3" value="I WANT TO SEE →" />
        </div>  
        <img alt="valigia" className="valigia" src="https://i.ibb.co/v1wJw8B/suitcase-PNG10774.png" />
      </div> 

      <div id="footer">
        <ul className="mainmenu2">
          <li><a href="#">Accommodations</a></li>
          <li><a href="#">Flights</a></li>
          <li><a href="#">Car Rentals</a></li>
          <li><a href="#">Airport Taxis</a></li>
        </ul>

        <div className="socialmedia2">
  <a href="#" style={{ marginRight: '10px' }}><FontAwesomeIcon icon={faFacebook} style={{ fontSize: iconSize }} /></a>
  <a href="#" style={{ marginRight: '10px' }}><FontAwesomeIcon icon={faTwitter} style={{ fontSize: iconSize }} /></a>
  <a href="#" style={{ marginRight: '10px' }}><FontAwesomeIcon icon={faLinkedin} style={{ fontSize: iconSize }} /></a>
  <a href="#"><FontAwesomeIcon icon={faInstagram} style={{ fontSize: iconSize }} /></a>
</div>


        <ul id="collegamenti">
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Policies</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>

        <p className="final">Feel free to contact us:<br /> <span>travelight@mail.com</span><br /> © 2019 TRAVELIGHT LLC</p>
      </div>
    </div>
  );
}

export default Dashboard;

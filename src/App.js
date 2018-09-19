import React, { Component } from 'react';
import logo from './navlinks/pilot.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./navlinks/Home";
import Academy from "./navlinks/Academy";
import ContactUs from "./navlinks/ContactUs";
import DigitalTech from "./navlinks/DigitalTech";
import CivilEng from "./navlinks/CivilEng";
import Footer from "./footer/footer";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
           <div className="headerLogo">
              <img src={logo}/>
            </div> 
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/digitaltech">Digital Technology</NavLink></li>
            <li><NavLink to="/academy">Academic Faculty</NavLink></li>
            <li><NavLink to="/civileng">Civil Engineering</NavLink></li>
            <li><NavLink to="/contactus">Contact Us</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/digitaltech" component={DigitalTech}/>
            <Route path="/academy" component={Academy}/>
            <Route path="/civileng" component={CivilEng}/>
            <Route path="/contactus" component={ContactUs}/>
          </div>

           <div>
              <Footer/>
            </div>
        </div>
      </HashRouter>

    );
  }
}

export default App;

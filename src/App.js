import './App.css';
import './App.responsive.css';
import {BrowserRouter as Router,Switch,Route,Navlink} from 'react-router-dom'
import Main from './Components/Main/Main';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import More from './Components/More/More';
import Error from './Components/Error/Error';
import { useEffect , useRef ,useState} from 'react';

function App() {

  // refs 
  const headerRef = useRef()
  const navigationUl = useRef()
  const status = useRef("closed")
  
  // toggling responsive navigation button 
  function toggleNav(){
    if(status.current == "closed"){
    navigationUl.current.style = "display:flex;"
    status.current = "opened"
    }
    else if(status.current == "opened"){
    navigationUl.current.style = "display:none;"
    status.current = "closed"
    }
  }

  return (
    <Router>
     <header ref={headerRef}>
       <div className="header-content">
        <div className="intro-div">
         <div className="logo-div">
          <img src='/assests/logo.png' className="logo"></img>
         </div>
         <h1>NOW Photography</h1>
        </div>
        <ul className="navigation-ul" ref={navigationUl}>
          <li><a href="/">Main</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contacts">Contacts</a></li>
          <li><a href="/more">More</a></li>
        </ul>
        <button className="navigation-responsive-button" onClick={toggleNav}>
           <i class="fas fa-bars nav-icon" ></i>
        </button>
        </div>
        </header>
        <Switch> 
          <Route exact path='/' component={Main}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/contacts' component={Contacts}></Route>
          <Route path="/more" component={More}></Route>
          <Route path='' component={Error}></Route>
        </Switch> 
    </Router>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import SwipeToSlide from "./TestimonialSlider.js"


const Home = (props) => {
  return <h1>What's up, I am the home component</h1>
}

const Contact = (props) => {
  return <h1>What's up, I am the Contact component. This is page number {1+2}
  </h1>
}

const isActiveFunc = (match, location) =>{
  console.log(match, location)
  return match
}
//difference between Link and NavLink is that NavLink allows you to have an active state
const NavLinks = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink activeStyle={{color:"green"}} to ={{pathname: '/about'}}> About </NavLink>
    <NavLink
      isActive={isActiveFunc}
      activeClassName="active"
      to ={{pathname: '/contact'}}> Contact 
    </NavLink>
  </nav>
)

const App = () => (
  <Router>
    <div>
      <h1>Dope</h1>
      <NavLinks />
      <Route exact path="/" component={Home} />
      <Route exact path="/slider" component={SwipeToSlide} />
      {/* <Route path="/about" render={()=> <h1>Yoo from About</h1>}/> */}
      <Route
        path="/about"
        children={({ match }) => match && <h1>Yoo from About</h1>}
      />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
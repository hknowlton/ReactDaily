import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

const Home = (props) => {
  return <h1>What's up, I am the home component</h1>
}

const Contact = (props) => {
  return <h1>What's up, I am the Contact component. This is page number {1+2}
  </h1>
}
//difference between Link and NavLink is that NavLink allows you to have an active state
const NavLinks = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to ={{pathname: '/about'}}> About </NavLink>
    <NavLink to ={{pathname: '/contact'}}> Contact </NavLink>
  </nav>
)

const App = () => (
  <Router>
    <div>
      <NavLinks />
      <Route exact path="/" component={Home} />
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
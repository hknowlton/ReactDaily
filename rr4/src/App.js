import React  from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom';

const Home = (props) => {
console.log(props);
return <h1>What's up, I am the home component</h1>
}

const App = ()=> ( 
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      {/* <Route path="/about" render={()=> <h1>Yoo from About</h1>}/> */}
      <Route 
        path="/about" 
        children={({match })=> match &&<h1>Yoo from About</h1>}
      />
      <Route path="/contact" component={contact}/>
    </div>
  </Router>
);
export default App;

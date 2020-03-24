import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home'
import About from './about' /* Case sensitive! About and about are not the same */
import Login from './login'
import Messages from './messages'
import Navbar from './navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

// Step 2. Changed to have router coordinate what is displayed
ReactDOM.render((
  <Router>
    <>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} /> // Again, case matters here? An exact match for "Login" will throw an error if looking for "login"
      <Route exact path="/messages" component={Messages} />
    </>
  </Router>),
  document.getElementById('root')
);

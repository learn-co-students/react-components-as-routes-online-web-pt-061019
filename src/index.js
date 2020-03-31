//refactored: 
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);


// // before refactor:
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

// // const link = {
// //   width: '100px',
// //   padding: '12px',
// //   margin: '0 6 px 6 px',
// //   background: 'blue',
// //   textDecoration: 'none', 
// //   color: 'white'
// // };

// // const Navbar = () => 
// //   <div>
// //     <NavLink 
// //       to="/"
// //       exact
// //       style={link}
// //       activeStyle={{
// //       background: 'darkblue'
// //       }}
// //     >Home</NavLink>
// //     <NavLink
// //       to="/login"
// //       exact
// //       style={link}
// //       activeStyle={{
// //         background: 'darkblue'
// //       }}
// //     >Login</NavLink>
// //   </div>

// // const Home = () => {
// //   return (
// //     <div>
// //       <h1>Home!</h1>
// //     </div>
// //   );
// // };

// // inline version:
// // const Home = () => <h1>Home!</h1>;

// // const About = () => {
// //   return (
// //     <div>
// //       <h1>This is about component!</h1>
// //     </div>
// //   );
// // };

// // inline version:
// // const About = () => <h1>This is my about component!</h1>

// // const Login = () => {
// //   return (
// //     <div>
// //       <form>
// //         <div>
// //           <input type="text" name="username" placeholder="Username" />
// //           <label htmlFor="username">Username</label>
// //         </div>
// //         <div>
// //           <input type="password" name="password" placeholder="Password" />
// //           <label htmlFor="password">Password</label>
// //         </div>
// //         <input type="submit" value="Login" />
// //       </form>
// //     </div>
// //   )
// // }

// ReactDOM.render(
//   // <Home />,
//   <Router>
//     <>
//     {/* <Route path="/" component={Home} /> */}
//     {/* The above code will keep that component rendering */}

//     {/* <Route path="/" render={() => <h1>Home!</h1>} /> */}
//     {/* The above code uses render for simple inline style */}

//     <Navbar />
//     <Route exact path="/" component={Home} />
//     <Route exact path="/about" component={About} />
//     <Route exact path="/login" component={Login} />
//     </>
//   </Router>,
//   document.getElementById('root')
// );

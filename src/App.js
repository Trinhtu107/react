import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Hello/Home';
import Modal from './Hello/Modal';
import About from './Hello/About';
import Contact from './Hello/Contact';
import Blog from './Hello/Blog';
import ReactTypingEffect from 'react-typing-effect';

function App() {
    return (
        <Router>
            <div className="container">
                <h2><ReactTypingEffect text={"Hello cac ban ahiii!!!!!!!!!!!!!"} /></h2>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto" >
                        <li><Link to={'/'} className="nav-link"> Home </Link></li>
                        <li><Link to={'/about'} className="nav-link">About</Link></li>
                        <li><Link to={'/blog'} className="nav-link">Blog</Link></li>
                        <li><Link to={'/modal'} className="nav-link">Modal</Link></li>
                        <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                    </ul>
                </nav>
                <hr />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/blog' component={Blog} />
                    <Route path='/modal' component={Modal} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About';
import Cases from '../Components/Cases';
import Contact from '../Components/Contact';

function PageContainer(props){
    return (
        <div id="PageContainer">
            <Route path='/' render={routerProps => <Home {...routerProps}/>}/>
            <Route path='/about' render={routerProps => <About {...routerProps}/>}/>
            <Route path='/cases' render={routerProps => <Cases {...routerProps}/>}/>
            <Route path='/contact' render={routerProps => <Contact {...routerProps}/>}/>
        </div>
    )
}

export default PageContainer;
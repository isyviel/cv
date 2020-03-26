
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OnePage from './component/OnePage'

import React, { useState } from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Route exact path="/" component={OnePage} />
        {/* <Route path="/mail" component={Formulaire}/> */}
      </Router>
    </ParallaxProvider>
  );
}

export default App;

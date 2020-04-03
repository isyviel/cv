
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OnePage from './component/OnePage'
import React from "react"
import { StaticRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    
      <Router>
        <Route exact path="/" component={OnePage} />
      </Router>
    
  );
}

export default App;

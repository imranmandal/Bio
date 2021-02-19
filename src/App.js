



import './index.css';
import Home from "./Component/Home";
import React , { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Template from './Component/Template';
import Templates from './Component/Templates';
 
function App() {
  const [template, setTemplate] = useState('');
  return (
    <>
    
    <Router>
      <Switch>
        <Route exact path="/" >
          <Redirect to="/Home" />
        </Route>
        <Route path="/Home" component={Home} />
        <Route path="/template" component={Template} />
      </Switch>
    </Router>
    </>
  )
}
 
export default App
 
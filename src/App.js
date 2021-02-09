import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/header/header';
import Insert_estimate from "./components/insert_estimate/insert_estimate";
import Login from './components/login/login';
import Month_schedule from './components/month_schedule/month_schedule';



function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={['/','/home']} exact>
          <Login />
        </Route>
        <Route path="/month_schedule" exact>
          <Month_schedule />
        </Route>
        <Route path="/insert_estimate" exact>
          <Insert_estimate />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

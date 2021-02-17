import React, { useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/header/header';
import Estimate from "./components/works_management/estimate/estimate";
import Login from './components/login/login';
import Month_schedule from './components/works_management/month_schedule/month_schedule';
import Notfound from "./components/notfound/notfound";
import Personal_order_insert from "./components/works_management/personal/personal_order_insert";
import Team_talk from "./components/works_management/team_talk/team_talk";
import Team_photo from "./components/works_management/team_photo/team_photo";
import Support_list from "./components/works_management/support/support_list";
import Emer_contact from "./components/works_management/emergency_contact_network/emer_contact";
import Club from "./components/works_management/club/club";
import Representative from "./components/works_management/representative/representative";
import Management_quailty from "./components/management_quality/management_quailty";



function App() {
  

  
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path={['/','/home']} component={Login} />
          <Route path="/month_schedule" component={Month_schedule} />
          <Route path="/estimate"><Estimate /></Route>
          <Route path="/personal_order_insert"><Personal_order_insert /></Route>
          <Route path="/our_team_talktalk"><Team_talk/></Route>
          <Route path="/team_photo"><Team_photo /></Route>
          <Route path="/support"><Support_list /></Route>
          <Route path="/emergency_contact"><Emer_contact /></Route>
          <Route path="/club"><Club /></Route>
          <Route path="/representative"><Representative /></Route>

          <Route path="/management_quailty"><Management_quailty /></Route>
          
          <Route component={Notfound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

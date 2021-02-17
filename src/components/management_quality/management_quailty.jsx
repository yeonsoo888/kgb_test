import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Compliment from './compliment/compliment';
import Scolding from './scolding/scolding';

const Management_quailty = () => {
    return (
        <>
            <Route path="/management_quailty/compliment"><Compliment /></Route>
            <Route path="/management_quailty/scolding"><Scolding /></Route>
        </>
    );
};

export default Management_quailty;
import React from 'react';
import styles from './emer_contact.module.css';
import './emer_contact.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";


const Emer_contact = () => {
    return (
        <div className={styles.inner}>
            <div className={styles.subtitle}>
                <p>긴급연락망</p>
            </div>
            <ul className={styles.tap_menu}>
                <li>
                    <NavLink to="/emergency_contact/kgb">KGB이사</NavLink>
                </li>
                <li>
                    <NavLink to="/emergency_contact/yes2404">yes2404</NavLink>
                </li>
                <li>
                    <NavLink to="/emergency_contact/yes2424">yes2424</NavLink>
                </li>
                <li>
                    <NavLink to="/emergency_contact/ycap">Ycap</NavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/emergency_contact/kgb">
                    1
                </Route>
                <Route path="/emergency_contact/yes2404">
                    2
                </Route>
                <Route path="/emergency_contact/yes2424">
                    3
                </Route>
                <Route path="/emergency_contact/ycap">
                    4
                </Route>
            </Switch>
        </div>
    );
};

export default Emer_contact;
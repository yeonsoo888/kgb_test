import React from 'react';
import styles from './scolding.module.css';
import data from "../../../data/scolding.json";
import { Link, NavLink, Route } from 'react-router-dom';
import Ourteam from './ourteam';
import Scolding_view from './scolding_view';
import Different_team from './different_team';

const Scolding = () => {
    return (
        <>
            <Route path="/management_quailty/scolding" exact>
                <div className="inner" style={{background: "#F7FAFA"}}>
                    <div className="subtitle">
                        <p>꾸중글</p>
                    </div>
                    <ul className={styles.list_wrap}>
                        <li><NavLink exact to="/management_quailty/scolding">우리팀</NavLink></li>
                        <li><NavLink to="/management_quailty/scolding/different_team">다른팀</NavLink></li>
                    </ul>
                    <Ourteam data={data} />
                    <Link className={styles.btn_write}>+</Link>
                </div>
            </Route>
            <Route path="/management_quailty/scolding/view/:target"><Scolding_view data={data} /></Route>
            <Route path="/management_quailty/scolding/different_team"><Different_team data={data} /></Route>
        </>
    );
};

export default Scolding;
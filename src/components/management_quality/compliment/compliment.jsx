import React from 'react';
import styles from './compliment.module.css';
import data from "../../../data/compliment.json";
import { Link, NavLink, Route } from 'react-router-dom';
import Ourteam from './ourteam';
import Compliment_view from './compliment_view';
import Different_team from './different_team';

const Compliment = () => {
    return (
        <>
            <Route path="/management_quailty/compliment" exact>
                <div className="inner" style={{background: "#F7FAFA"}}>
                    <div className="subtitle">
                        <p>칭찬글</p>
                    </div>
                    <ul className={styles.list_wrap}>
                        <li><NavLink exact to="/management_quailty/compliment">우리팀</NavLink></li>
                        <li><NavLink to="/management_quailty/compliment/different_team">다른팀</NavLink></li>
                    </ul>
                    <Ourteam data={data} />
                    <Link className={styles.btn_write}>+</Link>
                </div>
            </Route>
            <Route path="/management_quailty/compliment/view/:target"><Compliment_view data={data} /></Route>
            <Route path="/management_quailty/compliment/different_team"><Different_team data={data} /></Route>
        </>
    );
};

export default Compliment;
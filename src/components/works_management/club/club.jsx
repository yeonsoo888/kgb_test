import React from 'react';
import styles from './club.module.css';
import data from '../../../data/club.json';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Club_view from './club_view';
import Club_insert from './club_insert';
const Club = () => {

    const list = data.club.map(item => (
        <li key={item.id}>
            <Link to={`/club/view/${item.id}`}>
                <strong>{item.title}</strong>
                <div>
                    <em>{item.team} ({item.name})</em>
                    <span>{item.write_date}</span>
                </div>
            </Link>
        </li>
    ))

    return (
        <>
            <Route path="/club" exact>
                <div className={styles.inner}>
                    <div className={styles.subtitle}>
                        <p>상조회</p>
                    </div>
                    <div>
                        <ul className={styles.list_wrap}>{list}</ul>
                    </div>
                </div>
                <Link to="/club/insert" className={styles.btn_insert}>+</Link>
            </Route>
            <Route path="/club/view/:item_id">
                <Club_view data={data} />
            </Route>
            <Route path="/club/insert">
                <Club_insert />
            </Route>
        </>
    );
};

export default Club;
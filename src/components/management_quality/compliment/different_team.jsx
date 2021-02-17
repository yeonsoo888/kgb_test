import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import styles from "./different_team.module.css";

const Different_team = ({data}) => {
    const selected = data.data.filter(item => item.team !== "1");
    const list = selected.map((item) => (
        <li key={item.id}>
            <Link to={`/management_quailty/compliment/view/${item.id}`}>
                <div className={styles.title_wrap}>
                    <strong>{item.contents.title}</strong><span>({item.contents.comment.length})</span>
                </div>
                <div>
                    <em>{item.contents.team}</em><em>{item.contents.date}</em>
                </div>
            </Link>
        </li>
    ));

    return (
        <>
            <div className="inner" style={{background: "#F7FAFA"}}>
                <div className="subtitle">
                    <p>칭찬글</p>
                </div>
                <ul className={styles.tap_wrap}>
                    <li><NavLink exact to="/management_quailty/compliment">우리팀</NavLink></li>
                    <li><NavLink to="/management_quailty/compliment/different_team">다른팀</NavLink></li>
                </ul>
                <div>
                    <ul className={styles.list_wrap}>
                        {list}
                    </ul>
                    <Link className={styles.btn_write}>+</Link>
                </div>
            </div>
        </>
    );
};

export default Different_team;
import React from 'react';
import { Link, Route } from 'react-router-dom';
import styles from './ourteam.module.css';
const Ourteam = ({data}) => {

    const selected = data.data.filter(item => item.team === "1");
    const list = selected.map((item) => (
        <li key={item.id}>
            <Link to={`/management_quailty/scolding/view/${item.id}`}>
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
            <Route path="/management_quailty/scolding" exact>
                <ul className={styles.list_wrap}>
                    {list}
                </ul>
            </Route>
        </>
    );
};

export default Ourteam;
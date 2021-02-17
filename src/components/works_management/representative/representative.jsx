import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, useParams } from "react-router-dom";
import styles from './representative.module.css';
import './representative.css';
import data from "../../../data/representative.json";
import Representative_contents from './representative_contents';

const Representative = () => {

    return (
        <div className={styles.inner}>
            <div className={styles.subtitle}>
                <p>권역 및 대표</p>
            </div>
            <ul className={styles.subNav}>
                <li><NavLink to="/representative/kgb" >KGB이사</NavLink></li>
                <li><NavLink to="/representative/yes2404" >yes2404</NavLink></li>
                <li><NavLink to="/representative/yes2424">yes2424</NavLink></li>
                <li><NavLink to="/representative/ycap" >ycap</NavLink></li>
            </ul>
            <div className={styles.contents_wrap}>
                <ul className={styles.tableHead}>
                    <li>권역</li>
                    <li>대리점명</li>
                    <li>대표자</li>
                    <li>연락처</li>
                </ul>
                <Route path="/representative/:company">
                    <Representative_contents data={data} />
                </Route>
            </div>
        </div>
    );
};

export default Representative;
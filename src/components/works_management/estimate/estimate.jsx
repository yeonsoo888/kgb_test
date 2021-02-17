import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom';
import styles from './estimate.module.css';
import Estimate_info from './estimate_info';
import Estimate_insert from './estimate_insert';
import data from "../../../data/data.json"

const Estimate = () => {

    return (
        <>
            <Route path="/estimate" exact>
                <div className={styles.inner}>
                    <div className={styles.subtitle}>
                        <p>방문견적 입력</p>
                    </div>
                        <ul className={styles.list}>
                            {
                                data.userInfo.map(item => (
                                    <li key={item.id}>
                                        <Link to={`/estimate/info/${item.id}`}>
                                            <div className={styles.listTitle}>
                                                <span>[{item.orderNum}]</span><strong>{item.name}</strong><span>({item.phoneNum})</span>
                                            </div>
                                            <p>이사일 : <span>{item.dateMove}</span></p>
                                            <p>전체금액 : <span>{item.price}</span></p>
                                            <div>
                                                <p>접수일 : <span>{item.dateOrder}</span></p>
                                                <em>{item.state}</em>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                <div className={styles.btn_insert}><Link to="/estimate/insert">+</Link></div>
            </Route>
            <Route path="/estimate/info/:item_id">
                <Estimate_info data={data} />
            </Route>
            <Route path="/estimate/insert">
                <Estimate_insert />
            </Route>
        </>
    );
};

export default Estimate;
import React from 'react';
import { BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom';
import styles from './support_list.module.css';
import data from '../../../data/support.json';
import Support_view from './support_view';
import Support_insert from './support_insert';

const Support_list = () => {

    const listItem = data.support.map(item => (
        <li key={item.id}>
            <Link to={`/support/view/${item.id}`}>
                <div>
                    <strong>({item.team} : {item.name} / {item.weight})</strong>
                    <span>{item.status}</span>
                </div>
                <p>이사일 : {item.date_move}</p>
                <p>연락처 : {item.phone}</p>
                <div className={styles.adress}>
                    <span>출발지 주소 :</span>
                    <p>{item.start_adress}</p>
                </div>
                <div className={styles.adress}>
                    <span>도착지 주소 :</span>
                    <p>{item.arrive_adress}</p>
                </div>
            </Link>
        </li>
    ))

    return (
        <>
            <Route path="/support" exact>
                <div className={styles.inner}>
                    <div className={styles.subtitle}>
                        <p>지원요청/대기</p>
                    </div>
                    <div>
                        <ul className={styles.listWrap}>{listItem}</ul>
                    </div>
                </div>
                <Link to="/support/insert" className={styles.btn_insert}>+</Link>
            </Route>
            <Route path="/support/view/:item_id"><Support_view /></Route>
            <Route path="/support/insert"><Support_insert /></Route>
        </>
    );
};

export default Support_list;
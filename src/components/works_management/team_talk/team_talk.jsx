import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import styles from './team_talk.module.css';
import talkinfo from '../../../data/talk.json';
import Team_talk_view from './team_talk_view';
import Team_talk_insert from './team_talk_insert';

const Team_talk = () => {
    const liItem = talkinfo.talk.map(item => (
        <li key={item.id} className="styles.item">
            <Link to={`/our_team_talktalk/view/${item.id}`}>
                <strong>{item.title}</strong><span>({item.comment.length})</span>
                <div>
                    <em>{item.team}</em>
                    <span>{item.date}</span>
                </div>
            </Link>
        </li>
        
    ))

    return (
        <>
            <Route exact path="/our_team_talktalk">
                <div className={styles.inner}>
                    <div className={styles.subtitle}>
                        <p>우리팀 톡톡</p>
                    </div>
                        <div class={styles.contents_wrap}>
                            <ul className={styles.talk_list}>{liItem}</ul>
                        </div>
                </div>
                <Link to="/our_team_talktalk/insert" className={styles.btn_insert}>
                    +
                </Link>
            </Route>
            <Route path="/our_team_talktalk/view/:item_id">
                <Team_talk_view />
            </Route>
            <Route path="/our_team_talktalk/insert">
                <Team_talk_insert />
            </Route>
        </>
    );
};

export default Team_talk;
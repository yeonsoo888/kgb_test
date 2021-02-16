import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styles from './team_talk_view.module.css';
import talkinfo from '../../../data/talk.json';
import submitBtn from './photo/btn_submit.png';
import deleteBtn from './photo/delete.png';
import modifyBtn from './photo/modify.png';

const Team_talk_view = () => {
    const params = useParams();
    const hisory = useHistory();

    const selectedItem = talkinfo.talk.filter(item => item.id === params.item_id);
    const comment = selectedItem[0].comment.map(item1 => (
        <li key={item1.id}>
            <div>
                <strong>{item1.name} ({item1.team})</strong>
                <span>{item1.date}</span>
            </div>
            <p>{item1.content}</p>
            <div className={styles.btn_wrap}>
                <button type="button"><img src={modifyBtn} />수정</button>
                <button type="button"><img src={deleteBtn} />삭제</button>
            </div>
        </li>
    ))

    const handleMoveList = () => {
        hisory.push("/our_team_talktalk")
    }

    return (
        <>
            <div className={styles.inner}>
                <div className={styles.subtitle}>
                    <p>우리팀 톡톡</p>
                </div>
                <div className={styles.wrap}>
                    <strong className={styles.title}>{selectedItem[0].title}</strong>
                    <div>
                        <em>{selectedItem[0].writer} ({selectedItem[0].team})</em>
                        <span>{selectedItem[0].date}</span>
                    </div>
                    <hr />
                    <div className={styles.photo}></div>
                    <p>{selectedItem[0].content}</p>
                    <div className={styles.btn_wrap}>
                        <button type="button"><img src={modifyBtn} />수정</button>
                        <button type="button"><img src={deleteBtn} />삭제</button>
                        <button type="button" onClick={handleMoveList}>목록</button>
                    </div>
                </div>
                <div className={styles.comment_wrap}>
                    <ul>
                        {comment}
                    </ul>
                </div>
            </div>
            <div className={styles.input}>
                <form>
                    <input type="text" name="" placeholder="덧글을 작성해 보세요." />
                    <button type="button"><img src={submitBtn} /></button>
                </form>
            </div>
        </>
    );
};

export default Team_talk_view;
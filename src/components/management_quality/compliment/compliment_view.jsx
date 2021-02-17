import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styles from './compliment_view.module.css';
import submitBtn from './photo/btn_submit.png';
import deleteBtn from './photo/delete.png';
import modifyBtn from './photo/modify.png';

const Compliment_view = ({data}) => {

    const history = useHistory()

    const param = useParams();
    const selected = data.data.filter(item => item.id === param.target);
    const comment = selected[0].contents.comment.map(item=>(
        <li key={item.id}>
            <div>
                <em>{item.name} ({item.team})</em>
                <span>{item.date}</span>
            </div>
            <p>{item.text}</p>
            <div className={styles.comment_btn_wrap}>
                <button type="button"><img src={modifyBtn} />수정</button>
                <button type="button"><img src={deleteBtn} />삭제</button>
            </div>
        </li>
    ))

    const handleGoList = () => {
        history.push('/management_quailty/compliment');
    }

    return (
        <div className="inner">
            <div className="subtitle">
                <p>칭찬글</p>
            </div>
            <div className={styles.contents}>
                <div className={styles.title_wap}>
                    <strong>{selected[0].contents.title}</strong>
                    <div>
                        <em>{selected[0].contents.writer} ({selected[0].contents.team})</em>
                        <span>{selected[0].contents.date}</span>
                    </div>
                </div>
                <div className={styles.text}>
                    <p>{selected[0].contents.text}</p>
                </div>
            </div>
            <div className={styles.btn_wrap}>
                <button><img src={modifyBtn} />수정</button>
                <button><img src={deleteBtn} />삭제</button>
                <button onClick={handleGoList}>목록</button>
            </div>
            <div className={styles.comment_wrap}>
                <ul>
                    {comment}
                </ul>
            </div>
            <div className={styles.input}>
                <form>
                    <input type="text" name="" placeholder="덧글을 작성해 보세요." />
                    <button type="button"><img src={submitBtn} /></button>
                </form>
            </div>
        </div>
    );
};

export default Compliment_view;
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styles from './support_view.module.css';
import data from '../../../data/support.json';

const Support_view = () => {
    
    const history = useHistory()
    const params = useParams()

    const selectedItem = data.support.filter(item => item.id === params.item_id);

    const handleBack = () => {
        history.push("/support");
    }

    return (
        <div className={styles.inner}>
            <div className={styles.subtitle}>
                <p>지원요청/대기</p>
            </div>
            <strong className={styles.title}>{selectedItem[0].date_move} 대기내용</strong>
            <div className={styles.contents}>
                <div className={styles.line}></div>
                <ul>
                    <li>
                        <span>지원구분</span>
                        <p>{selectedItem[0].status}</p>
                    </li>
                    <li>
                        <span>지원자</span>
                        <p>[{selectedItem[0].company}] {selectedItem[0].team} : {selectedItem[0].name}</p>
                        <p>연락처 : {selectedItem[0].phone}</p>
                    </li>
                    <li>
                        <span>지원내용</span>
                        <p>이사일 : {selectedItem[0].date_move}</p>
                        <p>인원/차량 : {selectedItem[0].people}명 / {selectedItem[0].weight}</p>
                        <p>이사지역 : 전지역</p>
                    </li>
                    <li>
                        <span>메모내용</span>
                        <p>{selectedItem[0].memo}</p>
                    </li>
                </ul>
            </div>
            <div className={styles.btn_wrap}>
                <button type="button" onClick={handleBack}>닫기</button>
            </div>
        </div>
    );
};

export default Support_view;
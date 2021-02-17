import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './club_view.module.css';

const Club_view = ({data}) => {

    const param = useParams();
    const selected = data.club.filter(item => (param.item_id === item.id));
    const selectedItem = selected[0];

    return (
        <div className={styles.inner}>
            <div className={styles.subtitle}>
                <p>상조회</p>
            </div>
            <div className={styles.listWrap}>
                <ul>
                    <li>
                        <span>제목</span>
                        <strong>{selectedItem.title}</strong>
                    </li>
                    <li>
                        <span>팀명</span>
                        <strong>{selectedItem.team}</strong>
                    </li>
                    <li>
                        <span>작성자</span>
                        <strong>{selectedItem.name}</strong>
                    </li>
                    <li>
                        <span>작성일</span>
                        <strong>{selectedItem.write_date}</strong>
                    </li>
                </ul>
                <div>
                    <p>{selectedItem.contents}</p>
                </div>
            </div>
        </div>
    );
};

export default Club_view;
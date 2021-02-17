import React from 'react';
import styles from './club_insert.module.css';

const Club_insert = () => {
    return (
        <div className={styles.inner}>
            <div className={styles.subtitle}>
                <p>상조회</p>
            </div>
            <form>
                <div>
                    <span>제목</span>
                    <input type="text" name="" placeholder="제목을 입력하세요." />
                </div>
                <div>
                    <span>작성자</span>
                    <em>홍길동</em>
                </div>
                <textarea name="" placeholder="내용을 입력하세요."></textarea>
                <button type="button">저장</button>
            </form>
        </div>
    );
};

export default Club_insert;
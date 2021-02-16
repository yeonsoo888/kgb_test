import React from 'react';
import styles from './team_talk_insert.module.css'

const Team_talk_insert = () => {
    return (
        <div className={styles.inner}>
            <div className={styles.subtitle}>
                <p>우리팀 톡톡</p>
            </div>
            <form>
                <ul>
                    <li>
                        <span>제목</span>
                        <input type="text" name="" placeholder="제목을 입력하세요." />
                    </li>
                    <li>
                        <span>작성자</span>
                        <input type="text" name="" readOnly value="작성자" />
                    </li>
                    <li>
                        <span>비밀번호</span>
                        <input type="text" name="" />
                    </li>
                    <li>
                        <span>E-Mail</span>
                        <input type="text" name="" />
                    </li>
                    <li>
                        <textarea name="" placeholder="내용을 입력하세요"  ></textarea>
                    </li>
                </ul>
                <button type="button">저장</button>
            </form>
        </div>
    );
};

export default Team_talk_insert;
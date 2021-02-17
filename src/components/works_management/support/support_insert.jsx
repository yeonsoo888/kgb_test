import React from 'react';
import styles from './support_insert.module.css';

const Support_insert = () => {
    return (
        <div className={styles.inner}>
            <div className={styles.subtitle}>
                <p>지원요청/대기</p>
            </div>
            <div className={styles.wrap}>
                <form>
                    <ul>
                        <li>
                            <span>지원구분</span>
                            <select name="">
                                <option value="선택" disabled selected hidden>선택</option>
                                <option value="">1</option>
                                <option value="">2</option>
                            </select>
                        </li>
                        <li>
                            <span>브랜드</span>
                            <select name="">
                                <option value="선택" disabled selected hidden>선택</option>
                                <option value="">1</option>
                                <option value="">2</option>
                            </select>
                        </li>
                        <li>
                            <span>지원자</span>
                            <strong>홍길동 (서울 1팀)</strong>
                        </li>
                        <li>
                            <span>차량</span>
                            <select name="">
                                <option value="선택" disabled selected hidden>선택</option>
                                <option value="">1</option>
                                <option value="">2</option>
                            </select>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default Support_insert;
import React from 'react';
import styles from './month_schedule.module.css';



const Month_schedule = () => {
    return (
        <div className={styles.inner}>
            <div className={styles.subtitle}>
                <p>작업일정 (월별)</p>
            </div>
            <div className={styles.contents}>
                <ul>
                    <li><div></div>계약</li>
                    <li><div></div>계약</li>
                    <li><div></div>계약</li>
                    <li><div></div>계약</li>
                    <li><div></div>계약</li>
                </ul>
            </div>
            <div className={styles.calendar}>
            </div>
        </div>
    );
};

export default Month_schedule;
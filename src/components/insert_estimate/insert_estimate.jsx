import React, { useRef, useState } from 'react';
import styles from './insert_estimate.module.css'

const Insert_estimate = () => {

    const [estimate,setEstimate] = useState([
        {
            id: 1,
            orderNum: "2548759",
            name: "문미옥",
            phoneNum: "010-0000-0000",
            dateMove: "2021-00-00",
            price: "1,234,560",
            dateOrder: "2021-00-00",
            state: "견적의뢰"
        },
        {
            id: 2,
            orderNum: "2548239",
            name: "문미옥",
            phoneNum: "010-0000-0000",
            dateMove: "2021-00-00",
            price: "1,234,560",
            dateOrder: "2021-00-00",
            state: "견적의뢰"
        },
    ])
    const nextId = useRef(4);
    
    return (
        <div className={styles.inner}>
            <div className={styles.subtitle}>
                <p>방문견적 입력</p>
            </div>
            <ul className={styles.list}>
                {
                    estimate.map(item => (
                        <li key={item.id}>
                            <div>
                                <span>[{item.orderNum}]</span><strong>{item.name}</strong><span>({item.phoneNum})</span>
                            </div>
                            <p>이사일 : <span>{item.dateMove}</span></p>
                            <p>전체금액 : <span>{item.price}</span></p>
                            <div>
                                <p>접수일 : <span>{item.dateOrder}</span></p>
                                <em>{item.state}</em>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Insert_estimate;
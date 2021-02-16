import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import styles from './estimate_info.module.css';
import data from '../../../data/data.json';

const Estimate_info = () => {
    const params = useParams();
    
    let selected_item = {
        orderNum: "sorry",
        name: "sorry",
        phoneNum: "sorry",
        num: "sorry",
        dateMove: "sorry",
        price: "sorry",
        dateOrder: "sorry",
        state: "sorry",
        shape: "sorry",
    }

    for(let i=0;i<data.userInfo.length;i++) {
        if(data.userInfo[i].id === Number(params.item_id)) {
            selected_item = data.userInfo[i];
            break;
        }
    }
    return (
        <div className={styles.inner}>
            <div className={styles.subtitle}>
                <p>방문견적 입력</p>
            </div>
            <strong>고객정보</strong>
            <div className={styles.contents_wrap}>
                <ul>
                    <li>
                        <span>고객명</span>
                        <em>{selected_item.name}</em>
                    </li>
                    <li>
                        <span>휴대폰</span>
                        <em>{selected_item.phoneNum}</em>
                    </li>
                    <li>
                        <span>전화번호</span>
                        <em>{selected_item.num}</em>
                    </li>
                    <li>
                        <span>이사형태</span>
                        <em>{selected_item.shape}</em>
                    </li>
                </ul>
            </div>
            <strong>이사정보</strong>
            <div className={styles.contents_wrap}>
                <ul>
                    <li>
                        <span>이사일</span>
                        <em>{selected_item.dateMove}</em>
                    </li>
                    <li>
                        <span>포장일</span>
                        <em>{selected_item.dateOrder}</em>
                    </li>
                    <li>
                        <span>출발지 주소</span>
                        <em>{selected_item.orderNum}</em>
                    </li>
                    <li>
                        <span>도착지 주소</span>
                        <em>{selected_item.price}</em>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Estimate_info;
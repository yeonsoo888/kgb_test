import React, { useRef, useState } from 'react';
import styles from './team_photo.module.css';
import fileIcon from './photo/file.png';
import testPhoto from './photo/photo_insert.jpg';

const Team_photo = () => {
    const [textValue,setTextValue] = useState("");
    const fileRef = useRef();

    const fileChange = () => {
        const value = fileRef.current.value;
        setTextValue(value);
    }

    return (
        <div className={styles.inner}>
            <div className={styles.subtitle}>
                <p>팀 단체사진 등록</p>
            </div>
            <div className={styles.wrap}>
                <strong>단체사진관련문구</strong>
                <hr />
                {/* <img src={textValue} alt=""/> */}
                <img src={testPhoto} alt=""/>
                <div>
                    <input type="text" value={textValue} placeholder="사진을 첨부하세요" readOnly />
                    <img src={fileIcon} alt=""/>
                    <input ref={fileRef} type="file"  name="" className={styles.fileUpLoad} onChange={fileChange} />
                </div>
            </div>
        </div>
    );
};

export default Team_photo;
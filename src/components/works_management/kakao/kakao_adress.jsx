import React, { useState } from 'react';
import DaumPostcode from "react-daum-postcode";
import styles from './kakao_adress.module.css';

const Kakaoadress = () => {
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
            if (data.bname !== '') {
            extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        const elInput1 = document.getElementById("adress1");
        elInput1.value = fullAddress;
        setVisible("none");
    }
    const openPopup = () => {
        setVisible("block");
    }
    const closePopup = () => {
        setVisible("none");
    }
    const [visible, setVisible] = useState("none");
    
    const popupStyle = {
        display: "block",
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-40%)",
        maxWidth: "320px"
    }

    const inputStyle ={
        display: "inline-block",
        width: "100%",
        height: "30px",
        border: "1px solid #eee",
        borderRadius: "5px",
        fontSize: "12px",
        padding: "0 0 0 10px",
        margin: "0 0 10px 0"
    }    

    const wrapStyle = {
        display: visible,
    }

    return (
        <>
            <div>
                <span>출발지 주소</span>
                <button type="button" onClick={openPopup}>주소검색</button>
            </div>
            <div className={styles.daum_wrap} style={wrapStyle} onClick={closePopup}>
                <DaumPostcode
                    onComplete={handleComplete}
                    style={popupStyle}
                />
            </div>
            <div style={{margin: "10px 0 0 0"}}>
                <input style={inputStyle} id="adress1" type="text" readOnly />
                <input style={inputStyle} type="text" placeholder="상세주소"/>
            </div>
            <div>
                <span>도착지 주소</span>
                <button type="button">주소검색</button>
            </div>
            
            <div style={{margin: "10px 0 0 0"}}>
                <input style={inputStyle} id="adress2" type="text" readOnly />
                <input style={inputStyle} type="text" placeholder="상세주소"/>
            </div>
            <hr style={{border:"none",background:"#eee",height: "1px",margin: "10px 0"}} />
            <div>
                <span style={{color: "#909090"}}>운송거리 (Km)</span>
            </div>
        </>
    );
};

export default Kakaoadress;
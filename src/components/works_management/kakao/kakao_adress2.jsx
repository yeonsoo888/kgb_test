import React, { useState } from 'react';
import DaumPostcodeX from "react-daum-postcode";


const Kakao_adress2 = () => {
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
    const [visible, setVisible] = useState("none");
    

    return (
        <>
            <div>
                <span>도착지 주소</span>
                <button type="button"   >주소검색</button>
            </div>
            <DaumPostcodeX
                onComplete={handleComplete}
            />
        </>
    );
};

export default Kakao_adress2;
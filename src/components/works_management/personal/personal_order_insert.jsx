import React, { useState } from 'react';
import styles from './personal_order_insert.module.css';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './react-datepicker.css';
import ko from 'date-fns/locale/ko';
import Kakaoadress from '../kakao/kakao_adress';

registerLocale('ko', ko)

const Personal_order_insert = () => {
    
    const [startDate, setStartDate] = useState(null);
    const [startDate1, setStartDate1] = useState(null);
    
    const startDateSpl = String(startDate).split(" ");
    const startDateSpl1 = String(startDate1).split(" ");
    
    const elInputVal = startDateSpl[3] + " " + startDateSpl[1] + " " + startDateSpl[2] ;
    const elInputVal1 = startDateSpl1[3] + " " + startDateSpl1[1] + " " + startDateSpl1[2] ;
    
    const weekend = ["Sun" , "Sat" , "Fri"];
    const day = weekend.indexOf(startDateSpl[0]) !== -1 ? "주말" : "평일";
    const day1 = weekend.indexOf(startDateSpl1[0]) !== -1 ? "주말" : "평일";

    



    return (
        <div className={styles.inner}>
            <form>
                <div className={styles.subtitle}>
                    <p>개인오더 입력</p>
                </div>
                <strong>고객정보</strong>
                <section>
                    <div className={styles.contents_wrap}>
                        <ul>
                            <li>
                                <span>고객명</span>
                                <em>홍길동</em>
                            </li>
                            <li>
                                <span>대표전화 (SMS)</span>
                                <em>홍길동</em>
                            </li>
                            <li>
                                <span>전화번호</span>
                                <em>홍길동</em>
                            </li>
                            <li>
                                <span>이사형태</span>
                                <div>
                                    <select name="이사형태">
                                        <option>가정이사</option>
                                        <option>가정이사</option>
                                        <option>가정이사</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <strong>이사정보</strong>
                <section>
                    <div className={styles.contents_wrap}>
                        <ul>
                            <li>
                                <span>이사일</span>
                                <input type="text" className={styles.date_view} value={
                                    startDateSpl[1] == undefined  ? "날짜를 선택하세요"  : elInputVal 
                                } readOnly />
                                <span>{day}</span>
                                <DatePicker selected={startDate} onChange={date => setStartDate(date)} 
                                    locale="ko"
                                    className="date_pic"
                                    minDate={new Date()}
                                    showDisabledMonthNavigation
                                    withPortal
                                />
                                <div className={styles.date_pic}></div>
                            </li>
                            <li>
                                <span>포장일</span>
                                <input type="text" className={styles.date_view} value={
                                    startDateSpl1[1] == undefined  ? "날짜를 선택하세요"  : elInputVal1 
                                } readOnly />
                                <span>{day1}</span>
                                <DatePicker selected={startDate1} onChange={date => setStartDate1(date)} 
                                    locale="ko"
                                    className="date_pic"
                                    minDate={new Date()}
                                    showDisabledMonthNavigation
                                    withPortal
                                />
                                <div className={styles.date_pic}></div>
                            </li>
                            <li>
                                <Kakaoadress />
                            </li>
                        </ul>
                    </div>
                </section>
                <strong>작업정보</strong>
                <section>
                    <div className={styles.contents_wrap}>
                        <div>
                            <span>출발지</span>
                            <input type="text" name="층수" placeholder="층수" />
                            <input type="text" name="이송거리" placeholder="이송거리 (m)" />
                            <input type="text" name="계단" placeholder="계단 (층)" />
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <label>
                                        <input type="checkbox" name="출발지" value="사다리차_이용" hidden />
                                        <span></span>
                                        사다리차 이용
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" name="출발지" value="곤도라_사용" hidden />
                                        <span></span>
                                        곤도라 사용
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" name="출발지" value="엘리베이터" hidden />
                                        <span></span>
                                        엘리베이터
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" name="출발지" value="로프_사용" hidden />
                                        <span></span>
                                        로프 사용
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span>도착지</span>
                            <input type="text" name="층수" placeholder="층수" />
                            <input type="text" name="이송거리" placeholder="이송거리 (m)" />
                            <input type="text" name="계단" placeholder="계단 (층)" />
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <label>
                                        <input type="checkbox" name="도착지" value="사다리차_이용" hidden />
                                        <span></span>
                                        사다리차 이용
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" name="도착지" value="곤도라_사용" hidden />
                                        <span></span>
                                        곤도라 사용
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" name="도착지" value="엘리베이터" hidden />
                                        <span></span>
                                        엘리베이터
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" name="도착지" value="로프_사용" hidden />
                                        <span></span>
                                        로프 사용
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <strong>옵션비용</strong>
                <section>
                    <div className={styles.contents_wrap}>
                        <div>
                            <ul>
                                <li>
                                    <label>
                                        <input type="checkbox" name="옵션비용" value="에어컨_분리" hidden/>
                                        <span></span>
                                        에어컨 분리
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" name="옵션비용" value="" hidden/>
                                        <span></span>
                                        에어컨 설치
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" name="옵션비용" value="" hidden/>
                                        <span></span>
                                        청소팀 배정
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" name="옵션비용" value="" hidden/>
                                        <span></span>
                                        에어컨 분리
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" name="옵션비용" hidden/>
                                        <span></span>
                                        에어컨 분리
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" name="옵션비용" hidden/>
                                        <span></span>
                                        에어컨 분리
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <strong>계약정보</strong>
                <section>
                    <div className={styles.contents_wrap}>
                        <em>계약여부</em>
                        <div>
                            <ul>
                                <li>
                                    <label>
                                        <input type="radio" name="계약여부" value="지명_견적_중" hidden />
                                        <span></span>
                                        지명 견적 중
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio" name="계약여부" value="지명_미_계약" hidden />
                                        <span></span>
                                        지명 미 계약
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio" name="계약여부" value="지명_계약_중" hidden />
                                        <span></span>
                                        지명 계약 중
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio" name="계약여부" value="오더_토스" hidden />
                                        <span></span>
                                        오더 토스
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <strong>차량정보</strong>
                <section>
                    <div className={styles.contents_wrap}>
                        <ul>
                            <li>
                                <span>1톤 (대)</span>
                                <em>0</em>
                            </li>
                            <li>
                                <span>2.5톤 (대)</span>
                                <em>0</em>
                            </li>
                            <li>
                                <span>5톤 (대)</span>
                                <em>0</em>
                            </li>
                            <li>
                                <span>이사물량 (CBM)</span>
                                <em>0</em>
                            </li>
                        </ul>
                    </div>
                </section>
                <strong>금액정보</strong>
                <section>
                    <div className={styles.contents_wrap}>
                        <ul>
                            <li>
                                <span>이사요금</span>
                                <em>840,000원</em>
                            </li>
                            <li>
                                <span>옵션요금</span>
                                <em>840,000원</em>
                            </li>
                            <li>
                                <span>추가할인</span>
                                <em>0원</em>
                            </li>
                            <li>
                                <span>합계</span>
                                <em>840,000원</em>
                            </li>
                            <li>
                                <span>계약금</span>
                                <em>0원</em>
                            </li>
                            <li>
                                <span>잔금</span>
                                <em>840,000원</em>
                            </li>
                            <li>
                                <span>특기사항</span>
                                <em></em>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <button type="button">저장</button>
                </section>
            </form>
        </div>
    );
};

export default Personal_order_insert;
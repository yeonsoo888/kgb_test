import React from 'react';
import styles from './estimate_insert.module.css';

const Estimate_insert = () => {
    return (
        <div className={styles.inner}>
            <form>

                <div className={styles.subtitle}>
                    <p>방문견적 입력</p>
                </div>
                <section>
                    <strong>작업정보</strong>
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
                                        <input type="checkbox" name="출발지" hidden />
                                        <span></span>
                                        사다리차 이용
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" name="출발지" hidden />
                                        <span></span>
                                        곤도라 사용
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" name="출발지" hidden />
                                        <span></span>
                                        엘리베이터
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" name="출발지" hidden />
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
                        <ul>
                            <li>
                                <label>
                                    <input type="radio" name="계약정보" value="계약여부" hidden/>
                                    <span></span>
                                    계약여부
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="radio" name="계약정보" value="견적계약" hidden/>
                                    <span></span>
                                    견적계약
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="radio" name="계약정보" value="견적미계약" hidden/>
                                    <span></span>
                                    견적미계약
                                </label>
                            </li>
                        </ul>
                    </div>
                </section>
                <strong>차량정보</strong>
                <section>
                    <div className={styles.contents_wrap}>
                        <ul>
                            <li>
                                <span>1톤 (대)</span>
                                <input type="text" value="0" readOnly/>
                            </li>
                            <li>
                                <span>2.5톤 (대)</span>
                                <input type="text" value="0" readOnly/>
                            </li>
                            <li>
                                <span>5톤 (대)</span>
                                <input type="text" value="0" readOnly/>
                            </li>
                            <li>
                                <span>이사물량 (CBM)</span>
                                <input type="text" value="0" readOnly/>
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
                                <input type="text" value="1,040,000원" readOnly/>
                            </li>
                            <li>
                                <span>옵션요금</span>
                                <input type="text" value="0" readOnly/>
                            </li>
                            <li>
                                <span>추가할인</span>
                                <input type="text" value="0" readOnly/>
                            </li>
                            <li>
                                <span>합계</span>
                                <input type="text" value="0" readOnly/>
                            </li>
                            <li>
                                <span>계약금</span>
                                <input type="text" value="0" readOnly/>
                            </li>
                            <li>
                                <span>잔금</span>
                                <input type="text" value="0" readOnly/>
                            </li>
                            <li>
                                <span>특기사항</span>
                                <input type="text" value="0" readOnly/>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <button type="submit">저장</button>
                </section>
            </form>
        </div>
    );
};

export default Estimate_insert;
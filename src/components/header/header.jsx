import React , {useState} from 'react';
import styles from './header.module.css';
import closeBtn from './images/btn_close.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const Header = () => {

    const [toggle,setToggle] = useState(true);
    const [subMenu,setSubmenu] = useState({
        sub1 : false,
        sub2 : false,
        sub3 : false,
        sub4 : false,
        sub5 : false,
    })

    const handleHeaderClick = () => {
        setToggle(!toggle);
    }
    const handleNavClose = () => {
        setToggle(!toggle);
    }
    
    const handleSubmenu = (e) => {
        const newSubMenu = {...subMenu};
        const activeMenu = e.currentTarget.id;
        for (let key in newSubMenu) {
            key === activeMenu
            ? (newSubMenu[key] = true)
            : (newSubMenu[key] = false);
        }
        setSubmenu(newSubMenu);
    }


    return (
        <header>
            <div 
                onClick={handleHeaderClick}
                className={
                    toggle ? [styles.hamburger] : [styles.activeHamburger]
                } 
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h2>
                <Link to="/home" className={styles.logo}>
                    KGB
                </Link>
            </h2>
            <div className={
                toggle ?  [styles.bgBlackOff] : [styles.bgBlack]
                }
            >
                <nav className={
                    toggle ? [styles.nav] : [styles.on_nav]
                    }
                >
                    <div>
                        <h2 className={styles.menu_logo}>
                            <Link to='/home'>
                                KGB
                            </Link>
                        </h2>
                        <div className={styles.btn_close} onClick={handleNavClose}>
                            <img src={closeBtn} />
                        </div>
                    </div>
                    <ul className={styles.ul}>
                        <li onClick={handleSubmenu} id="sub1">
                            <p className={subMenu.sub1 ? [styles.active_p] : []}>작업/대리점관리</p>
                            <ul className={subMenu.sub1 ? [styles.onSubmenu] : []}>
                                <li><Link to='/month_schedule' onClick={handleNavClose}>관리작업일정(월별)</Link></li>
                                <li><Link to='/estimate' onClick={handleNavClose}>방문 견적 입력</Link></li>
                                <li><Link to='/personal_order_insert' onClick={handleNavClose}>개인오더 입력</Link></li>
                                <li><Link to="/our_team_talktalk" onClick={handleNavClose}>우리팀 톡톡</Link></li>
                                <li><Link to="/team_photo" onClick={handleNavClose}>팀 단체사진 등록</Link></li>
                                <li><Link to="/support" onClick={handleNavClose}>지원요청 / 대기</Link></li>
                                <li><Link to="/emergency_contact" onClick={handleNavClose}>긴급연락망</Link></li>
                                <li><Link to="/club" onClick={handleNavClose}>상조회</Link></li>
                                <li><Link to="/representative" onClick={handleNavClose}>권역 및 대표</Link></li>
                                <li><a>담당 외주업체</a></li>
                            </ul>
                        </li>
                        <li onClick={handleSubmenu} id="sub2">
                            <p className={subMenu.sub2 ? [styles.active_p] : []}>품질 관리</p>
                            <ul className={subMenu.sub2 ? [styles.onSubmenu] : []}>
                                <li><Link to="/management_quailty/compliment" onClick={handleNavClose}>칭찬글</Link></li>
                                <li><Link to="/management_quailty/scolding" onClick={handleNavClose}>꾸중글</Link></li>
                                <li><Link>미계약 해피콜</Link></li>
                                <li><Link>계약 해피콜</Link></li>
                                <li><Link>A/S현황</Link></li>
                                <li><Link>A/S처리노하우</Link></li>
                                <li><Link>현장실사체크리스트</Link></li>
                                <li><Link>대리점실사체크리스트</Link></li>
                                <li><Link>자가평가</Link></li>
                                <li><Link>월평가(경고현황)</Link></li>
                                <li><Link>브랜드평가 사진제출</Link></li>
                            </ul>
                        </li>
                        <li onClick={handleSubmenu} id="sub3">
                            <p className={subMenu.sub3 ? [styles.active_p] : []}>커뮤니티</p>
                            <ul className={subMenu.sub3 ? [styles.onSubmenu] : []}>
                                <li><Link>공지사항</Link></li>
                                <li><Link>자유게시판</Link></li>
                                <li><Link>작업일정변경요청</Link></li>
                                <li><Link>건의함</Link></li>
                                <li><Link>비리제보</Link></li>
                                <li><Link>쪽지</Link></li>
                            </ul>
                        </li>
                        <li onClick={handleSubmenu} id="sub4">
                            <p className={subMenu.sub4 ? [styles.active_p] : []}>교육</p>
                            <ul className={subMenu.sub4 ? [styles.onSubmenu] : []}>
                                <li><Link>교육공지 / 이용안내</Link></li>
                                <li><Link>교육일정 / 신청</Link></li>
                                <li><Link>교육참석내역</Link></li>
                                <li><Link>교육자료실(일반 / 영상)</Link></li>
                                <li><Link>이수대상 교육</Link></li>
                                <li><Link>교육평가</Link></li>
                                <li><Link>실시간 화상교육</Link></li>
                                <li><Link>교육출결체크</Link></li>
                                <li><Link>교육설문</Link></li>
                                <li><Link>매뉴얼 학습</Link></li>
                            </ul>
                        </li>
                        <li onClick={handleSubmenu} id="sub5">
                            <p className={subMenu.sub5 ? [styles.active_p] : []}>본사업무</p>
                            <ul className={subMenu.sub5 ? [styles.onSubmenu] : []}>
                                <li><Link>청구서관리</Link></li>
                                <li><Link>일반자료실</Link></li>
                                <li><Link>자체주문</Link></li>
                                <li><Link>자체주문내역</Link></li>
                                <li><Link>홈페이지연결</Link></li>
                                <li><Link>담당자연결</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className={styles.snsWrap}>
                        <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <a href="#"></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
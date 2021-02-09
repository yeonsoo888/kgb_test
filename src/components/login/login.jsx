import React from 'react';
import styles from './login.module.css';
import callIcon from './call.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Login = () => {
    return (
        <div className={styles.login_wrap}>
            <p>MEMBER LOGIN</p>
            <div>
                <input placeholder="아이디" />
                <input placeholder="비밀번호" />
            </div>
            <Link to="/month_schedule" className={styles.button}>
                LOGIN
            </Link>
            <div className={styles.link}>
                <p>본사 담당자 연결</p>
                <ul className="clear">
                    <li>
                        <a  href="#">
                            <img src={callIcon} />
                            <span>KGB 이사 홍길동</span>
                        </a>
                    </li>
                    <li>
                        <a  href="#">
                            <img src={callIcon} />
                            <span>KGB 이사 홍길동</span>
                        </a>
                    </li>
                    <li>
                        <a  href="#">
                            <img src={callIcon} />
                            <span>KGB 이사 홍길동</span>
                        </a>
                    </li>
                    <li>
                        <a  href="#">
                            <img src={callIcon} />
                            <span>KGB 이사 홍길동</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Login;
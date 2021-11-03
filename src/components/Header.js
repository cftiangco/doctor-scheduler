import React from 'react';
import styles from './Header.module.css'
import { FaTh } from "react-icons/fa";
import logo from '../images/scheduler.png';

function Header(props) {
    return (
        <div className={`border-bottom ${styles.clinicNav} shadow-sm`}>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img src={logo} width="50" alt="Main Logo" className="me-2 d-block d-lg-none"/>
                    <h5 className="p-0 m-0">MYHC SMNE</h5>
                </div>
                <div className="d-flex">
                    <p className="m-0 p-0 me-3">Hi Crimson</p>
                    <p className="m-0 p-0 d-block d-lg-none"><FaTh /></p>
                </div>
            </div>
        </div>
    );
}

export default Header;
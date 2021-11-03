import React from 'react';
import styles from './Header.module.css'
import { FaTh } from "react-icons/fa";

function Header(props) {
    return (
        <div className={`border-bottom ${styles.clinicNav} shadow-sm`}>
            <div className="d-flex justify-content-between align-items-center">
                <h5>MYHC SMNE</h5>
                <div className="d-flex">
                    <p className="m-0 p-0 me-3">Hi Crimson</p>
                    <p className="m-0 p-0 d-block d-lg-none"><FaTh /></p>
                </div>
            </div>
        </div>
    );
}

export default Header;
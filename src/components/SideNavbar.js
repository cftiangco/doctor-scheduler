import React from 'react';
import styles from './SideNavbar.module.css'
import { FaHome } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

function SideNavbar(props) {
    return (
        <div className={`${styles.sidebar} d-none d-lg-flex flex-column justify-content-between align-items-center`}>
            <ul>
                <li><a href="#"><FaHome/> Home</a></li>
                <li><a href="#"><FaCog/> Option</a></li>
            </ul>

            <ul>
                <li><a href=""><FaSignOutAlt/> Logout</a></li>
            </ul>
        </div>
    );
}

export default SideNavbar;
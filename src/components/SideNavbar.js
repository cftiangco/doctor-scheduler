import React from 'react';
import styles from './SideNavbar.module.css'
import { FaHome } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import logo from '../images/scheduler.png';

function SideNavbar(props) {
    return (
        <div className={`${styles.sidebar} d-none d-lg-flex flex-column justify-content-between align-items-center`}>

            <ul className="d-flex flex-column">
                <li className="align-self-center">
                    <img src={logo} width="50" alt="Main Logo" />
                </li>
                <li><a href="/"><FaHome /> Home</a></li>
                <li><a href="/"><FaCog /> Option</a></li>
            </ul>

            <ul>
                <li><a href="/"><FaSignOutAlt /> Logout</a></li>
            </ul>
        </div>
    );
}

export default SideNavbar;
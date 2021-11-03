import React from 'react';
import styles from './Nav.module.css'

function Nav(props) {
    return (
        <div className={`border-bottom ${styles.clinicNav}`}>
            <h1>MYHC SMNE</h1>
        </div>
    );
}

export default Nav;
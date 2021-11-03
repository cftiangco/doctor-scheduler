import React from 'react';
import Card from './Card'
import styles from './Specialty.module.css'

function Specialty(props) {
    return (
        <div className={`container mt-3 ${styles.specialty}` }>
            <div className={`row m-auto mt-5`}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
}

export default Specialty;
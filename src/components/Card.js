import React from 'react';
import styles from './Card.module.css'
import CardItem from './CardItem'
import { FaStethoscope } from "react-icons/fa";


function Card({ specialty, description, doctors }) {
    return (
        <div className={`col-12 col-lg-6 mb-3 ${styles.clinicCard}`}>
            <div className="mx-3 shadow rounded">
                <h5 className="border-bottom p-2 m-0 fw-bold"
                    style={{ backgroundColor: '#72bcd4', color: '#f4f4f4' }}><FaStethoscope /> {specialty.description}</h5>
                {specialty.doctors.map((doctor, key) => (
                    <CardItem key={doctor.id} doctor={doctor} />
                ))}
            </div>
        </div>
    );
}

export default Card;
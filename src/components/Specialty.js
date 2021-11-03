import React from 'react';
import Card from './Card'
import styles from './Specialty.module.css'

function Specialty({ specialties }) {
    return (
        <div className={`container mt-3 ${styles.specialty}`}>
            <div className={`row m-auto mt-4`}>
                {specialties.map((specialty, key) => (
                    <Card key={specialty.id} specialty={specialty} />
                ))}

            </div>
        </div>
    );
}

export default Specialty;
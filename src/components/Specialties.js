import React from 'react';
import styles from './Specialties.module.css'

function Specialties({specialties}) {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col text-center text-lg-start mx-0 mx-lg-4">
                    <div>
                    {specialties.map((specialty,key) => (
                        <h6 className={`d-inline shadow p-1 rounded me-2 ${styles.specialties   }`} key={specialty.id}>{specialty.description}</h6>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Specialties;
import React from 'react';
import { FaEdit } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import styles from "./CardItem.module.css"

function CardItem({ doctor }) {
    return (
        <>
            <div className={`d-block d-lg-flex justify-content-between border-bottom pb-2  ${styles.cardItem}`}>
                <div className="container p-1 m-0 px-lg-2">
                    <div className="row">
                        <div className="col">
                            <div>
                                <p className={`m-0 p-0 fw-bold ${styles.doctorName}`}><FaUserMd /> {doctor.name}</p>
                                <small className={`m-0 p-0 text-muted d-block ${styles.doctorTime}`}><FaClock /> {doctor.time}</small>
                                <small className="m-0 p-0 text-muted d-block"><FaRegUser /> Patients: 6/10</small>
                            </div>
                        </div>
                        <div className="col">
                            <div className="text-start">
                                <p className={`m-0 p-0 ${styles.doctorStatus}`}>Status: <span className={styles.status}>{doctor.status}</span></p>
                                <small className={`m-0 p-0 text-muted d-block ${styles.doctorNotes}`}>Notes: {doctor.notes}</small>
                                {doctor.reliever ?
                                    <small className={`m-0 p-0 text-muted d-block ${styles.doctorReliever}`}>Reliever: Dr. {doctor.reliever}</small> :
                                    ''}

                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end m-0 p-0">
                        <small className="m-0 p-0 me-3" style={{ cursor: 'pointer' }}>Modify <FaEdit /></small>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardItem;
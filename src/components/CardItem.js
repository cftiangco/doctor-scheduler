import React from 'react';
import { FaEdit } from "react-icons/fa";

function CardItem(props) {
    return (
        <>
            <div className="d-block d-lg-flex justify-content-between border-bottom pb-2 p-3">
                    <div>
                        <p className="m-0 p-0">Dr. Steven N. Pua</p>
                        <small className="m-0 p-0 text-muted d-block">Time: 12:00PM - 5:30PM</small>
                        <small className="m-0 p-0 text-muted d-block">Patients: 6/10</small>
                    </div>
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="m-0 p-0">Status: Coming</p>
                            <small className="m-0 p-0 me-3"><FaEdit/></small>
                        </div>
                        <small className="m-0 p-0 text-muted d-block">Notes: late will arrive at 1:30pm</small>
                        <small className="m-0 p-0 text-muted d-block">Reliever: Dr. Karla A. Antonio</small>
                    </div>
            </div>
        </>
    );
}

export default CardItem;
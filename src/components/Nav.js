import React from 'react'

export default function Nav() {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <div className="mx-4">
                        <input type="text"
                            className="form-control"
                            id="search" placeholder="Search for doctor, specialty" />
                    </div>
                </div>
            </div>
        </div>
    )
}

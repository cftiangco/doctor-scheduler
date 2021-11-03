import React from 'react';
import styles from './Card.module.css'
import CardItem from './CardItem'


function Card(props) {
    return (
        <div className={`col-12 col-lg-6 mb-3 ${styles.clinicCard}`}>
            <div className="mx-3 shadow rounded">
                <h5 className="border-bottom p-2 m-0" style={{backgroundColor:'#72bcd4',color:'#f4f4f4'}}>Cardiologies</h5>
                <CardItem/>
                <CardItem/>
                <CardItem/>
            </div>
        </div>
    );
}

export default Card;
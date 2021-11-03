import React from 'react'
import styles from './Modal.module.css'

function Modal({ isOpen, children }) {
    return isOpen ? (
        <>
            <div className={styles.overlay} />
            <div className={styles.modal}>

                {children}

                <button type="button">Close</button>
            </div>
        </>
    ) : null
}

export default Modal

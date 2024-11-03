// components/Modal.js
import React, { useEffect, useState } from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children, selectedProjectId }) => {
    const [showModalContent, setShowModalContent] = useState(false);
    const [makeClickable, setMakeClickable] = useState(false);

    const logoDiv = document.getElementById('logo');


    useEffect(() => {
        let timer;
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            
            setShowModalContent(false); // Ensure content is hidden initially
            //setMakeClickable(false);
            logoDiv.style.opacity = '0';
            logoDiv.style.pointerEvents = 'none';
            logoDiv.style.transition = '250ms';

            timer = setTimeout(() => {
                setShowModalContent(true);
                //setMakeClickable(true);
                

            }, 500);// 0.5-second delay for modal content


        } else {
            
            if (logoDiv){
            logoDiv.style.opacity = '';
            logoDiv.style.pointerEvents = '';
            logoDiv.style.transition = '';
            }
            setShowModalContent(false);
            //setMakeClickable(false);
            
            document.body.style.overflow = '';
         
            

        }

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = ''; // Ensure scrolling is enabled again on unmount
            if (logoDiv){
                logoDiv.style.opacity = '';
                logoDiv.style.pointerEvents = '';
                logoDiv.style.transition = '';
                }

        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={`${styles.modalOverlay} layerShadowDarkk `} onClick={onClose}>
            {showModalContent && (
                <div className={`${styles.modalContent} mx-3 sm:mx-7 `} onClick={(e) => e.stopPropagation()}>
                    <button className={styles.closeButton} onClick={onClose}>
                        &times;
                    </button>
                    <div className={styles.modalBody}>{children}</div>
                </div>
            )}
        </div>
    );
};

export default Modal;

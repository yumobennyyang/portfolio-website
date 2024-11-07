// components/Modal.js
import React, { useEffect, useState } from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children, selectedProjectId }) => {
    const [showModalContent, setShowModalContent] = useState(false);
    const [makeClickable, setMakeClickable] = useState(false);

    const logoDiv = typeof window !== "undefined" ? document.getElementById('logo') : null;



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
        <div className={`${styles.modalOverlay} layerShadowDark fixed inset-0 w-screen h-screen flex items-end justify-center z-[10000] transition-all duration-300 ease-in-out`} onClick={onClose}>
            {showModalContent && (
                <div className={`max-h-[calc(100vh-20px)] top-5 bg-white rounded-t-2xl max-w-[960px] overflow-y-auto absolute z-[10002] scrollbar-hide mx-3 sm:mx-7 `} onClick={(e) => e.stopPropagation()}>
                    <button className="fixed h-0 top-3 left-4 bg-transparent border-none cursor-pointer text-2xl" onClick={onClose}>
                        &times;
                    </button>
                    <div className="z-[999999999999] overflow-y-auto mb-16">{children}</div>
                </div>
            )}
        </div>
    );
};

export default Modal;

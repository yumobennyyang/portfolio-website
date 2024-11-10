// components/Modal.js
import React, { useEffect, useState } from 'react';
import localFont from 'next/font/local';
import styles from './Modal.module.css';

const benny = localFont({ src: '../fonts/PPNeueMontrealMono-Thin.otf' })


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

            if (logoDiv) {
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
            if (logoDiv) {
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
                <div className={`${styles.modalContent} max-h-[calc(100vh-20px)] top-5 bg-white rounded-t-2xl max-w-[960px] overflow-y-auto absolute z-[10002]  mx-3 sm:mx-7 `} onClick={(e) => e.stopPropagation()}>
                    <button className={` fixed h-0 top-4 left-4 bg-transparent border-none cursor-pointer text-neutral-950 ${benny.className}`} onClick={onClose}>
                        <div className={`flex mix-blend-difference sm:mx-4  my-2 z-50 left-0 top-0 fixed w-auto leading-6  text-sm `}>


                            <p className=" justify-center pl-4 pr-1 py-2  w-auto">

                                <span>close</span>
                                {/* <span>↗</span>*/}
                            </p>



                        </div>
                        <div className={`flex mix-blend-difference sm:mx-4  my-2 z-50 left-0 top-0 fixed w-auto leading-6  text-sm `}>


                            <p className=" justify-center pl-4 pr-1 py-2  w-auto underline underline-offset-4 decoration-[0.2px] hover:no-underline group">

                                <span>close</span>
                                {/* <span>↗</span>*/}
                            </p>



                        </div>
                    </button>



                    <div className="z-[999999999999] overflow-y-auto mb-16 ">{children}</div>
                </div>
            )}
        </div>
    );
};

export default Modal;

// components/Modal.js
import React, { useEffect, useState } from 'react';
import localFont from 'next/font/local';
import styles from './Modal.module.css';

const benny = localFont({ src: '../fonts/TT_Commons_Pro_Mono_VF_Trial.ttf' })


const Modal = ({ isOpen, onClose, children, selectedProjectId }) => {
    const [showModalContent, setShowModalContent] = useState(false);
    const [makeClickable, setMakeClickable] = useState(false);

    const logoDiv = typeof window !== "undefined" ? document.getElementById('logo') : null;
    const topLinks = typeof window !== "undefined" ? document.getElementById('top-links') : null;



    useEffect(() => {
        let timer;
        if (isOpen) {
            document.body.style.overflow = 'hidden';

            setShowModalContent(false); // Ensure content is hidden initially
            //setMakeClickable(false);
            logoDiv.style.opacity = '0';
            topLinks.style.opacity = '0';
            logoDiv.style.pointerEvents = 'none';
            topLinks.style.pointerEvents = 'none';
            logoDiv.style.transition = '250ms';
            topLinks.style.transition = '250ms';

            timer = setTimeout(() => {
                setShowModalContent(true);
                setMakeClickable(true);


            }, 250);// 0.3-second delay for modal content


        } else {

            if (logoDiv) {
                logoDiv.style.opacity = '';
                logoDiv.style.pointerEvents = '';
                logoDiv.style.transition = '';
            }

            if (topLinks) {
                topLinks.style.opacity = '';
                topLinks.style.pointerEvents = '';
                topLinks.style.transition = '';
            }

            setShowModalContent(false);
            setMakeClickable(false);

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
            if (topLinks) {
                topLinks.style.opacity = '';
                topLinks.style.pointerEvents = '';
                topLinks.style.transition = '';
            }

        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={`bg-[${showModalContent ? '' : ''}] ${styles.overlayBackCursor} flex layerShadowDark fixed inset-0 w-screen h-screen  items-end justify-center z-[10000] transition-all duration-300 ease-in-out  `} /* onClick={onClose} */ >



            <div className={`${styles.modalContent} ${styles.modalFadeIn} ${showModalContent ? styles.modalVisible : ''} bg-[#f1f1f1] px-3 aboslute overflow-x-hidden md:mmax-h-[calc(100vh-20px)] mmax-h-[calc(100vh-48px)] max-h-[100vh] ttop-12 md:ttop-5 rrounded-t-2xl mmax-w-[1200px] w-[100vw] overflow-y-auto z-[10002] sm:mmx-7 ${makeClickable ? '' : 'pointer-events-none'}`} onClick={(e) => e.stopPropagation()}>


                <div className="hidden mx-auto gradient h-full gradient-background z-20 mt-5  w-full mmax-w-[960px] max-w-[100vw] pointer-events-none rrounded-t-2xl fixed clipped" />
                <div className="hidden mx-auto gradient h-full  gradient-blur z-20 mt-5  w-full  mmax-w-[960px] max-w-[100vw] pointer-events-none rrounded-t-2xl fixed clipped">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <button className={`z-[9999999999999] text-sm fixed h-0 sm:top-6 top-6 sm:left-7 left-3 bg-transparent border-none cursor-pointer text-black ${benny.className}`} onClick={onClose}>


                    <p className=" justify-center bg-[#dddddd] py-[2.5px] px-2 mx-[0px] pr-[11px] rounded-full text-black  w-auto group font-[300] ">
                        <span className="translate-x-[3px] group-hover:translate-x-[1px] group-hover:translate-y-[2px] inline-block transition-transform ease duration-100">↙</span>
                        <span>&nbsp;close</span>
                    </p>
                </button>



                <div className="z-[999999999999]  overflow-y-auto ">


                    {children}
                </div>
            </div>

        </div>
    );
};

export default Modal;

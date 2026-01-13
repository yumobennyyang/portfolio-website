// components/Modal.js
import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import localFont from 'next/font/local';
import styles from './Modal.module.css';

const button = localFont({ src: '../fonts/TT_Commons_Pro_VF_Trial.ttf' });


const Modal = ({ isOpen, onClose, children, selectedProjectId, onContentVisible }) => {
    const [showModalContent, setShowModalContent] = useState(false);
    const [makeClickable, setMakeClickable] = useState(false);
    const scrollRef = React.useRef(null);

    const topLinks = typeof window !== "undefined" ? document.getElementById('top-links') : null;



    useEffect(() => {
        let timer;
        if (isOpen) {
            document.body.style.overflow = 'hidden';

            setShowModalContent(false); // Ensure content is hidden initially
            //setMakeClickable(false);
            if (topLinks) {
                topLinks.style.opacity = '0';
                topLinks.style.pointerEvents = 'none';
                topLinks.style.transition = '250ms';
            }

            timer = setTimeout(() => {
                setShowModalContent(true);
                setMakeClickable(true);
                if (onContentVisible) onContentVisible(true);

            }, 250);// 0.3-second delay for modal content


        } else {

            if (topLinks) {
                topLinks.style.opacity = '';
                topLinks.style.pointerEvents = '';
                topLinks.style.transition = '';
            }

            setShowModalContent(false);
            setMakeClickable(false);
            if (onContentVisible) onContentVisible(false);

            document.body.style.overflow = '';



        }

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = ''; // Ensure scrolling is enabled again on unmount
            if (topLinks) {
                topLinks.style.opacity = '';
                topLinks.style.pointerEvents = '';
                topLinks.style.transition = '';
            }

        };
    }, [isOpen]);

    // Initialize Lenis for the modal content
    useEffect(() => {
        if (!showModalContent || !scrollRef.current) return;

        const lenis = new Lenis({
            wrapper: scrollRef.current, // The element that has overflow: auto
            content: scrollRef.current.firstElementChild, // The scrolling content
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, [showModalContent]);

    if (!isOpen) return null;

    return (
        <div className={`${styles.modalOverlay} ${styles.overlayBackCursor} font-[400] tracking-wide text-[#ff0000] flex fixed inset-0 w-screen h-screen items-end justify-center z-[10002]`}>

            {/* Clipping container for safe area */}
            <div className="fixed overflow-hidden z-[10003] pointer-events-auto top-[60px] bottom-[98px] left-[12px] right-[12px] sm:left-[42px] sm:right-[42px]">

                <div 
                    ref={scrollRef}
                    className={`${styles.modalContent} ${styles.modalFadeIn} ${showModalContent ? styles.modalVisible : ''} h-full w-full overflow-y-auto ${makeClickable ? '' : 'pointer-events-none'}`} 
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="z-[999999999999] ">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

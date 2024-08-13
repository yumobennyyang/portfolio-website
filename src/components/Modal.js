// components/Modal.js
import React, { useEffect, useState } from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  const [showModalContent, setShowModalContent] = useState(false);

  useEffect(() => {
    let timer;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setShowModalContent(false); // Ensure content is hidden initially

      timer = setTimeout(() => {
        setShowModalContent(true);
      }, 500); // 0.5-second delay for modal content
    } else {
      setShowModalContent(false);
      document.body.style.overflow = '';
    }

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = ''; // Ensure scrolling is enabled again on unmount
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      {showModalContent && (
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
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

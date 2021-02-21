import React, { useEffect } from 'react';
import styles from '../styles/KanbanBoard.module.scss';
import { FaList, FaThLarge } from 'react-icons/fa';
const KanbanBoard = () => {
  useEffect(() => {

  });
  return (
    <>
      <div className={styles.header}>
        <div className={styles.selectViewTypeButtonContainer}>
          <FaList color={'#326295'} className={styles.selectViewTypeButton} style={{ marginRight: 20 }} />
          <FaThLarge color={'#326295'} className={styles.selectViewTypeButton} />
        </div>
        <div className={styles.headerButton}>
          Open
        </div>
        <div className={styles.headerButton}>
          Closed
        </div>
        <div className={styles.headerButton}>
          New Issue
        </div>
        <div className={styles.headerButton}>
          New Column
        </div>
        <div className={styles.headerButton}>
          Make Label
        </div>
        <div>
          <div>
            셀렉트 버튼
        </div>
          <div>
            검색바
        </div>
        </div>
      </div>
    </>
  );
}

export default KanbanBoard;
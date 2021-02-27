import React, { useEffect } from 'react';
import styles from '../styles/KanbanBoard.module.scss';
import { FaList, FaThLarge } from 'react-icons/fa';
const KanbanBoard = () => {
  useEffect(() => {

  });
  return (
    <div style={{ overflowY: 'hidden' }}>
      <div className={styles.header}>
        <div className={styles.selectViewTypeButtonContainer}>
          <div className={styles.selectViewTypeButtonWrapper} style={{ marginRight: 20 }} >
            <FaList color={'#326295'} className={styles.selectViewTypeButton} />
          </div>
          <div className={styles.selectViewTypeButtonWrapper}>
            <FaThLarge color={'#326295'} className={styles.selectViewTypeButton} />
          </div>
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
      <div style={{ backgroundColor: 'gold', display: 'flex', flexDirection: 'column', width: '100%', height: '82vh', overflow: 'scroll' }}>
        <div style={{ backgroundColor: 'gainsboro', display: 'flex', width: '100%' }}>
          <div style={{ backgroundColor: 'honeydew', height: 50, minWidth: 260 }}>
            OOOO 몇개 Issue
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ minWidth: 260, backgroundColor: 'gainsboro' }}>
            <div style={{ backgroundColor: 'gray', height: 120, }}>
              1-1번 이슈
          </div>
            <div style={{ backgroundColor: 'gray', height: 120, }}>
              1-2번 이슈
          </div>
            <div style={{ backgroundColor: 'gray', height: 120, }}>
              1-1번 이슈
          </div>
            <div style={{ backgroundColor: 'gray', height: 120, }}>
              1-2번 이슈
          </div>
            <div style={{ backgroundColor: 'gray', height: 120, }}>
              1-1번 이슈
          </div>
            <div style={{ backgroundColor: 'gray', height: 120, }}>
              1-2번 이슈
          </div>
            <div style={{ backgroundColor: 'gray', height: 120, }}>
              1-1번 이슈
          </div>
            <div style={{ backgroundColor: 'gray', height: 120, }}>
              1-2번 이슈
          </div>
            <div style={{ backgroundColor: 'gray', height: 120, }}>
              1-1번 이슈
          </div>
            <div style={{ backgroundColor: 'gray', height: 120, }}>
              1-2번 이슈
          </div>
            <div style={{ backgroundColor: 'gray', height: 120, }}>
              1-1번 이슈
          </div>
            <div style={{ backgroundColor: 'gray', height: 120, }}>
              1-2번 이슈
          </div>
            <div style={{ backgroundColor: 'gray', height: 120, }}>
              1-1번 이슈
          </div>
            <div style={{ backgroundColor: 'gray', height: 120, }}>
              1-2번 이슈
          </div>
            <div style={{ backgroundColor: 'gray', height: 120, }}>
              1-1번 이슈
          </div>
            <div style={{ backgroundColor: 'gray', height: 120, }}>
              1-2번 이슈
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KanbanBoard;
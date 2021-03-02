import React, { useEffect } from 'react';
import styles from '../styles/KanbanBoard.module.scss';
import { FaList, FaThLarge } from 'react-icons/fa';
import { KanbanBoardDummyData } from '../DummyData';
const KanbanBoard = () => {
  useEffect(() => {

  });

  const renderColumn = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', position: 'absolute' }}>
          {
            KanbanBoardDummyData.map(title => {
              return (
                <div style={{
                  display: 'flex',
                  minWidth: 240,
                  maxWidth: 240,
                  height: 40,
                  padding: 5,
                  margin: 5,
                  backgroundColor: 'rgb(244, 245, 247)',
                  alignItems: 'center',
                }}>
                  {title[0].belongTo} {title.length} Issues
                </div >
              )
            })
          }
        </div>
        <div style={{ display: 'flex' }}>
          {
            KanbanBoardDummyData.map(column => {
              return (
                <div style={{
                  display: 'flex',
                  minWidth: 240,
                  maxWidth: 240,
                  padding: 5,
                  margin: 5,
                  backgroundColor: 'rgb(244, 245, 247)',
                }}>
                  <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    {column.map(item => {
                      return (
                        <div style={{ backgroundColor: '#ffffff', marginBottom: '5%', flexDirection: 'column', justifyContent: 'space-between', display: 'flex', padding: 10 }}>
                          <div style={{ minHeight: 75 }}>
                            {item.content}
                          </div>
                          <div style={{ minHeight: 15, marginTop: 10 }}>
                            {item.id}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div >
              )
            })
          }
        </div>
      </div>
    )
  }
  return (
    <>
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
      <div style={{ backgroundColor: 'gold', width: '100%', height: '78vh', overflowY: 'scroll' }}>
        {renderColumn()}
      </div>
    </>
  );
}

export default KanbanBoard;
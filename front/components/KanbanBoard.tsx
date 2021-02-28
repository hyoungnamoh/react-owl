import React, { useEffect } from 'react';
import styles from '../styles/KanbanBoard.module.scss';
import { FaList, FaThLarge } from 'react-icons/fa';
import { KanbanBoardDummyData } from '../DummyData';
const KanbanBoard = () => {
  useEffect(() => {

  });

  const renderColumn = () => {
    return KanbanBoardDummyData.map(column => {
      return (
        <div style={{
          display: 'flex',
          minWidth: 260,
          flexDirection: 'column',
          padding: 5,
          margin: 5,
          backgroundColor: 'rgb(244, 245, 247)',
        }}>
          <div style={{ minHeight: 50, maxHeight: 50 }}>
            {column[0].belongTo} {column.length} Issues
          </div>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {column.map(item => {
              return (
                <div style={{ minHeight: 120, backgroundColor: '#ffffff', display: 'flex', marginBottom: '5%' }}>
                  {item.content}
                </div>
              )
            })}
          </div>
        </div >
      )
    });

    return (
      <>
        <div style={{ backgroundColor: 'gainsboro', display: 'flex', minWidth: 260, flexDirection: 'column' }}>
          <div style={{ backgroundColor: 'honeydew', minHeight: 50, maxHeight: 50 }}>
            Issues
          </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-1번 이슈
          </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-2번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-1번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-2번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-1번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-2번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-1번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-2번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-1번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-2번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-1번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-2번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-1번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-2번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-1번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-2번 이슈
          </div>
        </div>
        <div style={{ backgroundColor: 'gainsboro', display: 'flex', minWidth: 260, flexDirection: 'column' }}>
          <div style={{ backgroundColor: 'honeydew', minHeight: 50, maxHeight: 50 }}>
            Issues
          </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-1번 이슈
          </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-2번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-1번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-2번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-1번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-2번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-1번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-2번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-1번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-2번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-1번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-2번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-1번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-2번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-1번 이슈
            </div>
          <div style={{ backgroundColor: 'gray', minHeight: 120, }}>
            1-2번 이슈
          </div>
        </div>
      </>
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
      <div style={{ backgroundColor: 'gold', display: 'flex', flexDirection: 'row', width: '100%', height: '100%', overflowY: 'scroll' }}>
        {renderColumn()}
      </div>
    </>
  );
}

export default KanbanBoard;
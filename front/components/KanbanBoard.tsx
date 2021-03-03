import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import styles from '../styles/KanbanBoard.module.scss';
import { FaList, FaThLarge, FaPlus } from 'react-icons/fa';
import { KanbanBoardDummyData, kanbanSearchOptionDummyData } from '../DummyData';
const KanbanBoard = () => {
  const [searchOption, setSearchOption] = useState<KanbanSearchOption>('Content');
  const [searchValue, setSearchValue] = useState<string>('');
  useEffect(() => {

  });

  const onChangeShowEntry = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSearchOption(e.target.value as KanbanSearchOption);
  }, [searchOption]);

  const onChangeSearchValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, [searchValue]);

  const renderColumn = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex' }}>
          {
            KanbanBoardDummyData.map(column => {
              return (
                <div style={{
                  display: 'flex',
                  minWidth: 240,
                  maxWidth: 240,
                  padding: 5,
                  marginTop: 15,
                  marginRight: 10,
                  backgroundColor: 'rgb(244, 245, 247)',
                }}>
                  <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    {column.map(item => {
                      return (
                        <div className={styles.issueWrapper} >
                          <div style={{ minHeight: 75 }}>
                            {item.content}
                          </div>
                          <div style={{ minHeight: 15, marginTop: 10 }}>
                            {item.id}
                          </div>
                        </div>
                      )
                    })}
                    <div className={styles.createIssueButton}>
                      <FaPlus size={12} /><div style={{ marginLeft: 10 }}>Create issue</div>
                    </div>
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
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex' }}>
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
          </div>
          <div>
            <select value={searchOption} onChange={onChangeShowEntry} className={styles.searchOption}>
              {
                kanbanSearchOptionDummyData.map(e => {
                  return <option label={e} value={e} />;
                })
              }
            </select>
            <input value={searchValue} onChange={onChangeSearchValue} className={styles.searchInput} />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', marginTop: 20 }}>
        {
          KanbanBoardDummyData.map(title => {
            return (
              <div style={{
                display: 'flex',
                minWidth: 240,
                maxWidth: 240,
                height: 40,
                padding: 5,
                marginTop: 5,
                marginRight: 10,
                backgroundColor: 'rgb(244, 245, 247)',
                alignItems: 'center',
              }}>
                {title[0].belongTo} {title.length} Issues
              </div >
            )
          })
        }
      </div>
      <div style={{ width: '79vw', height: '70vh', overflowY: 'scroll' }}>
        {renderColumn()}
      </div>
    </>
  );
}

export default KanbanBoard;
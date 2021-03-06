import React, { ChangeEvent, DragEvent, useCallback, useEffect, useState } from 'react';
import styles from '../styles/KanbanBoard.module.scss';
import { FaList, FaThLarge, FaPlus } from 'react-icons/fa';
import { KanbanBoardDummyData, kanbanSearchOptionDummyData } from '../DummyData';
import Issue from './Issue';
import IssueModal from './IssueModal';
const KanbanBoard = () => {
  const [searchOption, setSearchOption] = useState<KanbanSearchOption>('Content');
  const [searchValue, setSearchValue] = useState<string>('');
  const [kanbanList, setKanbanList] = useState<KanbanBoardDummyDataItem[][]>(KanbanBoardDummyData);
  const [dragData, setDragData] = useState<DragData>({
    target: null,
    index: -1,
    columnIndex: -1,
    move_down: [],
    move_up: [],
    updateLists: []
  });
  const [isDragged, setIsDragged] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedIssue, setSelectedIssue] = useState<KanbanBoardDummyDataItem | null>(null)

  useEffect(() => {

  });

  const _onDragOver = (e: DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
    return true;
  }

  const _onDragStart = (e: DragEvent) => {
    setIsDragged(true);
    setDragData({
      ...dragData,
      target: e.currentTarget,
      index: Number(e.currentTarget.getAttribute('data-index')),
      columnIndex: Number(e.currentTarget.getAttribute('data-column')),
      updateLists: [...kanbanList]
    });

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", String(e.target));
  }

  const _onDragEnter = (e: DragEvent) => {
    const _dragged: number[] = [Number(dragData.target.dataset.column), Number(dragData.target.dataset.index)];
    const _index: number[] = [Number(dragData.columnIndex), Number(dragData.index)];
    const _target: number[] = [Number(e.currentTarget.getAttribute('data-column')), Number(e.currentTarget.getAttribute('data-index'))];
    let move_down: number[] = [...dragData.move_down];
    let move_up: number[] = [...dragData.move_up];
    // let updateData = [...dragData.updateLists];
    // updateData[_target[0], _target[1]] = updateData[_index[0]].splice(_index[1], 1)[0];
    let updateData: KanbanBoardDummyDataItem[][] = [...dragData.updateLists];
    const tamp: KanbanBoardDummyDataItem = updateData[_index[0]][_target[1]];
    updateData[_index[0]].splice(_target[1], 1, updateData[_index[0]][_index[1]]);
    updateData[_index[0]][_index[1]] = tamp;

    // if (_dragged[1] > _target[1]) {
    //   move_down.includes(_target[1]) ? move_down.pop() : move_down.push(_target[1]);
    // } else if (_dragged[1] < _target[1]) { // ??
    //   move_up.includes(_target[_target[1]]) ? move_up.pop() : move_up.push(_target[1]);
    // } else {
    //   move_down = [];
    //   move_up = [];
    // }

    setDragData({
      ...dragData,
      updateLists: updateData,
      index: _target[1],
      columnIndex: _target[0],
      move_up,
      move_down
    })
  }

  const _onDragLeave = (e: DragEvent) => {
    // if (e.target === dragData.target) {
    //   e.currentTarget.style.visibility = "hidden";
    // }
  }

  const _onDragEnd = (e: DragEvent) => {
    setIsDragged(false);
    // e.target.classList.remove("grabbing");
    setKanbanList([
      ...dragData.updateLists
    ]);

    setDragData({
      ...dragData,
      move_down: [],
      move_up: [],
      updateLists: [],
    });

    // e.target.style.visibility = "visible";
    e.dataTransfer.dropEffect = 'move';
  }

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
            kanbanList.map((column, columnIndex) => {
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
                  <div
                    style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }} >
                    {
                      column.map((item, index) => {
                        return (
                          <Issue
                            onClick={onClickModalOpen}
                            dragData={dragData}
                            columnIndex={columnIndex}
                            index={index}
                            isDragged={isDragged}
                            _onDragOver={_onDragOver}
                            _onDragStart={_onDragStart}
                            _onDragEnd={_onDragEnd}
                            _onDragEnter={_onDragEnter}
                            _onDragLeave={_onDragLeave}
                            item={item}
                          />
                        );
                      })
                    }
                    <div className={styles.createIssueButton}>
                      <FaPlus size={12} /><div style={{ marginLeft: 10 }}>Create issue</div>
                    </div>
                  </div>
                </div >
              )
            })
          }
        </div >
      </div >
    )
  }

  const onClickModalOpen = (issue?: KanbanBoardDummyDataItem | null) => {
    if (issue) {
      setSelectedIssue(issue);
    }
    setModalVisible(true);
  }

  const onClickModalClose = () => {
    setSelectedIssue(null);
    setModalVisible(false);
  }

  return (
    <>
      {
        modalVisible &&
        <IssueModal issue={selectedIssue} visible={modalVisible} onClickModalClose={onClickModalClose} />
      }
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
            <div className={styles.headerButton} onClick={() => onClickModalOpen()}>
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
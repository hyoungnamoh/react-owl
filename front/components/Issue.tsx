import { FC } from "react";
import styles from '../styles/KanbanBoard.module.scss';

const Issue: FC<IssueProps> = ({
  onClick,
  dragData,
  columnIndex,
  index,
  isDragged,
  _onDragOver,
  _onDragStart,
  _onDragEnd,
  _onDragEnter,
  _onDragLeave,
  item,
}) => {
  let classNames = "";
  dragData.move_up.includes(index) && dragData.columnIndex === columnIndex && (classNames = styles.move_up);
  dragData.move_down.includes(index) && dragData.columnIndex === columnIndex && (classNames = styles.move_down);
  return (
    <div
      draggable
      className={`${styles.issueWrapper} ${classNames} ${isDragged ? styles.issue : null}`}
      key={index}
      data-column={columnIndex}
      data-index={index}
      onDragOver={_onDragOver}
      onDragStart={_onDragStart}
      onDragEnd={_onDragEnd}
      onDragEnter={_onDragEnter}
      onDragLeave={_onDragLeave}
      onClick={() => onClick(item)}
    >
      <div className={styles.unselected} style={{ minHeight: 75 }}>
        {item.title}
      </div>
      <div className={styles.unselected} style={{ minHeight: 15, marginTop: 10 }}>
        {item.id}
      </div>
    </div>
  )
}

export default Issue;
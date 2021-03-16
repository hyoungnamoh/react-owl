import React, { useState } from 'react';
import styles from '../styles/test.module.scss';
const data = [
  {
    belongTo: 'TO DO',
    index: 0,
    content: '1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈1-1 이슈',
    id: 'TEST-1',
  },
  {
    belongTo: 'TO DO',
    index: 1,
    content: '1-2 이슈',
    id: 'TEST-2',
  },
  {
    belongTo: 'TO DO',
    index: 2,
    content: '1-3 이슈',
    id: 'TEST-3',
  },
  {
    belongTo: 'TO DO',
    index: 3,
    content: '1-4 이슈',
    id: 'TEST-4',
  },
];

const _initGrabData = {
  target: null,
  index: -1,
  move_down: [],
  move_up: [],
  updateLists: []
}

const Test = () => {
  const [lists, setLists] = useState(data);
  const [dragData, setDragData] = useState(_initGrabData);
  const [isDragged, setIsDragged] = useState(false)

  const _onDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return true
  }

  const _onDragStart = e => {
    setIsDragged(true);
    setDragData({
      ...dragData,
      target: e.target,
      index: Number(e.target.dataset.index),
      updateLists: [...lists]
    });

    // e.target.classList.add("grabbing");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target);
  }

  const _onDragEnter = e => {
    const _dragged = Number(dragData.target.dataset.index);
    const _index = Number(dragData.index);
    const _target = Number(e.target.dataset.index);
    let move_down = [...dragData.move_down];
    let move_up = [...dragData.move_up];

    let data = [...dragData.updateLists];
    data[_index] = data.splice(_target, 1, data[_index])[0];

    if (_dragged > _target) {
      move_down.includes(_target) ? move_down.pop() : move_down.push(_target);
    } else if (_dragged < _target) {
      move_up.includes(_target) ? move_up.pop() : move_up.push(_target);
    } else {
      move_down = [];
      move_up = [];
    }

    setDragData({
      ...dragData,
      updateLists: data,
      index: _target,
      move_up,
      move_down
    })


    // let move_up = [...grab.move_up];
    // let move_down = [...grab.move_down];
    // let listData = [...grabedList];
    // let targetPosition = Number(e.target.dataset.position);
    // let grabPosition = Number(grab.position);
    // if (grabPosition < targetPosition) {
    //   move_down.includes(targetPosition) ? move_down.pop() : move_up.push(targetPosition);
    // }
    // if (grabPosition > targetPosition) {
    //   move_up.includes(targetPosition) ? move_up.pop() : move_down.push(targetPosition);
    // }
    // if (grabPosition === targetPosition) {
    //   console.log('hi');
    //   move_up.length === 0 ? move_down.pop() : move_up.pop();
    // }
    // const temp = listData[grabPosition];
    // listData[grabPosition] = listData[targetPosition];
    // listData[targetPosition] = temp;
    // // 올라갔다 내려오면 무브업이 비어있음
    // console.log(move_up, move_down);

    // setGrabedList(listData);
    // setGrab({ ...grab, position: targetPosition, move_up, move_down });












    //   let move_up = [...grab.move_up];
    //   let move_down = [...grab.move_down];
    //   let listData = [...grab.updateList];
    //   let grabPosition = Number(grab.target.dataset.position); // 잡아 놓은 타겟의 위치값
    //   let targetPosition = Number(e.target.dataset.position); // 떨구는 곳 타겟의 위치값
    //   let listGrabPosition = Number(grab.position);
    //   listData[targetPosition] = listData.splice(listGrabPosition, 1, listData[listGrabPosition])[0];
    //   console.log('hi', listData[0]);


    //   setGrab({
    //     ...grab,
    //     move_up,
    //     move_down,
    //     updateList: listData,
    //     position: listGrabPosition,
    //   });
  }

  const _onDragLeave = e => {
    if (e.target === dragData.target) {
      e.target.style.visibility = "hidden";
    }
  }

  const _onDragEnd = e => {
    setIsDragged(false);
    // e.target.classList.remove("grabbing");
    setLists([
      ...dragData.updateLists
    ]);

    setDragData({
      ...dragData,
      move_down: [],
      move_up: [],
      updateLists: [],
    });

    e.target.style.visibility = "visible";
    e.dataTransfer.dropEffect = 'move';
  }

  return (
    <div style={{ width: 200, display: 'flex', flexDirection: 'column' }} onDragOver={_onDragOver} >
      {
        lists.map((issue, index) => {
          console.log(issue);
          let classNames = "";
          dragData.move_up.includes(index) && (classNames = styles.move_up);
          dragData.move_down.includes(index) && (classNames = styles.move_down);
          return (
            <div
              key={index}
              data-index={index}
              onDragOver={_onDragOver}
              onDragStart={_onDragStart}
              onDragEnd={_onDragEnd}
              onDragEnter={_onDragEnter}
              onDragLeave={_onDragLeave}
              draggable
              className={`${classNames} ${isDragged ? styles.issue : null}`}
              style={{
                borderWidth: 1,
                borderColor: 'black',
                borderStyle: 'solid',
                height: 60,
                marginBottom: 10,
              }}
            >
              {issue.id}
            </div>
          )
        })
      }
    </div >
  )
}

export default Test;
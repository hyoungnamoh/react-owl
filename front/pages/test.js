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
  position: null,
  move_up: [],
  move_down: [],
  updateList: []
}

const Test = () => {
  const [lists, setLists] = React.useState(data);
  const [grab, setGrab] = React.useState(_initGrabData);
  const [isDrag, setIsDrag] = React.useState(false);

  const _onDragOver = e => { e.preventDefault(); }

  const _onDragStart = e => {
    setIsDrag(true);
    setGrab({
      ...grab,
      target: e.target,
      position: Number(e.target.dataset.position),
      updateList: [...lists]
    });

    e.target.classList.add("grabbing");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target);
  }

  const _onDragEnter = e => {
    let grabPosition = Number(grab.target.dataset.position); // 잡아 놓은 타겟의 위치값
    let listPosition = grab.position; // updateList에서 선택된 타겟의 위치값
    let targetPosition = Number(e.target.dataset.position); // 떨구는 곳 타겟의 위치값

    let move_up = [...grab.move_up];
    let move_down = [...grab.move_down];
    let data = [...grab.updateList];


    if (grabPosition > targetPosition) { //떨구려는 애가 떨궈지려는 애보다 크면 밑으로
      move_down.includes(targetPosition) ? move_down.filter(e => e === targetPosition) : move_down.push(targetPosition);
    }
    if (grabPosition < targetPosition) {
      move_up.includes(targetPosition) ? move_up.filter(e => e === targetPosition) : move_up.push(targetPosition);
    }
    if (grabPosition === targetPosition) {
      move_up = [];
      move_down = [];
    }
    console.log(move_up, move_down);
    data[grabPosition] = data.splice(targetPosition, 1, data[grabPosition])[0];
    // if (listPosition > targetPosition) {
    //   move_down.includes(targetPosition) ? move_down.pop() : move_down.push(targetPosition);
    // } else if (listPosition < targetPosition) {
    //   move_up.includes(targetPosition) ? move_up.pop() : move_up.push(targetPosition);
    // } else {
    //   move_down = [];
    //   move_up = [];
    // }

    setGrab({
      ...grab,
      move_up,
      move_down,
      updateList: data,
      position: targetPosition
    })
  }

  const _onDragLeave = e => {
    if (e.target === grab.target) {
      e.target.style.visibility = "hidden";
    }
  }

  const _onDragEnd = e => {
    setIsDrag(false);
    e.target.classList.remove("grabbing");
    e.dataTransfer.dropEffect = "move";

    setLists([...grab.updateList]);

    setGrab({
      target: null,
      move_up: [],
      move_down: [],
      updateList: []
    });

    e.target.style.visibility = "visible";
  }
  return (
    <div style={{ width: 200, display: 'flex', flexDirection: 'column' }} onDragOver={_onDragOver} >
      {
        lists.map((issue, index) => {
          let classNames = ""
          grab.move_up.includes(index) && (classNames = styles.move_up)
          grab.move_down.includes(index) && (classNames = styles.move_down)
          return (
            <div
              key={index}
              data-position={index}
              onDragOver={_onDragOver}
              onDragStart={_onDragStart}
              onDragEnd={_onDragEnd}
              onDragEnter={_onDragEnter}
              onDragLeave={_onDragLeave}
              draggable
              className={`${classNames} ${isDrag ? styles.issue : null}`}
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
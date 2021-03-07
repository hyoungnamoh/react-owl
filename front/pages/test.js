import React, { Component } from 'react';
import styles from '../styles/test.module.scss';

let cOffX = 0;
let cOffY = 0;

export default class AppDragDropDemo extends Component {
  state = {
    tasks: [
      { name: "Learn Angular", category: "wip", bgcolor: "yellow" },
      { name: "React", category: "wip", bgcolor: "pink" },
      { name: "Vue", category: "complete", bgcolor: "skyblue" }
    ],
    onDragStyle: { backgroundColor: 'red' },
  }
  itemRef = null;

  dragStart = (e) => {
    cOffX = this.itemRef.offsetLeft;
    cOffY = this.itemRef.offsetTop;
    console.log(cOffX, cOffY);
    // ev.dataTransfer.setData("id", id);
    // console.log(e.clientX - this.el.offsetLef/t, e.clientX - this.el.offsetTop);

    // document.addEventListener('mousemove', this.dragMove);
    // document.addEventListener('mouseup', this.dragEnd);

    // this.el.classList.add(d);
    // this.container.style.cursor = 'move';
  };

  dragMove = (e) => {
    console.log('dragOn')
    e.persist();
    this.setState({
      onDragStyle: {
        backgroundColor: 'red',
        position: 'absolute',
        top: e.clientY - cOffY,
        left: e.clientX - cOffX,
      }
    })
  };

  dragEnd = (e) => {
    e = e || window.event;
    e.preventDefault();

    // document.removeEventListener('mousemove', this.dragMove);
    // document.removeEventListener('mouseup', this.dragEnd);

    // this.el.classList.remove(d);
    // this.container.style.cursor = null;
  };

  onDragStart = (ev, id) => {
    console.log('dragstart:', id);
    ev.dataTransfer.setData("id", id);
    console.log(ev);
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter((task) => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks
    });
  }

  render() {
    var tasks = {
      wip: [],
      complete: []
    }

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div key={t.name}
          onDragStart={(e) => this.onDragStart(e, t.name)}
          draggable
          className={styles.draggable}
          style={this.state.onDragStyle}
        >
          {t.name}
        </div>
      );
    });

    return (
      <div className={styles.containerdrag}>
        <h2 className={styles.header}>DRAG & DROP DEMO</h2>
        <div className={styles.wip}
          onDragOver={(e) => this.dragMove(e)}
          onDrop={(e) => { this.onDrop(e, "wip") }}>
          <span className={styles.taskheader}>WIP</span>
          <div
            onDragStart={(e) => this.dragStart(e)}
            draggable
            className={styles.draggable}
            style={this.state.onDragStyle}
            ref={(ref) => this.itemRef = ref}
          >
            Hi
          </div>
        </div>
        <div className={styles.droppable}
          onDragOver={(e) => this.dragMove(e)}
          onDrop={(e) => this.onDrop(e, "complete")}>
          <span className={styles.taskheader}>COMPLETED</span>
          {/* {tasks.complete} */}
        </div>
      </div>
    );
  }
}
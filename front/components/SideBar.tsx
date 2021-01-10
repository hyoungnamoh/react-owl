import styles from '../styles/SideBar.module.scss';
import Collapse, { Panel } from 'rc-collapse';
import * as React from 'react';
import { useState } from 'react';
import "rc-collapse/assets/index.css";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function random() {
  return Math.random() * 10 + 1;
}

const arrowPath =
  "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88" +
  ".5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3." +
  "6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-0.7 5." +
  "2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z";

function expandIcon({ isActive }) {
  return (
    <i style={{ marginRight: ".5rem" }}>
      <svg
        viewBox="0 0 1024 1024"
        width="1em"
        height="1em"
        fill="currentColor"
        style={{
          verticalAlign: "-.125em",
          transition: "transform .2s",
          transform: `rotate(${isActive ? 90 : 0}deg)`
        }}
      >
        <path d={arrowPath} p-id="5827" />
      </svg>
    </i>
  );
}

function CustomHeader(props) {
  console.log(props);
  return (
    <button
      style={{
        float: "right"
      }}
    >
      <i style={{ marginRight: ".5rem" }}>
        <svg
          viewBox="0 0 1024 1024"
          width="1em"
          height="1em"
          fill="currentColor"
          style={{
            verticalAlign: "-.125em",
            transition: "transform .2s",
            transform: `rotate(90deg)`
          }}
        >
          <path d={arrowPath} p-id="5827" />
        </svg>
      </i>
      <span>Custom label</span>
    </button>
  );
}
const SideBar = () => {
  const [accordion, setAccordion] = useState(false);
  const [activeKey, setActiveKey] = useState([]);

  const onChange = (activeKey) => {
      setActiveKey(activeKey);
  };
  const getExtra = (...rest) => <CustomHeader custom={rest} />;
  const getItems = () => {
    const items = [];
    for (let i = 0, len = 3; i < len; i++) {
      const key = i + 1;
      items.push(
        <Panel
          header={`This is panel header ${key}`}
          key={key}
          disabled={i === 0}
          extra={getExtra()}
        >
          <p>{text}</p>
        </Panel>
      );
    }
    items.push(
      <Panel header={`This is panel header 4`} key="4">
        <Collapse defaultActiveKey="1" expandIcon={expandIcon}>
          <Panel header={`This is panel nest panel`} key="1" id="header-test">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Panel>
    );

    items.push(
      <Panel header={`This is panel header 5`} key="5">
        <Collapse defaultActiveKey="1">
          <Panel header={`This is panel nest panel`} key="1" id="another-test">
            <form>
              <label htmlFor="test">Name:&nbsp;</label>
              <input type="text" id="test" />
            </form>
          </Panel>
        </Collapse>
      </Panel>
    );

    return items;
  }

  const setActivityKey = () => {
    setActiveKey(["2"]);
  };

  const toggle = () => {
    setAccordion(!accordion)
  };

  const reRender = () => {
    // setState({
    //   time: random()
    // });
  };

  const btn = accordion ? "Mode: accordion" : "Mode: collapse";
  return (
    <div style={{ margin: 20, width: 400 }}>
      <button onClick={reRender}>reRender</button>
      <button onClick={toggle}>{btn}</button>
      <br />
      <br />
      <button onClick={setActivityKey}>active header 2</button>
      <br />
      <br />
      <Collapse
        accordion={accordion}
        onChange={onChange}
        activeKey={activeKey}
        expandIcon={expandIcon}
      >
        {getItems()}
      </Collapse>
    </div>
  );
}

export default SideBar;
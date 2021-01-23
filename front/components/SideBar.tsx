import styles from '../styles/SideBar.module.scss';
import Collapse, { Panel } from 'rc-collapse';
import * as React from 'react';
import { useState } from 'react';
import "rc-collapse/assets/index.css";
import { useRouter } from 'next/router';

const arrowPath =
  "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88" +
  ".5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3." +
  "6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-0.7 5." +
  "2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z";

const expandIcon = (props: ExpandIcon): React.ReactNode => {
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
          transform: `rotate(${props.isActive ? 90 : 0}deg)`
        }}
      >
        <path d={arrowPath} p-id="5827" />
      </svg>
    </i>
  );
}

interface Props {

}

const projectDumyData: Project[] = [
  {
    id: '123',
    projectName: '형남 프로젝트'
  },
  {
    id: '124',
    projectName: '무슨 프로젝트'
  },
]

const SideBar: React.FC<Props> = ({}) => {
  const router = useRouter();
  const [accordion, setAccordion] = useState<boolean>(false);
  const [activeKey, setActiveKey] = useState<React.Key[]>([]);
  const [projectList, setProjectList] = useState<Project[]>([]);

  React.useEffect(() => {
    setProjectList(projectDumyData);
  });

  const onChange = (activeKey: React.Key[]): void => {
    setActiveKey(activeKey);
  };
  const getItems = () => {
    const items = [];
    items.push(
      <Panel header={'My Task'} key="My Task">
        <Panel header={'Dashboard'} key="Dashboard" id="header-test" className={styles.panelItem} onItemClick={() => router.push('/myTask/dashboard')} />
        <Panel header={'Calendar'} key="Calendar" id="header-test" className={styles.panelItem} />
      </Panel>
    );
    items.push(
      <Panel header={'Favorites'} key="Favorites" >
        <Panel header={'favorite1'} key="favorite1" id="header-test" className={styles.panelItem} onItemClick={() => router.push('/myTask/dashboard')} />
        <Panel header={'favorite2'} key="favorite2" id="header-test" className={styles.panelItem} onItemClick={() => router.push('/myTask/dashboard')} />
      </Panel>
    );
    items.push(
      <Panel header={'Project List'} key="Project List" >
        {
          projectList.map(e => <Panel header={e.projectName} key={e.id} id="header-test" className={styles.panelItem} onItemClick={() => router.push(`/project/projectList/projectDetail?id=${e.id}`)} />)
        }
        {/* <Panel header={'project1'} key="project1" id="header-test" className={styles.panelItem} onItemClick={() => router.push('/myTask/dashboard')} />
        <Panel header={'project2'} key="project2" id="header-test" className={styles.panelItem} onItemClick={() => router.push('/myTask/dashboard')} /> */}
      </Panel>
    );

    return items;
  }

  const btn = accordion ? "Mode: accordion" : "Mode: collapse";
  return (
    <div className={styles.wrapper}>
      <Collapse
        accordion={accordion}
        onChange={onChange}
        activeKey={activeKey}
        expandIcon={expandIcon}
        style={{ margin: 0, padding: 0 }}
      >
        {getItems()}
      </Collapse>
    </div>
  );
}

export default SideBar;
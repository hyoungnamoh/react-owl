import { CSSProperties, FC } from "react";
import styles from '../styles/Tab.module.scss';

interface Item {
  onClick?: () => void,
  style?: CSSProperties,
  className?: CSSProperties,
  tabName?: string,
}
interface Props {
  items: Item[],
  className?: 'string',
  style?: CSSProperties,
}
const Tab: FC<Props> = ({ items, className, style }) => {
  return (
    <div className={styles.wrapper}>
      {
        items.map((e, i) => {
          return (
            <div className={`${styles.tabItem} ${e.className}`} style={e.style}>
              <p>{e.tabName ? e.tabName : `tab${i + 1}`}</p>
            </div>
          )
        })
      }
    </div>
  );
};

export default Tab;
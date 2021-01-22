import { CSSProperties, FC } from "react";
import styles from '../styles/Tab.module.scss';

interface Item {
  onClick?: () => void,
  style?: CSSProperties,
  className?: CSSProperties,
  tabName?: string,
  selected: boolean,
}
interface Props {
  items: Item[],
  className?: 'string',
  style?: CSSProperties,
  selectedStyle?: CSSProperties,
}
const Tab: FC<Props> = ({ items, className, style, selectedStyle }) => {
  const getStyle = (e: Item): CSSProperties | undefined => {
    let style = e.style;
    if(e.selected) {
      return {...style, ...selectedStyle};
    }
    return style;
  }
  return (
    <div className={styles.wrapper}>
      {
        items.map((e, i) => {
          return (
            <button className={`${styles.tabItem} ${e.className}`} style={getStyle(e)}>
              <p>{e.tabName ? e.tabName : `tab${i + 1}`}</p>
            </button>
          )
        })
      }
    </div>
  );
};

export default Tab;
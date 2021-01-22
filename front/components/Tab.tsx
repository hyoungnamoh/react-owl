import { CSSProperties, FC } from "react";
import styles from '../styles/Tab.module.scss';

interface Item {
  style?: CSSProperties,
  className?: CSSProperties,
  tabName?: string,
}
interface Props {
  items: Item[],
  className?: 'string',
  style?: CSSProperties,
  selectedStyle?: CSSProperties,
  onClick?: (index: number) => void,
  selected: number,
}
interface GetStyleProps {
  item: Item,
  index: number,
}
const Tab: FC<Props> = ({ items, className, style, selectedStyle, selected, onClick }) => {
  const getStyle = ({ item, index }: GetStyleProps): CSSProperties | undefined => {
    let style = item.style;
    if (selected === index) {
      return { ...style, ...selectedStyle };
    }
    return style;
  }

  return (
    <div className={styles.wrapper}>
      {
        items.map((e, i) => {
          return (
            <button className={`${styles.tabItem} ${e.className}`} style={getStyle({ item: e, index: i })} onClick={() => onClick && onClick(i)}>
              <p>{e.tabName ? e.tabName : `tab${i + 1}`}</p>
            </button>
          )
        })
      }
    </div>
  );
};

export default Tab;
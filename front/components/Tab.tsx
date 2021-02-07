import { CSSProperties, FC, useState } from "react";
import styles from '../styles/Tab.module.scss';

interface Props {
  items: TabItem[],
  className?: 'string',
  style?: CSSProperties,
  selectedStyle?: CSSProperties,
}

const Tab: FC<Props> = ({ items, className, style, selectedStyle }) => {
  const [selected, setSelected] = useState<number>(0);

  const onClickTab = ({ item, index }: OnClickTabProps): void => {
    setSelected(index);
    item.onClick && item.onClick();
  }

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
            <button className={`${styles.tabItem} ${e.className}`} style={getStyle({ item: e, index: i })} onClick={() => onClickTab({ item: e, index: i })}>
              <p>{e.tabName ? e.tabName : `tab${i + 1}`}</p>
            </button>
          )
        })
      }
    </div>
  );
};

export default Tab;
import Link from 'next/link';
import * as React from 'react';
import { FC, useState, useMemo } from 'react';
import styles from '../styles/Buttons.module.scss';


interface item {
  image: string,
  onClick?: (e: React.MouseEvent) => void;
  title?: string,
  subTitle?: string,
}

interface Props {
  items: item[],
  itemStyle: React.CSSProperties,
  spacing: number,
  wrapperStyle?: React.CSSProperties,
}

const Buttons: FC<Props> = ({ items, itemStyle, wrapperStyle, spacing }) => {
  const getStyle = (i: number): React.CSSProperties => {
    let style: React.CSSProperties = { ...itemStyle };
    style.marginRight = spacing / 2;
    style.marginLeft = spacing / 2;

    if (i === 0) {
      style.marginLeft = 0;
    }
    if (i === items.length - 1) {
      style.marginRight = 0;
    }

    return style;
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {
        items.map((e, i) => {
          return (
            e.image ?
              <div className={styles.wrapper} style={wrapperStyle ? wrapperStyle : {}}>
                <img src={e.image} className={styles.buttonItem} style={getStyle(i)} onClick={e.onClick} />
                {e.title && <p className={styles.title}>{e.title}</p>}
                {e.subTitle && <p className={styles.subTitle} dangerouslySetInnerHTML={{ __html: e.subTitle }} />}
              </div>
              :
              <button className={styles.buttonItem} style={getStyle(i)} onClick={e.onClick}>
              </button>
          );
        })
      }
    </div>
  );
}

export default Buttons;
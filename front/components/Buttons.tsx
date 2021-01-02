import Link from 'next/link';
import * as React from 'react';
import { FC, useState, useMemo } from 'react';
import styles from '../styles/Buttons.module.scss';


interface item {
  image: string,
  onClick(e: React.MouseEvent): void;
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
    <div className={styles.wrapper} style={wrapperStyle ? wrapperStyle : {}}>
      {
        items.map((e, i) => {
          return (
            e.image ?
              <img src={e.image} className={styles.buttonItem} style={getStyle(i)} onClick={e.onClick} />
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
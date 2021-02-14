import React, { Component, CSSProperties, FC } from "react";
import styles from '../styles/PagingButton.module.scss';
const PagingItem: FC<PagingItemProps> = ({ isActive, image, pageText, pageNumber, movePage }) => {
  const getPagingItemStyle = (isActive: boolean | undefined): CSSProperties => {
    return {
      fontSize: 14,
      padding: '0.5rem 0.75rem',
      color: isActive ? '#ffffff' : '#b0b0b0',
      fontWeight: isActive ? 400 : 200,
      backgroundColor: isActive ? '#2962FF' : '#ffffff',
      cursor: 'pointer',
      border: '0.5px solid #dee2e6',
    };
  }

  const renderTextOrImage = () => {
    return pageText;
  }

  return (
    <div className={styles.itemWrapper}>
      <span
        style={getPagingItemStyle(isActive)}
        onClick={() => movePage(pageNumber)}>
        {renderTextOrImage()}
      </span>
    </div>
  )
}

export default PagingItem;
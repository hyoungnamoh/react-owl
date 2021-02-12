import React, { Component, CSSProperties, FC } from "react";
const PagingItem: FC<PagingItemProps> = ({ isActive, image, pageText, pageNumber, movePage }) => {
  const getPagingItemStyle = (isActive: boolean | undefined): CSSProperties => {
    return {
      padding: '0px 5px',
      color: isActive ? '#000000' : '#b0b0b0',
      fontWeight: isActive ? 400 : 200,
      cursor: 'pointer'
    };
  }

  const renderTextOrImage = () => {
    return pageText;
  }

  return (
    <span
      style={getPagingItemStyle(isActive)}
      onClick={() => movePage(pageNumber)}>
      {renderTextOrImage()}
    </span>
  )
}

export default PagingItem;
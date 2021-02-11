import React, { Component, FC } from "react";
const PagingItem: FC<PagingItemProps> = ({ isActive, image, pageText, pageNumber, onClick }) => {
  const getPagingItemStyle = ({ type }: GetPagingItemStyleProps) => {
    switch (type) {
      case 'color':
        return isActive ? '#000000' : '#b0b0b0';
      case 'fontWeight':
        return isActive ? 400 : 200;
      default:
        break;
    }
    return 'd';
  }

  const renderTextOrImage = () => {
    if (!!image) {
      return <img style={{ height: 15 }} src={image} />
    } else {
      return pageText
    }

  }

  return (
    <span
      style={{
        padding: '0px 5px',
        color: getPagingItemStyle({ type: 'color' }),
        fontWeight: getPagingItemStyle({ type: 'fontWeight' }),
        cursor: 'pointer'
      }}
      onClick={() => onClick(pageNumber)}>
      {renderTextOrImage()}
    </span>
  )
}

export default PagingItem;
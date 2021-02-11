import React, { Component, FC } from "react";

const pageRangeDisplayed = 5;
const prevPageImg = '/images/paging/prev_page_icon.png';
const nextPageImg = '/images/paging/next_page_icon.png';


const PagingButton: FC<PagingButtonProps> = ({ totalPage, currentPage, movePage }) => {
  const makePageInfo = () => {
    let total_pages = totalPage;
    let current_page = currentPage;
    let has_previous_page = currentPage > 1;
    let previous_page = currentPage - 1;
    let has_next_page = totalPage > 0 && currentPage != totalPage;
    let next_page = currentPage + 1;
    let first_page = Math.max(1, current_page - Math.floor(pageRangeDisplayed / 2));
    let last_page = Math.min(total_pages, current_page + Math.floor(pageRangeDisplayed / 2));

    if (last_page - first_page + 1 < pageRangeDisplayed) {
      if (current_page < (total_pages / 2)) {
        last_page = Math.min(total_pages, last_page + (pageRangeDisplayed - (last_page - first_page)));
      } else {
        first_page = Math.max(1, first_page - (pageRangeDisplayed - (last_page - first_page)));
      }
    }

    if (last_page - first_page + 1 > pageRangeDisplayed) {
      if (current_page > (total_pages / 2)) {
        first_page++;
      } else {
        last_page--;
      }
    }

    return {
      total_pages: total_pages,
      current_page: current_page,
      has_previous_page: has_previous_page,
      previous_page: previous_page,
      has_next_page: has_next_page,
      next_page: next_page,
      first_page: first_page,
      last_page: last_page,
    }

  }

  const isPrevPageVisible = ({ visible }: PagingBuggonVisibleProps) => {
    if (!visible) return false;
    return true;
  }

  const isNextPageVisible = ({ visible }: PagingBuggonVisibleProps) => {
    if (!visible) return false;
    return true;
  }

  const buildPages = () => {
    const pages = [];
    const pageInfo = makePageInfo();
    for (
      let i = pageInfo.first_page;
      i <= pageInfo.last_page;
      i++
    ) {
      pages.push(
        <PageItem
          isActive={i === currentPage}
          key={i}
          pageNumber={i}
          pageText={i + ""}
          onClick={movePage}
        />
      );
    }

    isPrevPageVisible({ visible: pageInfo.has_previous_page }) &&
      pages.unshift(
        <PageItem
          key={"prev" + pageInfo.previous_page}
          pageNumber={pageInfo.previous_page}
          onClick={movePage}
          image={prevPageImg}
          isDisabled={!pageInfo.has_previous_page}
        />
      );

    isNextPageVisible({ visible: pageInfo.has_next_page }) &&
      pages.push(
        <PageItem
          key={"next" + pageInfo.next_page}
          pageNumber={pageInfo.next_page}
          onClick={movePage}
          image={nextPageImg}
          isDisabled={!pageInfo.has_next_page}
        />
      );

    return pages;
  }

  if (totalPage == 1) return null;

  const pages = buildPages();
  return <div className={styles.pages_wrap}> {pages} </div>;
}

export default PagingButton;
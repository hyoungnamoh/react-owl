import { NextComponentType, NextPageContext } from 'next';
import * as React from 'react';
import { FC } from 'react';
import Header from './Header';
import SideBar from './SideBar';

interface Props {
  children?: NextComponentType<NextPageContext, any, {}>
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar /> {children}
      </div>
    </>
  );
}

export default Layout;
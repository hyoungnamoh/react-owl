import { NextComponentType, NextPageContext } from 'next';
import * as React from 'react';
import { FC } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import styles from '../styles/SideBar.module.scss';
import { userStore } from '../store';

interface Props {
  children?: NextComponentType<NextPageContext, any, {}>
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <div style={{ flex: 1 }}>
      <Header />
      <div style={{ marginTop: '8vh' }}>
        {userStore.data && <SideBar />}{children}
      </div>
    </div>
  );
}

export default Layout;
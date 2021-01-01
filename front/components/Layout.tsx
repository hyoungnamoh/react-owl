import { NextComponentType, NextPageContext } from 'next';
import * as React from 'react';
import { FC } from 'react';
import Header from './Header';

interface Props {
  children?: NextComponentType<NextPageContext, any, {}>
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}

    </>
  );
}

export default Layout;
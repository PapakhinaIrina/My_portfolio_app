/* eslint-disable react/prop-types */
import React from 'react';
import { Header } from '../widgets/header/header';
export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

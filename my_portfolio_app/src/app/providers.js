/* eslint-disable react/prop-types */
import { BrowserRouter } from 'react-router-dom';

export const RouterProvider = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

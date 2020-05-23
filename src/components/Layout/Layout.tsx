import React from 'react';
import { useSelector } from 'react-redux';

import { cartSelectors } from '../../store/cart';
import { Portal } from '..';
import { Cart } from '../../containers';

type LayoutTypes = {
    children: React.ReactNode,
}

const Layout = ({ children }: LayoutTypes) => {
  const isOpenCart = useSelector(cartSelectors.getOpenStatus);
  return (
    <div className="page-wrapper">
      {children}
      <Portal>
        {isOpenCart && (<Cart />)}
      </Portal>
    </div>
  );
};

export default Layout;

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

type PortalTypes = {
  children: React.ReactNode,
}

const root: HTMLElement = document.getElementById('root');

const Portal = ({ children }: PortalTypes) => {
  const element: HTMLElement = document.createElement('div');

  useEffect(() => {
    root.append(element);
    return () => {
      root.removeChild(element);
    };
  }, [element]);

  return ReactDOM.createPortal(children, root);
};

export default Portal;

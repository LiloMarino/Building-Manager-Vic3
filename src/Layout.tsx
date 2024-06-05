import React, { ReactNode } from 'react';
import Sidebar from './components/Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="d-flex min-vh-100">
      <div style={{ width: "200px" }}>
        <Sidebar></Sidebar>
      </div>
      <div className="flex-grow-1">
        {children}
      </div>
    </div>
  );
}

export default Layout;

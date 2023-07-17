import * as React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between ">
      <Navbar />
      <div className="mx-auto w-full flex-grow ">
        <main className="w-full px-10 py-5 ">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

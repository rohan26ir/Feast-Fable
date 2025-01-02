import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Shared/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      

      <div>
        <Outlet></Outlet>
      </div>

      <div>
        <Footer></Footer>
      </div>

    </div>
  );
};

export default MainLayout;
import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import CallUs from '../../components/CallUs/CallUs';
import PopularMenu from './PopularMenu/PopularMenu';

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div className='mx-[10%]'>
        <Category></Category>
      </div>

      <div>
        <CallUs></CallUs>
      </div>

      <div className='mx-[10%] my-5'>
        <PopularMenu></PopularMenu>
      </div>
    </div>
  );
};

export default Home;
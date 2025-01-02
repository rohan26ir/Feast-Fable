import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import PopularCard from './PopularCard';

const PopularMenu = () => {


  const [menu, setMenu] = useState([])

  useEffect(() => {
    fetch('/menu.json')
    .then(res => res.json())
    .then(data => {const PopularMenu = data.filter(item => item.category === 'popular');
    setMenu(PopularMenu)
    })
  },[])

    console.log(menu);

  return (
    <div>
      <section>
        <SectionTitle
        heading={'FROM OUR MENU'}
        subHeading={'---Check it out---'}
        ></SectionTitle>
      </section>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-6'>
        {
        menu.map(item => <PopularCard key={item._id} item={item}></PopularCard>)
        }
      </div>
    </div>
  );
};

export default PopularMenu;
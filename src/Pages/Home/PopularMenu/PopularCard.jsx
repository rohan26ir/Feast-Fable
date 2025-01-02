import React from 'react';

const PopularCard = ({item}) => {

  const {name, price, image, recipe} = item;
  
  console.log(name);
  return (
    <div>
      <div className='flex justify-between'>
        <div>
          <img 
          style={{borderRadius: '0 200px 200px 200px'}}
          className='w-[200px] object-cover'
          src={image} alt="" />
        </div>
        <div className='ml-4'>
          <h2 className='text-xl font-semibold'>{name}</h2>
          <p>{recipe}</p>
        </div>
        <div>
          <h2 className='text-yellow-600'>${price}</h2>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
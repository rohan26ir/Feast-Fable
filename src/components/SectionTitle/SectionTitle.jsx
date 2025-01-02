import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div>
      <div className='flex justify-center'>
          <p className='text-yellow-600'>{subHeading}</p>
        </div>
        
        <div className='flex justify-center'>
        <h3 className='w-[30%] text-center text-4xl font-bold py-2 border-y-2 border-gray-500 my-3'>{heading}</h3>
        </div>
    </div>
  );
};

export default SectionTitle;
import React from 'react';
import HighPriority from '../components/HighPriority';
import MediumPriority from '../components/MediumPriority';
import LowPriority from '../components/LowPriority';

const PriorityList = () => {
  const style = {
    display: 'flex',
    flexFlow:'row wrap',
    marginTop: '3rem'
  }

  return (
    <div className='row' style={style}>
      <LowPriority/>
      <MediumPriority/>
      <HighPriority/>
    </div>
  );
};

export default PriorityList;
import React from 'react';
import Img from '../../assets/searching.gif'
import './Islam.css'

const EmptyList = () => (
  <div className='emptyList-wrap'>
    <img src={Img} alt='empty' />
  </div>
);

export default EmptyList;
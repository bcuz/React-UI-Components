import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function handleClick(e) {
  e.preventDefault();
  window.open('http://www.reactjs.org', '_blank');
}

const CardContainer = () => {
  return (
    <div className='card' onClick={handleClick}>
      <CardBanner />
      <CardContent />
    </div>
  )
}

export default CardContainer;

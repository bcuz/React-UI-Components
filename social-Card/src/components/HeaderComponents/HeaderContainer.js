import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
  return (
    // make fragment?
    <div className='header'>
      <div><ImageThumbnail /></div>
      <div>
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  )
}

export default HeaderContainer;

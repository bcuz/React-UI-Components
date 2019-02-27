import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
  return (
    // make fragment?
    <div className='header'>
      <div className='header-item'>
        <ImageThumbnail />
      </div>
      <div className='header-item'>
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  )
}

export default HeaderContainer;

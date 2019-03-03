import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
  return (
    <React.Fragment>
      <div className='header-item'>
        <ImageThumbnail />
      </div>
      <div className='header-item'>
        <HeaderTitle />
        <HeaderContent />
      </div>
    </React.Fragment>
  )
}

export default HeaderContainer;

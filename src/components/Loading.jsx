import React from 'react';
import logo from '../assets/icon/logo.png';

const Loading = () => {
  return (
    <div className='loading'>
      <img src={logo} alt="logo" className='loading__logo' />
      <div className="preloader-wrapper small active">
        <div className="spinner-layer spinner-green-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading;
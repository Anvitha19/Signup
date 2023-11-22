import React from 'react';
import Image from '../Components/customer.png';

const Registration = () => {
  return (
      <div className='row'>
            <div className='col'>
            <h2 className='heading'>Welcome to our community</h2>
            <p className='para'>Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today.</p>
            <img src={Image} alt="customer" className='image'></img>
            <span className='content'>More than 17% people joined us, It's your turn</span>
            </div>
        </div>
  )
}

export default Registration;

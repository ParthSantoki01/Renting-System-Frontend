import React from 'react';
import './style.css';

const AddressCard = (props) => {
  return (
    <div className='AddressCard-main'>
      <div className='AddressCard-name-body'>
        <p className='AddressCard-name'>{props.seller}</p>
      </div>
      <div className='AddressCard-address-body'>
        <p className='AddressCard-address'>{props.address}</p>
      </div>
    </div>
  );
};

AddressCard.defaultProps = {
  seller: 'Harshad Mehta',
  address: 'Dalal Street, Kala Ghoda, Fort, Mumbai, Maharashtra 400001, India ',
};

export default AddressCard;

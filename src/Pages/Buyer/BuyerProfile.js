import React from 'react';
import { Icon } from '@iconify/react';
import BuyerMyOrder from './BuyerMyOrder';
import TitleHeader from '../../Components/Header/TitleHeader';
import logo from '../../Assets/logo512.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import cardAccountDetails from '@iconify-icons/mdi/card-account-details';
import arrowLeftCircle from '@iconify-icons/mdi/arrow-left-circle';
import shoppingIcon from '@iconify-icons/mdi/shopping';

const BuyerProfile = (props) => {
  return (
    <div className='BuyerProfile-page'>
      <TitleHeader name={'My Profile'} />
      <div id='main'>
        <div className='BuyerProfile-main'>
          <div className='BuyerProfile-div'>
            <Icon icon={cardAccountDetails} className='BuyerProfile-image' />
            <div className='BuyerProfile-title'>Personal Information</div>
          </div>
          <div className='BuyerProfile-sub'>
            <div className='BuyerProfile-namediv'>
              <div className='BuyerProfile-hello'> Hello, </div>
              <div className='BuyerProfile-name'> {props.name}</div>
            </div>
            <div className='BuyerProfile-details'>
              <div className='BuyerProfile-addressdiv'>
                <div className='BuyerProfile-dis'>Address</div>
                <div>{props.address}</div>
              </div>
              <div className='BuyerProfile-mobilenumberdiv'>
                <div className='BuyerProfile-dis'>Mobile Number</div>
                <div>{props.mobilenumber}</div>
              </div>
            </div>
          </div>
        </div>
        <Link to='./order'>
          <div className='BuyerProfile-div'>
            <Icon icon={shoppingIcon} className='BuyerProfile-image' />
            <div className='BuyerProfile-title'>My Orders</div>
          </div>
        </Link>
        <Link to='./signout'>
          <div className='BuyerProfile-div'>
            <Icon icon={arrowLeftCircle} className='BuyerProfile-image' />
            <div className='BuyerProfile-title'>SignOut</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

BuyerProfile.defaultProps = {
  name: 'Parth',
  address: 'Dhrol , Gujarat',
  mobilenumber: 6353812362,
};

export default BuyerProfile;

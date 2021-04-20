import React from 'react';
import './style.css';
import { Icon } from '@iconify/react';
import TitleHeader from '../../Components/Header/TitleHeader';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import cardAccountDetails from '@iconify-icons/mdi/card-account-details';
import arrowLeftCircle from '@iconify-icons/mdi/arrow-left-circle';
import shoppingIcon from '@iconify-icons/mdi/shopping';

const SellerProfile = (props) => {
  return (
    <div className='SellerProfile-page'>
      <TitleHeader name={'My Profile'} />
      <div className='SellerProfile-mainbody'>
        <div className='SellerProfile-main'>
          <div className='SellerProfile-div'>
            <Icon icon={cardAccountDetails} className='SellerProfile-image' />
            <div className='SellerProfile-title'>Personal Information</div>
          </div>
          <div className='SellerProfile-sub'>
            <div className='SellerProfile-namediv'>
              <div className='SellerProfile-hello'> Hello, </div>
              <div className='SellerProfile-name'> {props.name}</div>
            </div>
            <div className='SellerProfile-details'>
              <div className='SellerProfile-addressdiv'>
                <div className='SellerProfile-dis'>Address</div>
                <div>{props.address}</div>
              </div>
              <div className='SellerProfile-mobilenumberdiv'>
                <div className='SellerProfile-sub2'>
                  <div className='SellerProfile-dis'>Mobile Number</div>
                  <div>{props.mobilenumber}</div>
                </div>
                <div className='SellerProfile-sub2'>
                  <div className='SellerProfile-dis'>E-mail</div>
                  <div>{props.email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='SellerProfile-buttons'>
          <div className='SellerProfile-button'>
            <Link to='./myproducts'>
              <Button icon={shoppingIcon} name={'My Product'} />
            </Link>
          </div>

          <div className='SellerProfile-button'>
            <Link to='./signout'>
              <Button icon={arrowLeftCircle} name={'SignOut'} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

SellerProfile.defaultProps = {
  name: 'Parth',
  address: 'Dhrol , Gujarat',
  mobilenumber: 6353812362,
  email: 'abc@gmail.com',
};

export default SellerProfile;

import React from 'react';
import axios from 'axios';
import './style.css';
import { Link, useLocation } from 'react-router-dom';
import TitleHeader from '../../Components/Header/TitleHeader';
import Button from '../../Components/Button/Button';
import checkboxMarkedCircleOutline from '@iconify-icons/mdi/checkbox-marked-circle-outline';
import backspaceOutline from '@iconify-icons/mdi/backspace-outline';

const BuyerCheckout = (props) => {
  let location = useLocation();
  // console.log(location.state);

  const confirmpaymant = () => {
    axios
      .get('https://rentingsystem.herokuapp.com/buyer/detail', {
        headers: {
          auth_token: localStorage.getItem('auth_token'),
        },
      })
      .then((response) => {
        let returndate = new Date();
        let k = 0;
        if (location.state.formatofprice == '/day') {
          k = 1;
        } else if (location.state.formatofprice == '/3-days') {
          k = 3;
        } else if (location.state.formatofprice == '/week') {
          k = 7;
        } else if (location.state.formatofprice == '/15-days') {
          k = 15;
        } else if (location.state.formatofprice == '/month') {
          k = 30;
        } else if (location.state.formatofprice == '/6-months') {
          k = 182;
        } else if (location.state.formatofprice == '/year') {
          k = 365;
        }

        returndate.setDate(returndate.getDate() + k);

        axios
          .post('https://rentingsystem.herokuapp.com/order', {
            buyerid: response.data.buyer[0]._id,
            sellerid: location.state.seller,
            productid: location.state._id,
            address: response.data.buyer[0].address,
            totalprice: location.state.price,
            returndate: returndate,
          })
          .then((response) => {
            console.log(response);
            if (response.error) {
              alert.error(response.data.msg);
            } else {
              alert.success(response.data.msg);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <TitleHeader name={'Checkout Product'} />
      <div className='BuyerCheckout-main'>
        <div className='BuyerCheckout-title'>{location.state.title}</div>
        <hr />
        <div className='BuyerChekout-description'>
          <div className='BuyerCheckout-description-title'>{'Description'}</div>
          <div className='BuyerCheckout-description-content'>
            {location.state.description}
          </div>
        </div>
        <hr />
        <div className='BuyerCheckout-address'>
          <div className='BuyerCheckout-add'>Address</div>
          <div className='BuyerCheckout-Buyeraddress'>
            {location.state.address}
          </div>
        </div>
        <hr />
        <div className='BuyerCheckout-confirmdiv'>
          <input
            type='checkbox'
            className='BuyerCheckout-check'
            defaultChecked={false}
          />
          <span className='BuyerCheckout-confirm'>Confirm Paymant</span>
          <span className='BuyerCheckout-total'>{'Total'}</span>
          <div className='BuyerCheckoutPrice'>
            <div>{location.state.price}</div>
            <div className='BuyerCheckoutPrice-priceformat'>
              {location.state.formatofprice}
            </div>
          </div>
        </div>
        <div className='BuyerCheckout-buttons'>
          <div className='BuyerCheckout-button'>
            <Link to='/'>
              <Button icon={backspaceOutline} name={'Cancel'} />
            </Link>
          </div>
          <div className='BuyerCheckout-button BuyerCheckout-placeorder'>
            <Button
              icon={checkboxMarkedCircleOutline}
              name={'Place Order'}
              handleClick={confirmpaymant}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

BuyerCheckout.defaultProps = {
  address: 'abc , dhrol',
  title: 'Sony Camera',
  description: 'best in segment',
  price: 50000,
};

export default BuyerCheckout;

import React from 'react';
import AddressCard from '../../Components/Cardview/AddressCard';
import TitleHeader from '../../Components/Header/TitleHeader';
import './style.css';

const BuyerAddresses = () => {
    const cards = [];
    for (var i = 0; i < 20; i++) {
        cards.push(<AddressCard />);
    }
    return (
        <div className='BuyerAddresses-main'>
            <TitleHeader name={'Seller Address'} />
            <div className='BuyerAddresses-main-card'>{cards}</div>
        </div>
    );
};

export default BuyerAddresses;

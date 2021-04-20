import React from 'react';
import LiveProductCard from '../../Components/Cardview/LiveProductCard';
import TitleHeader from '../../Components/Header/TitleHeader';

const BuyerLiveProduct = () => {
  const cards = [];
  for (var i = 0; i < 5; i++) {
    cards.push(<LiveProductCard key={i} />);
  }
  return (
    <div>
      <TitleHeader name={'Live Order'} />
      <div className='BuyerMyOrder-card'>{cards}</div>
    </div>
  );
};

export default BuyerLiveProduct;

import React from 'react';
import CategoryCard from '../../Components/Cardview/CategoryCard';
import TitleHeader from '../../Components/Header/TitleHeader';
const Category = () => {
    const cards = [];
  for (var i = 0; i < 5; i++) {
    cards.push(<CategoryCard key={i} />);
  }
    return (
        <div className='BuyerWishlist-page'>
      <TitleHeader name={'Categories'} />
      <div className='BuyerWishlist-card'>{cards}</div>
    </div>
    );
};

export default Category;

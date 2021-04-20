import React from 'react';
import SearchHeader from '../../Components/Header/SearchHeader';
import ProductCard from '../../Components/Cardview/ProductCard';
import './style.css';

const Dashboard = () => {
  const cards = [];
  for (var i = 0; i < 9; i++) {
    cards.push(<ProductCard key={i} />);
  }

  return (
    <div className='Dashboard'>
      <SearchHeader />
      <div className='Main-card'>{cards}</div>
    </div>
  );
};

export default Dashboard;

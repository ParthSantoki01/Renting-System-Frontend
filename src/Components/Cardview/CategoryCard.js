import React from 'react';
import './style.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const CategoryCard = (props) => {
    const category = props.category;
    return (
        <div className='CategoryCard-mainpage'>
            <Link to={{ pathname: '/categorypage', state: category }}>
                <div className='CategoryCard-main'>
                    <Icon
                        icon={props.icon}
                        className='CategoryCard-main-icon'
                    />
                    <p className='txt'>{props.category}</p>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;

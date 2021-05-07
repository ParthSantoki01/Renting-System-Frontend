import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GeneralCardSeller from '../../Components/Cardview/GeneralCardSeller';
import TitleHeader from '../../Components/Header/TitleHeader';
import { useAlert } from 'react-alert';

const SellerAllproducts = () => {
    const alert = useAlert();

    const [Products, setData] = useState([]);

    useEffect(() => {
        const fetch = () => {
            axios
                .get('https://rentingsystem.herokuapp.com/seller/detail', {
                    headers: {
                        'auth-token': localStorage.getItem('auth_token'),
                    },
                })
                .then((response) => {
                    const data = response.data;
                    if (data.error) {
                        alert.error(data.msg);
                        return;
                    }
                    axios
                        .post(
                            'https://rentingsystem.herokuapp.com/seller/myproducts',
                            {
                                seller_id: response.data.seller[0]._id,
                            }
                        )
                        .then((response) => {
                            const data = response.data;
                            if (data.error) {
                                alert.error(data.msg);
                            } else {
                                setData(data.data);
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

        fetch();
    }, [alert]);

    return (
        <div>
            <TitleHeader name={'My Products'} />
            <div className='BuyerMyOrder-card'>
                {Products.map((product) => {
                    return (
                        <GeneralCardSeller
                            key={product._id}
                            product={product}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SellerAllproducts;

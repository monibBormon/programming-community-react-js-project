import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Leaders from './Leaders/Leaders';

const Main = () => {
    const [leaders, setLeaders] = useState([])
    const [cart, setCart] = useState([])
    // load data 
    useEffect(() => {
        fetch('./community.json')
            .then(res => res.json())
            .then(data => setLeaders(data))
    }, [])
    // handele addToIncome button
    const handleAddToIncome = (income) => {
        const newCart = [...cart, income]
        setCart(newCart)
    }
    return (
        <div>
            <div className="main-area py-3">
                <div className="container-fluid">
                    <h2 className='fw-bold fs-2 text-center'>BD Programming Community Leaders</h2>
                    <h4 className='text-center mb-4'>Total Yearly Income <span className='fw-bold'>$120 million</span>.</h4>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {
                                    leaders.map(leader => <Leaders handleAddToIncome={handleAddToIncome} key={leader.id} leader={leader}></Leaders>)
                                }
                            </div>
                        </div>
                        <div className="col-md-3">
                            <Cart cart={cart}></Cart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
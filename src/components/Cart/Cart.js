import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let name = '';
    for (const leader of cart) {
        total = total + leader.income
        name = name + leader.name + ', ';
    }
    return (
        // cart functionality added 
        <div className='cart shadow py-4 px-2'>
            <h3 className='fs-6 fw-bold'>Comminity Total Income</h3>
            <table>
                <tbody>
                    <tr>
                        <td className='fs-6'>Selected Income : </td>
                        <td>{cart.length}</td>
                    </tr>
                    <tr className='fw-bold'>
                        <td>Total Income : </td>
                        <td>${total}</td>
                    </tr>
                </tbody>
            </table>
            <p className='fw-bold'>{name}</p>
            <button className='btn btn-dark'>Get Total</button>
        </div>
    );
};

export default Cart;
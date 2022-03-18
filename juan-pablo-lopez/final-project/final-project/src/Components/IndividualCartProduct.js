import React from 'react'
import { Icon } from 'react-icons-kit'
import { plus } from 'react-icons-kit/feather/plus'
import { minus } from 'react-icons-kit/feather/minus'
import { auth, fs } from '../Config/FirebaseConfig'

export const IndividualCartProduct = ({ cartProduct, cartProductIncrease, cartProductDecrease }) => {
    const handleCartProductIncrease = () => {
        cartProductIncrease(cartProduct);
    }

    const handleCartProductDecrease = () => {
        cartProductDecrease(cartProduct);
    }

    const handleCartProductDelete = () => {
        auth.onAuthStateChanged(user => {
            if (user) {
                fs.collection('Cart ' + user.uid).doc(cartProduct.ID).delete().then(() => {
                    console.log('successfully removed');
                })
            }
        })
    }

    return (
        <main className='product'>
            <section className='product-img'>
                <img src={cartProduct.url} alt="product-img" />
            </section>
            <section className='product-text title'>{cartProduct.title}</section>
            <section className='product-text description'>{cartProduct.description}</section>
            <section className='product-text price'>$ {cartProduct.price}</section>
            <span>Quantity</span>
            <section className='product-text quantity-box'>
                <section className='action-btns minus' onClick={handleCartProductDecrease} >
                    <Icon icon={minus} size={20} />
                </section>
                <section>{cartProduct.qty}</section>
                <section className='action-btns plus' onClick={handleCartProductIncrease}>
                    <Icon icon={plus} size={20} />
                </section>
            </section>
            <section className='product-text cart-price'>$ {cartProduct.TotalProductPrice}</section>
            <section className='btn btn-danger btn-md cart-btn' onClick={handleCartProductDelete}>Remove</section>
        </main>
    )
}
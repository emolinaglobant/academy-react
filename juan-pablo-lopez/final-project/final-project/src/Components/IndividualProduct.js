import React from 'react'

export const IndividualProduct = ({ individualProduct, addToCart }) => {
    const handleAddToCart = () => {
        addToCart(individualProduct);
    }
    return (
        <main className='product'>
            <section className='product-img'>
                <img src={individualProduct.url} alt="product-img" />
            </section>
            <section className='product-text title'>{individualProduct.title}</section>
            <section className='product-text description'>{individualProduct.description}</section>
            <section className='product-text price'>$ {individualProduct.price}</section>
            <section className='btn btn-danger btn-md cart-btn' onClick={handleAddToCart}>ADD TO CART</section>
        </main>
    )
}
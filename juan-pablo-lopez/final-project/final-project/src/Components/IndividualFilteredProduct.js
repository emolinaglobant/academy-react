import React from 'react'

export const IndividualFilteredProduct = ({ individualFilteredProduct, addToCart }) => {
    const handleAddToCart = () => {
        addToCart(individualFilteredProduct);
    }

    return (
        <main className='product' id="filtered-product">
            <section className='product-img'>
                <img src={individualFilteredProduct.url} alt="product-img" />
            </section>
            <section className='product-text title'>{individualFilteredProduct.title}</section>
            <section className='product-text description'>{individualFilteredProduct.description}</section>
            <section className='product-text price'>$ {individualFilteredProduct.price}</section>
            <section className='btn btn-danger btn-md cart-btn' onClick={handleAddToCart}>ADD TO CART</section>
        </main>
    )
}
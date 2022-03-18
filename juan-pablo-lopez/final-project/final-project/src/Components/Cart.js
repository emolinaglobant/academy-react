import React, { useState, useEffect } from 'react'
import { NavBar } from './NavBar'
import { auth, fs } from '../Config/FirebaseConfig'
import { CartProducts } from './CartProducts';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const Cart = () => {
    const user = GetCurrentUser();
    const [cartProducts, setCartProducts] = useState([]);

    function GetCurrentUser() {
        const [user, setUser] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    fs.collection('users').doc(user.uid).get().then(snapshot => {
                        setUser(snapshot.data().FullName);
                    })
                }
                else {
                    setUser(null);
                }
            })
        }, [])
        return user;
    }
    
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                fs.collection('Cart ' + user.uid).onSnapshot(snapshot => {
                    const newCartProduct = snapshot.docs.map((doc) => ({
                        ID: doc.id,
                        ...doc.data(),
                    }));
                    setCartProducts(newCartProduct);
                })
            }
            else {
                console.log('user is not signed in to retrieve cart');
            }
        })
    }, [])

    const qty = cartProducts.map(cartProduct => {
        return cartProduct.qty;
    })

    const reducerOfQty = (accumulator, currentValue) => accumulator + currentValue;
    const totalQty = qty.reduce(reducerOfQty, 0);
    const price = cartProducts.map((cartProduct) => {
        return cartProduct.TotalProductPrice;
    })
    
    const reducerOfPrice = (accumulator, currentValue) => accumulator + currentValue;
    const totalPrice = price.reduce(reducerOfPrice, 0);
    let Product;

    
    const cartProductIncrease = (cartProduct) => {
        Product = cartProduct;
        Product.qty = Product.qty + 1;
        Product.TotalProductPrice = Product.qty * Product.price;
        auth.onAuthStateChanged(user => {
            if (user) {
                fs.collection('Cart ' + user.uid).doc(cartProduct.ID).update(Product).then(() => {
                    console.log('increment added');
                })
            }
            else {
                console.log('user is not logged in to increment');
            }
        })
    }

    const cartProductDecrease = (cartProduct) => {
        Product = cartProduct;
        if (Product.qty > 1) {
            Product.qty = Product.qty - 1;
            Product.TotalProductPrice = Product.qty * Product.price;
            auth.onAuthStateChanged(user => {
                if (user) {
                    fs.collection('Cart ' + user.uid).doc(cartProduct.ID).update(Product).then(() => {
                        console.log('decrement');
                    })
                }
                else {
                    console.log('user is not logged in to decrement');
                }
            })
        }
    }

    const [totalProducts, setTotalProducts] = useState(0); 
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                fs.collection('Cart ' + user.uid).onSnapshot(snapshot => {
                    const qty = snapshot.docs.length;
                    setTotalProducts(qty);
                })
            }
        })
    }, [])

    const history = useHistory();
    const handleToken = async (token) => {
        const cart = { name: 'All Products', totalPrice }
        const response = await axios.post('http://localhost:8080/checkout', {
            token,
            cart
        })
        console.log(response);
        let { status } = response.data;
        console.log(status);
        if (status === 'success') {
            history.push('/');
            toast.success('Your order has been placed successfully', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });

            const uid = auth.currentUser.uid;
            const carts = await fs.collection('Cart ' + uid).get();
            for (var snap of carts.docs) {
                fs.collection('Cart ' + uid).doc(snap.id).delete();
            }
        }
        else {
            alert('Something went wrong in checkout');
        }
    }

    return (
        <>
            <NavBar user={user} totalProducts={totalProducts} />
            <br></br>
            {cartProducts.length > 0 && (
                <main className='container-fluid'>
                    <h1 className='text-center'>Cart</h1>
                    <section className='products-box'>
                        <CartProducts cartProducts={cartProducts}
                            cartProductIncrease={cartProductIncrease}
                            cartProductDecrease={cartProductDecrease}
                        />
                    </section>
                    <section className='summary-box'>
                        <h5>Cart Summary</h5>
                        <br></br>
                        <section>
                            Total No of Products: <span>{totalQty}</span>
                        </section>
                        <section>
                            Total Price to Pay: <span>$ {totalPrice}</span>
                        </section>
                        <br></br>
                        <StripeCheckout
                            stripeKey='pk_test_51KW5K8BUzjitVX7lRP6rCHB2JwfbqvxdNUaum3liStXdsPODPbBzo9WdiovCA13vXSXddYuRLVwzGKNH8VxmsofP00aw4NQskj'
                            token={handleToken}
                            billingAddress
                            shippingAddress
                            name='All Products'
                            amount={totalPrice * 100}
                        ></StripeCheckout>
                    </section>
                </main>
            )}
            {cartProducts.length < 1 && (
                <section className='container-fluid'>No products to show</section>
            )}
        </>
    )
}
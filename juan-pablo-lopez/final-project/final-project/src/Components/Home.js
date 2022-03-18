import React, { useState, useEffect } from 'react'
import { NavBar } from './NavBar'
import { FooterPage } from './FooterPage'
import { Products } from './Products'
import { auth, fs } from '../Config/FirebaseConfig'
import { IndividualFilteredProduct } from './IndividualFilteredProduct'
import { TiArrowBack } from 'react-icons/ti'

export const Home = (props) => {

    let Product;
    const uid = GetUserUid();
    const user = GetCurrentUser();
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [active, setActive] = useState('');
    const [category, setCategory] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const addToCart = (product) => {
        if (uid !== null) {
            Product = product;
            Product['qty'] = 1;
            Product['TotalProductPrice'] = Product.qty * Product.price;
            fs.collection('Cart ' + uid).doc(product.ID).set(Product).then(() => {
                console.log('successfully added to cart');
            })
        }
        else {
            props.history.push('/login');
        }
    }

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

    const getProducts = async () => {
        const products = await fs.collection('Products').get();
        const productsArray = [];
        for (var snap of products.docs) {
            var data = snap.data();
            data.ID = snap.id;
            productsArray.push({
                ...data
            })
            if (productsArray.length === products.docs.length) {
                setProducts(productsArray);
            }
        }
    }

    function GetUserUid() {
        const [uid, setUid] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    setUid(user.uid);
                }
            })
        }, [])
        return uid;
    }

    useEffect(() => {
        getProducts();
    }, [])

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


    const [spans] = useState([
        { id: 'GraphicsCards', text: 'Graphics Cards' },
        { id: 'Keyboards', text: 'Keyboards' },
        { id: 'ComputerCases', text: 'Computer Cases' },
        { id: 'Monitors', text: 'Monitors' },
        { id: 'Motherboards', text: 'Motherboards' },
        { id: 'Laptops', text: 'Laptops' },
        { id: 'StorageUnits', text: `Storage units` },
        { id: 'RamMemory', text: `RAM Memory` },
        { id: 'FontPower', text: 'Font power' },
    ])

    const handleChange = (individualSpan) => {
        setActive(individualSpan.id);
        setCategory(individualSpan.text);
        filterFunction(individualSpan.text);
    }

    const filterFunction = (text) => {
        if (products.length > 1) {
            const filter = products.filter((product) => product.category === text);
            setFilteredProducts(filter);
        }
        else {
            console.log('no products to filter')
        }
    }

    const returntoAllProducts = () => {
        setActive('');
        setCategory('');
        setFilteredProducts([]);
    }

    return (
        <>
            <title>learn react</title>
            <NavBar user={user} totalProducts={totalProducts} />
            <br></br>
            <main className='container-fluid filter-products-main-box'>
                <section className='filter-box' id="filter">
                    <h6>Filter by category</h6>
                    {spans.map((individualSpan, index) => (
                        <span key={index} id={individualSpan.id}
                            onClick={() => handleChange(individualSpan)}
                            className={individualSpan.id === active ? active : 'deactive'}>{individualSpan.text}</span>
                    ))}
                </section>
                {filteredProducts.length > 0 && (
                    <section className='my-products' id="filtered-product">
                        <h1 className='text-center'>{category}</h1>
                        <a href="/" onClick={returntoAllProducts}><TiArrowBack size={35} />Return to All Products</a>
                        <section className='products-box'>
                            {filteredProducts.map(individualFilteredProduct => (
                                <IndividualFilteredProduct key={individualFilteredProduct.ID}
                                    individualFilteredProduct={individualFilteredProduct}
                                    addToCart={addToCart} />
                            ))}
                        </section>
                    </section>
                )}
                {filteredProducts.length < 1 && (
                    <>
                        {products.length > 0 && (
                            <section className='my-products'>
                                <h1 className='text-center'>All Products</h1>
                                <section className='products-box'>
                                    <Products products={products} addToCart={addToCart} />
                                </section>
                            </section>
                        )}
                        {products.length < 1 && (
                            <section className='my-products please-wait'>Please wait...</section>
                        )}
                    </>
                )}
            </main>
            <FooterPage></FooterPage>
        </>
    )
}
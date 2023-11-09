import { useState, useEffect } from 'react';

import { Header } from '../partials/Header.jsx';
import { ProductsGrid } from '../components/ProductsGrid.jsx'
import { Footer } from '../partials/Footer.jsx';

import productsRes from '../database/products.json'

import './Show.css';

export const Show = () => {
    
    const [products, setProducts] = useState([]);
    
    
    useEffect(()=>{
        setProducts(productsRes)
    },[])
    
    return (
        <>
            <Header></Header>
            <ProductsGrid products={products}></ProductsGrid>
            <Footer></Footer>
        </>
    )
}
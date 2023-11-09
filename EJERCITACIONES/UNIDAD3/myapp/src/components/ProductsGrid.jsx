import { ProductCard } from './ProductCard.jsx'

import './ProductsGrid.css';

export const ProductsGrid = ({products}) => {
    return (
        <div className="container text-center">
            <div className="row">
                {products.map((product) =>(
                    <div className="col">
                        <ProductCard key={product.id} product={product}></ProductCard>
                    </div>
                ))}
                                
            </div>
        </div>
    )
}
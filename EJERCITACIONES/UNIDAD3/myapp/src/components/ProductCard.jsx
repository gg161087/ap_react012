import './ProductCard.css';

export const ProductCard = ({product}) => {
    return (
        <div className="card">
            <img src="/" className="card-img-top" alt={`Imagen del producto ${product.name}`}/>
            <div className="card-body">
                <h5 className="card-title">Nombre del Producto: {product.name}</h5>
                <p className="card-text">Descripción: {product.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Precio: {product.price}</li>
                <li className="list-group-item">SKU: {product.sku}</li>
                <li className="list-group-item">Stock: {product.stock}</li>
            </ul>
        </div>

    )
}
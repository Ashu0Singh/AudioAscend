import "./Products.scss";
import Product from "./Product/Product"
import { useContext } from "react";
import { Context } from "../../utils/context";

const Products = ({ innerPage, heading, products }) => {
    const { productRef } = useContext(Context);
    return (
        <div className="product-container" ref={productRef}>
            {!innerPage && <div className="sec-heading">{heading}</div>}
            <div className="products" >
                {products?.data?.map(product => {
                    return <Product 
                                key={product.id}
                                id={product.id}
                                data={product.attributes}
                            />
                })}
            </div>
        </div>
    );
};

export default Products;

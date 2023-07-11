import Products from "../../Products/Products"

const RelatedProducts = ({products}) => {
    return (
    <div>
        <Products heading = {"Related Products"} products={products}/>
    </div>
    );
};

export default RelatedProducts;

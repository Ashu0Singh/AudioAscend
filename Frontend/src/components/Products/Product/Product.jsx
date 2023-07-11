import "./Product.scss";
import { useNavigate } from "react-router-dom";

const Product = ({data , id}) => {
    const navigate = useNavigate();

    return <div className="product-card" onClick={() => navigate(`/AudioAscend/product/${id}`)}>
        <div className="thumbnail">
            <img src = {data.imgUrl} alt={data.title} />
        </div>

        <div className="product-details">
            <span className="name">{data.title}</span>
            <span className="price">&#8377;{data.price}</span>
        </div>
    </div>;
};

export default Product;

import "./SingleProduct.scss";
import { useParams , useLocation } from "react-router-dom";

import RelatedProducts from "./RelatedProducts/RelatedProducts"
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus
} from "react-icons/fa"

import useFetch from "../../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../utils/context";

const SingleProduct = () => {
    const location = useLocation();
    const {id} = useParams();
    const [quantity,setQuantity] = useState(1);
    const { handleAddToCart , setShowCart } = useContext(Context);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }, 100)
    },[location])

    const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`)
    const value = useFetch(`/api/products?populate=*&[filters][category][id]=${data?.data?.[0]?.attributes?.category.data.id}`);
    // console.log(data);

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={data?.data?.[0]?.attributes?.imgUrl} alt="" />
                    </div>
                    <div className="right">
                        <div className="name">{data?.data?.[0]?.attributes?.title}</div>
                        <div className="price">&#8377; {data?.data?.[0]?.attributes?.price}</div>
                        <div className="desc">{data?.data?.[0]?.attributes?.desc}</div>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : prev)}>-</span>
                                <span>{quantity}</span>
                                <span onClick={() => setQuantity(prev => prev + 1)}>+</span>
                            </div>
                            <button className="add-to-cart-button" 
                                onClick={() => {
                                    handleAddToCart(data.data[0],quantity)
                                    setQuantity(1);
                                    setShowCart(true);
                                }}
                            >
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider" />

                        <div className="info-item">
                            <span className="text-bold">
                                Category : 
                                <span> {data?.data?.[0]?.attributes?.category.data.attributes.title}</span>
                            </span>
                            <span className="text-bold">
                                Socials : 
                                <span className="social-icons">
                                    <FaFacebookF size = {16}/>
                                    <FaInstagram size = {16}/>
                                    <FaTwitter size = {16}/>
                                    <FaLinkedinIn size = {16}/>
                                    <FaPinterest size = {16}/>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts products={value.data}/>
            </div>
        </div>
    );
};

export default SingleProduct;

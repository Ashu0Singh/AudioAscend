import "./Category.scss";
import { useLocation, useParams } from "react-router-dom"

import Products from "../Products/Products";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

const Category = () => {
    const {id} = useParams();

    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }, 200)
    },[location])

    const {data} = useFetch(`/api/products?populate=*&[filters][category][id]=${id}`)
    console.log(data);
    return (
    <div className="category-main-content">
        <div className="layout">
            <div className="category-title">
                {data?.data[0]?.attributes?.category?.data?.attributes?.title}
            </div>
            <Products innerPage={true} products={data}/>
        </div>
    </div>
    );
};

export default Category;

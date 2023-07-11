import "./Search.scss";
import { MdClose } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";

import useFetch from "../../../hooks/useFetch"

const Search = ({setShowSearch}) => {
    const navigate = useNavigate();
    const [query,setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
    }
    let {data} = useFetch(`/api/products?populate=*&[filters][title][$contains]=${query}`)
    if(!query.length)
        data = null;
    return (
        <div className="search-modal">
            <div className="form-fields">
                <input 
                    input="text"
                    autoFocus
                    placeholder="Search for products"
                    value={query}
                    onChange={handleChange}
                />
                <MdClose onClick={() => setShowSearch(false)} />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    {data?.data?.map(product => (
                        <div key={product.id} 
                            className="search-result-item" 
                            onClick={() => {
                                setTimeout(() => {
                                    navigate(`/AudioAscend/product/${product.id}`)
                                    setShowSearch(false)
                                },100)
                            }}
                        >
                            <div className="image-container ">
                                <img src={product.attributes.imgUrl} alt="" />
                            </div>
                            <div className="prod-details">
                                <div className="name">{product.attributes.title}</div>
                                <div className="desc">{product.attributes.desc}</div>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;

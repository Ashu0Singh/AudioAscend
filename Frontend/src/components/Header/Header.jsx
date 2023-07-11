import { useEffect, useState , useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"
import { AiOutlineHeart } from "react-icons/ai"

import Search from "./Search/Search";
import Cart from "../Cart/Cart";

import "./Header.scss";
import { Context } from "../../utils/context";


const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const {cartCount,showCart,setShowCart} = useContext(Context);

    const [isScrolled,setIsScrolled] = useState(false);
    const [showSearch , setShowSearch] = useState(false)

    const handelScroll = () => {
        const offset = window.scrollY;
        setIsScrolled( offset > 100 ? true : false );
    }

    useEffect(() => {
        window.addEventListener("scroll",handelScroll);
    }, [])

    return (
        <>
            <header className={`main-header ${isScrolled? "sticky-header" : ""}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/AudioAscend/")}>Home</li>
                        <li onClick={() => navigate("/AudioAscend/about")}>About</li>
                        <li onClick={() => navigate("/AudioAscend/categories")}>Categories</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/AudioAscend/")}>AudioAscend</div>
                    <div className="right">
                        <TbSearch onClick={() => setShowSearch(!showSearch)}/>
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={() => setShowCart(!showCart)}>
                            <CgShoppingCart />
                            {cartCount > 0 ?<span>{cartCount}</span> : ""}
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart}/>}
            {showSearch && <Search setShowSearch={setShowSearch}/>}
        </> 
    );
}

export default Header;
import { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchData } from "../../utils/api";
import { Context } from "../../utils/context";
import { useLocation } from "react-router-dom";

const Home = () => {
	const location = useLocation();
	const {
		categories,
		setCategories,
		products,
		setProducts,
		productRef,
		categoryRef,
		aboutRef,
		handleScroll,
	} = useContext(Context);

	useEffect(() => {
		getCategories();
		getProducts();
	}, []);

	useEffect(
        () => {
            console.log("Executed");
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
			if (location.pathname === "/AudioAscend/products")
				handleScroll(productRef.current);
			if (location.pathname === "/AudioAscend/about")
				handleScroll(aboutRef.current);
			if (location.pathname === "/AudioAscend/categories")
				handleScroll(categoryRef.current);
		},
		[location]
	);

	const getCategories = () => {
		fetchData("/api/categories?populate=*")
			.then((res) => setCategories(res))
			.catch((error) => console.log(error));
	};
	const getProducts = () => {
		fetchData("/api/products?populate=*")
			.then((res) => setProducts(res))
			.catch((error) => console.log(error));
	};

	return (
		<div>
			<Banner />
			<div className="main-content">
				<div className="layout">
					<Category categories={categories} />
					<Products
						heading={"Popular Products"}
						products={products}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;

import { useState, createContext, useEffect, useRef } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
	const [showCart, setShowCart] = useState(false);
	const [categories, setCategories] = useState({ data: [] });
	const [products, setProducts] = useState({ data: [] });
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartSubtotal, setCartSubtotal] = useState(0);

	const aboutRef = useRef(null);
	const productRef = useRef(null);
	const categoryRef = useRef(null);

	const handleScroll = (ref) => {
		console.log(ref);
		window.scrollTo({
			top: ref?.offsetTop,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		let count = 0;
		let subtotal = 0;
		cartItems.map((product) => {
			count += product.attributes.quantity;
			subtotal += product.attributes.quantity * product.attributes.price;
		});

		setCartCount(count);
		setCartSubtotal(subtotal);
	}, [cartItems]);

	const handleAddToCart = (product, quantity) => {
		let items = [...cartItems];
		let index = items.findIndex((p) => p.id === product.id);
		if (index !== -1) items[index].attributes.quantity += quantity;
		else {
			product.attributes.quantity = quantity;
			items = [...items, product];
		}
		setCartItems(items);
	};
	const handleRemoveFromCart = (product) => {
		let items = [...cartItems];
		items = items.filter((p) => p.id !== product.id);
		setCartItems(items);
	};
	const handleCartProductQuantity = (type, product) => {
		let items = [...cartItems];
		let index = items.findIndex((p) => p.id === product.id);
		if (type === "inc") items[index].attributes.quantity += 1;
		else {
			if (items[index].attributes.quantity === 1) {
				handleRemoveFromCart(product);
				return;
			}
			items[index].attributes.quantity -= 1;
		}
		setCartItems(items);
	};

	return (
		<Context.Provider
			value={{
				categories,
				setCategories,
				products,
				setProducts,
				cartItems,
				setCartItems,
				cartCount,
				setCartCount,
				cartSubtotal,
				showCart,
				setShowCart,
				setCartSubtotal,
				handleAddToCart,
				handleRemoveFromCart,
				handleCartProductQuantity,
				productRef,
				categoryRef,
				aboutRef,
				handleScroll
			}}>
			{children}
		</Context.Provider>
	);
};

export default AppContext;

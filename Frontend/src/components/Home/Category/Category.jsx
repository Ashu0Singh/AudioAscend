import { useContext } from "react";
import "./Category.scss";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../utils/context";

const Category = ({ categories }) => {
	const navigate = useNavigate();
	const { categoryRef } = useContext(Context);

	const elements = categories?.data?.map((item) => {
		return (
			<div
				key={item.id}
				className="category"
				onClick={() => navigate(`/AudioAscend/category/${item.id}`)}>
				<img src={item.attributes.imgUrl} alt="" />
			</div>
		);
	});
	return (
		<div className="shop-by-category" ref={categoryRef} id="Category">
			<div className="categories">
				{categories ? elements : <div></div>}
			</div>
		</div>
	);
};

export default Category;

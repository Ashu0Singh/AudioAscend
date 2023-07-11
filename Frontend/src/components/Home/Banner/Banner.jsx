import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
	const navigate = useNavigate();
	return (
		<div className="hero-banner">
			<div className="content">
				<div className="text-content">
					<h1>SALES</h1>
					<p>
						Welcome to our eCommerce platform AudioAscend, your
						go-to destination for premium sound solutions. We offer
						top-tier systems, headphones, speakers, and more for
						both pros and enthusiasts. Enjoy a smooth shopping
						experience and discover the impact of high-quality
						audio.
					</p>
					<div className="ctas">
						<div className="banner-cta">Read More</div>
						<div className="banner-cta v2" onClick={() => {navigate('/AudioAscend/products')}}>Shop Now</div>
					</div>
				</div>
				<img className="banner-Img" src={BannerImg} alt="" />
			</div>
		</div>
	);
};

export default Banner;

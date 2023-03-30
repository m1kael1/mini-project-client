import React from "react";
import Search from "../components/Product/Search";
import ProductSection from "../components/Product/ProductSection";
import FooterProduct from "../components/Product/FooterProduct";

const Product = () => {
	return (
		<div>
			<Search></Search>
			<ProductSection></ProductSection>
			<FooterProduct></FooterProduct>
		</div>
	);
};

export default Product;

import React from "react";
import Search from "../components/Product/Search";
import ProductSection from "../components/Product/ProductSection";
import Categories from "../components/Product/Categories";
import FooterProduct from "../components/Product/FooterProduct";

const Product = () => {
	return (
		<div>
			<Search></Search>
			<Categories></Categories>
			<ProductSection></ProductSection>
			<FooterProduct></FooterProduct>
		</div>
	);
};

export default Product;

import React, { useState } from "react";
import Search from "../components/Product/Search";
import ProductSection from "../components/Product/ProductSection";

const Product = () => {
	const [valueSearch, setValueSearch] = useState("");

	return (
		<>
			<Search onSearch={setValueSearch}></Search>
			<ProductSection valueSearch={valueSearch}></ProductSection>
		</>
	);
};

export default Product;

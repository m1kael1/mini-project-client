import React, { useState } from "react";
import ProductSection from "../components/Product/ProductSection";
import SearchLayout from "../layouts/SearchLayout";

const Product = ({ searchProduct }) => {
	const [valueSearch, setValueSearch] = useState(searchProduct);

	const handleSearch = (resetValue) => {
		setValueSearch(resetValue);
	};

	return (
		<>
			<SearchLayout onSearch={handleSearch} valueSearch={valueSearch}>
				<ProductSection
					resetValueSearch={() => handleSearch("")}
					valueSearch={valueSearch}
				/>
			</SearchLayout>
		</>
	);
};

export default Product;

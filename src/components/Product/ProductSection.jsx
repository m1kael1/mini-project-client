import React, { useState } from "react";
import CardProduct from "../CardProduct";
import products from "../../data/products.js";
import Categories from "./Categories";
import ProductView from "./ProductView";

const ProductSection = () => {
	const [filter, setFilter] = useState("");
	const getValue = (value) => {
		setFilter(value);
	};

	const filterData = products.filter((item) => {
		if (filter === "") {
			return true;
		} else {
			return item.mark === filter;
		}
	});

	return (
		<>
			<Categories getValue={getValue}></Categories>
			<section className="product-section w-full h-auto flex justify-center">
				<div className="container-product-section w-[1152px] flex gap-[24px] flex-wrap gap-y-[65px] mb-[84px]">
					{filterData.map((products) => (
						<CardProduct key={products.id} item={products} />
					))}
				</div>
			</section>
		</>
	);
};

export default ProductSection;

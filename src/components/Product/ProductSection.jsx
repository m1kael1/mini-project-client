import React, { useState } from "react";
import CardProduct from "../CardProduct";
import products from "../../data/products.js";
import Categories from "./Categories";

const ProductSection = () => {
	const [filter, setFilter] = useState([]);
	return (
		<>
			<Categories filter={filter} setFilter={setFilter}></Categories>
			<section className="product-section w-full h-auto flex justify-center">
				<div className="container-product-section w-[1152px] flex gap-[24px] flex-wrap gap-y-[65px] mb-[84px]">
					{products.map((products) => (
						<CardProduct key={products.id} item={products} />
					))}
				</div>
			</section>
		</>
	);
};

export default ProductSection;

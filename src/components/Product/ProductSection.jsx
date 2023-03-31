import React, { useState } from "react";
import CardProduct from "../CardProduct";
import products from "../../data/products.js";
import Categories from "./Categories";

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
			<Paginaniton />
		</>
	);
};

const Paginaniton = () => {
	return (
		<>
			<div className="w-full flex justify-center mb-[30px]">
				<div className="w-[76px] h-[21px]">Pagination</div>
			</div>
		</>
	);
};

export default ProductSection;

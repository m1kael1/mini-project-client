import React from "react";
import CardProduct from "../CardProduct";
import products from "../../data/products.js";

const ProductSection = () => {
	return (
		<section className="product-section w-full h-auto flex justify-center">
			<div className="">
				<div className="container-product-section w-[1152px] flex gap-[24px] flex-wrap gap-y-[65px] mb-[84px]">
					{products.map((products) => (
						<CardProduct key={products.id} products={products} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductSection;

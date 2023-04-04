import React, { useState } from "react";
import CardProduct from "../CardProduct";
import products from "../../data/products.js";
import Categories from "./Categories";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProductSection = () => {
	const [filter, setFilter] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(12);

	const getValue = (value) => {
		setFilter(value);
		setCurrentPage(1);
	};

	const filterData = products.filter((item) => {
		if (filter === "") {
			return true;
		} else {
			return item.mark === filter;
		}
	});
	const totalPages = Math.ceil(filterData.length / itemsPerPage);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);
	const totalItems = filterData.length;

	return (
		<>
			<Categories getValue={getValue}></Categories>
			<section className="product-section w-full h-auto flex justify-center">
				<div className="container-product-section w-[1152px] flex gap-[24px] flex-wrap gap-y-[65px] mb-[84px]">
					{currentItems.map((product) => (
						<CardProduct key={product.id} item={product} />
					))}
				</div>
			</section>
			<div className="w-full flex justify-center mb-[30px]">
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1 || totalItems === 0}
					className={`${
						currentPage === 1 || totalItems === 0
							? "opacity-50 cursor-not-allowed"
							: "opacity-100 cursor-pointer"
					} px-4 py-2 mx-1 rounded-md bg-gray-200 text-gray-700`}
				>
					<IoIosArrowBack />
				</button>
				{Array.from({ length: totalPages }, (_, index) => (
					<button
						key={index}
						onClick={() => handlePageChange(index + 1)}
						className={`${
							currentPage === index + 1
								? "bg-green-500 text-white"
								: "bg-gray-200 text-gray-700"
						} px-4 py-2 mx-1 rounded-md`}
					>
						{index + 1}
					</button>
				))}
				<button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages || totalItems === 0}
					className={`${
						currentPage === totalPages || totalItems === 0
							? "opacity-50 cursor-not-allowed"
							: "opacity-100 cursor-pointer"
					} px-4 py-2 mx-1 rounded-md bg-gray-200 text-gray-700`}
				>
					<IoIosArrowForward />
				</button>
			</div>
		</>
	);
};

export default ProductSection;

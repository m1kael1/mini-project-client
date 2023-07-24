import { useState, useEffect } from "react";
import CardProduct from "../CardProduct";
import products from "../../data/products.js";
import Categories from "./Categories";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineStop } from "react-icons/ai";

const ProductSection = ({ valueSearch, resetValueSearch }) => {
	const [filter, setFilter] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(8);
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		setSearchText(valueSearch);
		setFilter("");
	}, [valueSearch]);

	const getValue = (value) => {
		resetValueSearch(value);
		setSearchText("");
		setFilter(value);
		setCurrentPage(1);
	};

	const filterData = products.filter((item) => {
		if (filter === "" && searchText === "") {
			return true;
		} else if (filter !== "" && searchText === "") {
			return item.mark === filter;
		} else if (filter === "" && searchText !== "") {
			return item.name.toLowerCase().includes(searchText.toLowerCase());
		} else {
			return (
				item.mark === filter &&
				item.name.toLowerCase().includes(searchText.toLowerCase())
			);
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

	const maxDisplayedPages = 5;
	const startPage = Math.max(
		1,
		currentPage - Math.floor(maxDisplayedPages / 2)
	);
	const endPage = Math.min(totalPages, startPage + maxDisplayedPages - 1);

	return (
		<div>
			<Categories search={searchText} getValue={getValue}></Categories>
			<section className="product-section w-full h-auto flex justify-center items-center pr-4 pl-4">
				<div className="container-product-section max-w-[1152px] justify-center flex  gap-[24px] flex-wrap gap-y-[65px] mb-[84px]">
					{currentItems.map((product) => (
						<CardProduct key={product.id} item={product} />
					))}
				</div>
			</section>
			<div className="w-full flex justify-center mb-[30px] flex-wrap gap-2">
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1 || totalItems === 0}
					className={`${
						currentPage === 1 || totalItems === 0
							? "opacity-100 bg-gray-200 text-red-500 cursor-not-allowed hover:bg-red-500 hover:text-white"
							: "opacity-100 hover:bg-green-500 hover:text-white cursor-pointer"
					} px-4 py-2 mx-1 rounded-md bg-gray-200 text-gray-700`}
				>
					{currentPage === 1 || totalItems === 0 ? (
						<AiOutlineStop />
					) : (
						<IoIosArrowBack />
					)}
				</button>
				{Array.from({ length: endPage - startPage + 1 }, (_, index) => (
					<button
						key={startPage + index}
						onClick={() => handlePageChange(startPage + index)}
						className={`${
							currentPage === startPage + index
								? "bg-green-500 text-white"
								: "bg-gray-200 text-gray-700"
						} px-4 py-2 mx-1 rounded-md`}
					>
						{startPage + index}
					</button>
				))}
				<button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages || totalItems === 0}
					className={`${
						currentPage === totalPages || totalItems === 0
							? "opacity-100 bg-gray-200 text-red-500 cursor-not-allowed hover:bg-red-500 hover:text-white"
							: "opacity-100 hover:bg-green-500 hover:text-white cursor-pointer"
					} px-4 py-2 mx-1 rounded-md bg-gray-200 text-gray-700`}
				>
					{currentPage === totalPages || totalItems === 0 ? (
						<AiOutlineStop />
					) : (
						<IoIosArrowForward />
					)}
				</button>
			</div>
		</div>
	);
};

export default ProductSection;

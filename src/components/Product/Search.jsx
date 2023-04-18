import React from "react";
import "../../styles/Search.css";
import { AiOutlineSearch } from "react-icons/ai";
const Search = () => {
	return (
		<div className="mb-[80px] mt-[140px] flex justify-center ">
			<div className="search-box">
				<button className="green-search">
					<AiOutlineSearch className="w-[24px] h-[24px] text-white cursor-pointer" />
				</button>
				<input
					className="h-12 font-['poppins'] tracking-[0.07em] focus:outline-none pl-4"
					type="text"
					placeholder="Mencari Barang..."
				/>
			</div>
		</div>
	);
};

export default Search;

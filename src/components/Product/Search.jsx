import React from "react";
import "../../styles/Search.css";
import { AiOutlineSearch } from "react-icons/ai";
const Search = () => {
	return (
		<div>
			<div className="main-search">
				<div className="search-box">
					<input type="text" placeholder="Mencari Barang..." />
					<div className="green-search">
						<AiOutlineSearch className="w-[24px] h-[24px] text-white cursor-pointer" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;

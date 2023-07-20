import React, { useState, useEffect, useRef } from "react";
import "../../styles/Search.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ onSearch }) => {
	const [searchText, setSearchText] = useState("");
	const navigateTo = useNavigate();
	const searchRef = useRef(null);

	const handleChange = (event) => {
		const value = event.target.value;
		setSearchText(value);
	};

	const handleButtonClick = (event) => {
		event.preventDefault();
		onSearch(searchText);
		navigateTo(`/product?${encodeURIComponent(searchText)}`);
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			onSearch(searchText);
			navigateTo(`/product?${encodeURIComponent(searchText)}`);
		}
	};

	const handleClickOutside = (event) => {
		if (searchRef.current && !searchRef.current.contains(event.target)) {
			setSearchText("");
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div className="mb-[80px] pl-4 pr-4 mt-[140px] flex justify-center ">
			<div className="search-box" ref={searchRef}>
				<button onClick={handleButtonClick} className="green-search">
					<AiOutlineSearch className="w-[24px] h-[24px] text-white cursor-pointer" />
				</button>
				<input
					className="h-12 font-['poppins'] tracking-[0.07em] focus:outline-none pl-4"
					type="text"
					placeholder="Mencari Barang..."
					value={searchText}
					onChange={handleChange}
					onKeyPress={handleKeyPress}
				/>
			</div>
		</div>
	);
};

export default Search;

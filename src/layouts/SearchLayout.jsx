import React from "react";
import Search from "../components/Product/Search";

const SearchLayout = ({ children, onSearch, valueSearch }) => {
	return (
		<>
			<Search onSearch={onSearch} value={valueSearch} />
			{children}
		</>
	);
};

export default SearchLayout;

import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import category from "../../data/category";
import "../../styles/Categories.css";

const Categories = (props) => {
	const [value, setValue] = useState(null);
	const [showCategories, setShowCategories] = useState(false);
	const [openSubCategories, setOpenSubCategories] = useState({});
	const categoryRef = useRef(null);
	const markToFind = value;
	const result = findBrandAndTagByMark(markToFind);

	let search = props.search;

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, []);

	const handleClickOutside = (event) => {
		if (categoryRef.current && !categoryRef.current.contains(event.target)) {
			setShowCategories(false);
		}
	};

	function findBrandAndTagByMark(mark) {
		const foundItems = category.map((item) => {
			const nameItem = item.name.find((nameObj) => nameObj.mark === mark);
			if (nameItem) {
				return { brand: item.brand, tag: nameItem.tag };
			}
			return null;
		});

		const result = foundItems.find((item) => item !== null);
		return result || null;
	}

	const handleOpenSubCategories = (categoryBrand) => {
		const isSubCategoryOpen = openSubCategories[categoryBrand];
		if (isSubCategoryOpen) {
			closeAllSubCategories();
		} else {
			closeAllSubCategories();
			setOpenSubCategories((prevOpenSubCategories) => ({
				...prevOpenSubCategories,
				[categoryBrand]: true,
			}));
		}
	};

	const closeAllSubCategories = () => {
		setOpenSubCategories({});
	};

	return (
		<div ref={categoryRef}>
			<div className="pr-8 w-full min-[769px]:hidden flex justify-center center mb-16">
				<div className="min-[769px] max-w-[768px] w-full justify-end flex">
					<IoFilter
						className="text-[25px]"
						onClick={() => setShowCategories(true)}
					/>
				</div>
			</div>
			<section
				className={`categories-container w-full h-[227px] flex flex-col items-center pl-16 pr-16 ${
					showCategories ? "right-0" : "-right-[300px]"
				}`}
			>
				{" "}
				<div className=" min-[769px]:hidden pr-4  pt-10 w-full flex justify-center center mb-5 ">
					<div className="max-w-[768px] w-full justify-end flex ">
						<FaTimes
							size={18}
							className="text-white "
							onClick={() => setShowCategories(false)}
						/>
					</div>
				</div>
				<div className="max-w-[1152px] w-full mb-8 text-[24px] font-['poppins']">
					{search === "" ? (
						<div>
							Mencari :{" "}
							<span className="text-[#1170FF] capitalize">{result?.brand}</span>{" "}
							/ <span className="text-[#1170FF] capitalize">{result?.tag}</span>
						</div>
					) : (
						<div>
							Mencari :{" "}
							<span className="text-[#1170FF] capitalize">{search}</span>
						</div>
					)}
					<hr className="mt-[15px]" />
				</div>
				<div className="max-w-[1152px] w-full">
					<div className="menu-brand flex flex-wrap gap-x-[60px] gap-y-[30px] z-30 mb-[15px] ">
						{category.map((category, index) => {
							const categoryBrand = category.brand;
							const isSubCategoryOpen = openSubCategories[categoryBrand];

							return (
								<div key={index} className="h-btncategories z-50">
									{/* menutitle */}
									<button
										key={index}
										className="label-categories flex gap-[25px] items-center mb-[20px] font-['poppins'] font-bold tracking-[0.07em] text-[24px] uppercase"
										onClick={() => handleOpenSubCategories(categoryBrand)}
									>
										{category.brand}
										<FiChevronDown
											className={`rotate-[${
												isSubCategoryOpen ? 0 : -90
											}deg] h-icon   transition-transform duration-300`}
										/>
									</button>
									{/* submenu */}
									<div
										className={`max-w-[200px] w-full submenu-con flex flex-col gap-[10px] justify-center items-center ${
											isSubCategoryOpen
												? "opacity-100  h-[173px]  duration-300"
												: "opacity-0 bg-transparent max-[768px]:pt-0 pt-12 -z-50 h-0 invisible duration-200"
										}`}
									>
										{/* submenulist */}
										{category.name.map((subcategory) => {
											const mark = subcategory.mark;

											const setFilter = () => {
												const value = mark;
												setValue(value);
												props.getValue(value);
												closeAllSubCategories();
											};
											return (
												<button
													key={mark}
													className="max-w-[150px]  hover:bg-[#a3de83] hover:text-black w-full h-[44px] rounded-[8px] uppercase "
													onClick={() => setFilter()}
												>
													{subcategory.tag}
												</button>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Categories;

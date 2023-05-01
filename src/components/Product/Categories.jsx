import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import category from "../../data/category";
import "../../styles/Categories.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Categories = (props) => {
	const [value, setValue] = useState("");
	const [showCategories, setShowCategories] = useState(false);

	return (
		<>
			<div className=" pr-10 w-full min-[769px]:hidden flex justify-center center mb-16 ">
				<div className="max-w-[768px] w-full justify-end flex ">
					<FaBars />
				</div>
			</div>

			{/* <FaTimes /> */}
			<section className="max-[768px]:hidden w-full h-[227px] flex justify-center pl-16 pr-16 ">
				<div className="max-w-[1152px] w-full">
					<div>
						<div className="menu-brand flex flex-wrap gap-[80px] mb-[30px] ">
							{category.map((category, index) => (
								<div key={index} className="h-btncategories">
									{/* menutitle */}
									<button className="flex gap-[25px] items-center mb-[20px] font-['poppins'] font-bold tracking-[0.07em] text-[24px] uppercase">
										{category.brand}
										<FiChevronDown className="rotate-[-90deg] h-icon" />
									</button>
									{/* submenu */}
									<div className="max-w-[228px] w-full h-[172px] submenu-con flex flex-col gap-[10px] justify-center items-center ">
										{/* submenulist */}
										{category.name.map((subcategory) => {
											const mark = subcategory.mark;

											const setFilter = () => {
												const value = mark;
												setValue(value);
												props.getValue(value);
											};
											return (
												<button
													key={mark}
													className="max-w-[198px] w-full h-[44px] rounded-[8px] uppercase "
													onClick={() => setFilter()}
												>
													{subcategory.tag}
												</button>
											);
										})}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Categories;

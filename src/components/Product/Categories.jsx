import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import category from "../../data/category";
import "../../styles/Categories.css";

const Categories = (props) => {
	const [value, setValue] = useState("");

	return (
		<section className="w-full h-[227px] flex justify-center">
			<div className="w-[1152px]">
				<div>
					<div className="menu-brand flex gap-[73px] mb-[30px]">
						{category.map((category, index) => (
							<div key={index} className="h-btncategories">
								{/* menutitle */}
								<button className="flex gap-[25px] items-center mb-[20px] font-['poppins'] font-bold tracking-[0.07em] text-[24px] uppercase">
									{category.brand}
									<FiChevronDown className="rotate-[-90deg] h-icon" />
								</button>
								{/* submenu */}
								<div className="w-[228px] h-[172px] submenu-con flex flex-col gap-[10px] justify-center items-center ">
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
												className="w-[198px] h-[44px] rounded-[8px] uppercase "
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
	);
};

export default Categories;

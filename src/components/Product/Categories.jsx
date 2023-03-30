import React from "react";
import { FiChevronDown } from "react-icons/fi";
import "../../styles/Categories.css";

const Categories = ({ filter, setFilter }) => {
	const category = [
		{
			brand: "cisco",
			name: [
				{ tag: "router", mark: "cscrouter" },
				{ tag: "switch", mark: "cscswitch" },
				{ tag: "server", mark: "cscserver" },
			],
		},
		{
			brand: "huawei",
			name: [
				{ tag: "router", mark: "hwrouter" },
				{ tag: "switch", mark: "hwswitch" },
				{ tag: "server", mark: "hwserver" },
			],
		},
		{
			brand: "juniper",
			name: [
				{ tag: "router", mark: "jprouter" },
				{ tag: "switch", mark: "jpswitch" },
				{ tag: "server", mark: "jpserver" },
			],
		},
		{
			brand: "hp",
			name: [
				{ tag: "router", mark: "hprouter" },
				{ tag: "switch", mark: "hpswitch" },
				{ tag: "server", mark: "hpserver" },
			],
		},
	];
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
										const value = subcategory.mark; // test get
										const setFilter = () => {
											console.log(value);
										};
										return (
											<button
												key={value}
												className="w-[198px] h-[44px] rounded-[8px] uppercase "
												onClick={() => setFilter(value)}
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

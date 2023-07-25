import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import whatsapplogo from "../../assets/whatsapp-logo.svg";

const ProductView = ({ item }) => {
	const params = useParams();
	const testcall = item[params.id - 1];

	// untuk list desc
	const list = testcall.desc;

	return (
		<>
			{/* product view */}
			<div className="product-detail max-[1224px]:mx-8 -mt-6 mb-24 ">
				<div className="w-full flex h-auto justify-center gap-[26px] max-w-[1224px]:mx-8 ">
					<div className="img-view flex flex-col gap-[29px] h-[612px] max-[768px]:hidden ">
						<div className="max-w-[562px] w-full h-[515px] border-solid border-[2px] rounded-[15px] border-#9A9A9A flex justify-center overflow-hidden">
							<img
								className="object-contain "
								src={testcall.img}
								alt={testcall.name}
							/>
						</div>
					</div>
					<div className="flex flex-col h-auto gap-12 max-[768px]:gap-8 max-[1224px]:pt-8">
						<div>
							<h1 className="uppercase max-[768px]:text-[28px] text-[34px] font-['poppins'] tracking-[0.07em] max-[768px]:text-center max-[768px]:semibold max-[768px]:mb-2">
								{testcall.name}
							</h1>
							<hr className="min-[530px]:hidden" />
						</div>
						<div className="max-w-[420px] w-full max-h-[300px] border-solid border-[2px] rounded-[15px] border-#9A9A9A flex justify-center overflow-hidden  min-[769px]:hidden">
							<img
								className="object-contain "
								src={testcall.img}
								alt={testcall.name}
							/>
						</div>

						<div className="flex flex-col gap-[15px]">
							<span className="list-none font-['poppins'] max-[768px]:text-[28px] text-[34px] font-bold text-[#239D60] tracking-[0.07em]">
								RP. {testcall.price}
							</span>
							<li className="list-none font-['poppins'] text-[20px] tracking-[0.07em]">
								Stock: {testcall.stok}
							</li>
							<li className="list-none font-['poppins'] text-[20px] tracking-[0.07em]">
								Brand:{" "}
								<span className="capitalize font-['poppins'] text-[20px] tracking-[0.07em]">
									{testcall.brand}
								</span>
							</li>
							<li className="list-none font-['poppins'] text-[20px] tracking-[0.07em]">
								Kategori:{" "}
								<span className="capitalize font-['poppins'] tracking-[0.07em] ">
									{testcall.categories2}
								</span>
							</li>
						</div>
						<div className="w-[368px] h-[42px] flex justify-between max-[768px]:h-auto max-[768px]:flex-wrap max-[768px]:w-full gap-4 max-[768px]:mb-14">
							<a
								href="/"
								className="w-[172px] h-[42px] flex items-center border-[2px] border-solid gap-[27px] border-[#239D60] rounded-[10px] justify-center font-['poppins'] tracking-[0.07em] hover:bg-[#239D60] hover:text-white transition duration-150 ease-in-out"
							>
								CHAT VIA <img src={whatsapplogo} alt="" />
							</a>
							<Link
								to="/contact"
								className="w-[172px] h-[42px] flex items-center bg-[#1170FF] text-white rounded-[10px] justify-center tracking-[0.07em] hover:bg-[#5799FD] transition duration-150 ease-in-out"
							>
								HUBUNGI KAMI
							</Link>
						</div>
					</div>
				</div>

				{/* desc */}
				<div className="w-full h-auto flex justify-center items-center ">
					<div className="w-[1152px] border-solid border-t-[1px] border-[#212125]  gap-2 flex flex-col ">
						<h1 className="text-[24px] font-bold font-['poppins'] tracking-[0.07em] mt-[28px]">
							DESKRIPSI PRODUK
						</h1>
						<ul className="w-full h-auto p-0 ">
							{list.map((list, index) => (
								<li key={index} className="list-none font-['poppins']">
									{list}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductView;

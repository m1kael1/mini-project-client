import React from "react";
import Categories from "./Categories";
import Search from "./Search";
import { Link, useParams } from "react-router-dom";
import whatsapplogo from "../../assets/whatsapp-logo.svg";
import Footer from "../Footer";

const ProductView = ({ products }) => {
	const params = useParams();
	const testcall = products[params.id - 1];

	// untuk list desc
	const list = testcall.desc;

	return (
		<div>
			<Search />
			<Categories />
			{/* product view */}
			<div className="product-detail ">
				<div className="w-full flex h-[632px] justify-center gap-[26px]">
					<div className="img-view flex flex-col gap-[29px] h-[612px] ">
						<div className="w-[562px] h-[515px] border-solid border-[1px] rounded-[15px] border-#9A9A9A flex justify-center overflow-hidden">
							<img
								className="object-cover "
								src={testcall.img}
								alt={testcall.name}
							/>
						</div>
						{/* 3img */}
						<div className="flex gap-[24px] w-full">
							<div className="w-[74px] h-[68px] border-solid border-[1px] rounded-[15px]  flex justify-center overflow-hidden border-#9A9A9A">
								<img
									className="object-cover "
									src={testcall.img}
									alt={testcall.name}
								/>
							</div>
							<div className="w-[74px] h-[68px] border-solid border-[1px] rounded-[15px] border-#9A9A9A flex justify-center overflow-hidden">
								<img
									className="object-cover "
									src={testcall.img}
									alt={testcall.name}
								/>
							</div>
							<div className="w-[74px] h-[68px] border-solid border-[1px] rounded-[15px] border-#9A9A9A flex justify-center overflow-hidden">
								<img
									className="object-cover "
									src={testcall.img}
									alt={testcall.name}
								/>
							</div>
						</div>
						{/*  */}
					</div>
					<div className="flex flex-col h-[400px] justify-between">
						<h1 className="uppercase text-[34px] font-['poppins'] tracking-[0.07em] ">
							{testcall.name}
						</h1>
						<div className="flex flex-col gap-[15px]">
							<span className="list-none font-['poppins'] text-[34px] font-bold text-[#239D60] tracking-[0.07em]">
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
						<div className="w-[368px] h-[42px] flex justify-between">
							<a
								href="/"
								className="w-[172px] h-[42px] flex items-center border-solid border-[2px] border-solid gap-[27px] border-[#239D60] rounded-[10px] justify-center font-['poppins'] tracking-[0.07em] hover:bg-[#239D60] hover:text-white transition duration-150 ease-in-out"
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
				<div className="w-full h-[650px] flex justify-center items-center pb-[35px]">
					<div className="w-[1152px] border-solid border-t-[1px] border-[#212125]  gap-[50px] flex flex-col ">
						<h1 className="text-[24px] font-bold font-['poppins'] tracking-[0.07em] mt-[28px]">
							DESKRIPSI PRODUK
						</h1>
						<ul className="w-full h-[412px] p-0 ">
							{list.map((list) => (
								<li className="list-none font-['poppins']">{list}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProductView;

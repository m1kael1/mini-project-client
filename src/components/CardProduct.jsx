import React from "react";
import whatsapplogo from "../assets/whatsapp-logo.svg";
import { Link } from "react-router-dom";

const CardProduct = ({ products }) => {
	return (
		<div>
			{/* card-product */}
			<div className="card-product w-[270px] h-[316px] bg-white rounded-[10px] shadow-[0px_0px_15px_rgba(0,0,0,0.25)] flex-col items-center flex">
				<Link to={`/product/${products.id}`}>
					<div className="img-product-container w-[222px] h-[157px] rounded-[10px] mb-[16px] mt-[21px] mb-[16px] flex justfy-center item center flex-wrap ">
						<img
							className="object-cover w-[222px] h-[157px]"
							src={products.img}
							alt={products.name}
						/>
					</div>

					<div className="info-product-container w-[222px] list-none h-[67px] flex flex-col itmes-start leading-[105%] gap-[10px] mb-[7px]">
						<li className="info-name font-['Poppins'] text-[16px] uppercase ">
							{products.name}
						</li>
						<li className="info-stok font-['Poppins'] text-[12px]">
							Stok : {products.stok}
						</li>
						<li className="info-price font-['Poppins'] text-[12px]">
							RP. {products.price}
						</li>
					</div>
				</Link>
				<div className="tgline-product-container w-[222px] h-[32px] flex gap-[20px] items-center ">
					<span className="w-[73px] h-[23px] bg-[#239D60] rounded-[10px] flex justify-center items-center font-['Poppins'] text-[12px] capitalize">
						{products.categories1}
					</span>
					<span className="w-[73px] h-[23px] bg-[#239D60] rounded-[10px] flex justify-center items-center font-['Poppins'] text-[12px] capitalize">
						{products.categories2}
					</span>
					<a href="/" className="w-[32px] h-[32px]">
						<img src={whatsapplogo} alt="Whatsapp" />
					</a>
				</div>
			</div>
			{/* end-card */}
		</div>
	);
};

export default CardProduct;

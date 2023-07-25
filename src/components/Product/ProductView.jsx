import React from "react";
import { Link, useParams } from "react-router-dom";
import whatsapplogo from "../../assets/whatsapp-logo.svg";

const ProductView = ({ products }) => {
	const productName = useParams().name;
	const product = products.find((product) => product.name === productName);
	const listDesc = product.desc;

	return (
		<>
			{/* product view */}
			<div className="product-detail ">
				<div className="w-full flex h-auto justify-center gap-[26px]">
					<div className="img-view flex flex-col gap-[29px] h-[612px] ">
						<div className="max-w-[562px] w-full h-[515px] border-solid border-[1px] rounded-[15px] border-#9A9A9A flex justify-center overflow-hidden">
							<img
								className="object-contain "
								src={product.img}
								alt={product.name}
							/>
						</div>
					</div>
					<div className="flex flex-col h-auto gap-12">
						<h1 className="uppercase text-[34px] font-['poppins'] tracking-[0.07em] ">
							{product.name}
						</h1>
						<div className="flex flex-col gap-[15px]">
							<span className="list-none font-['poppins'] text-[34px] font-bold text-[#239D60] tracking-[0.07em]">
								RP. {product.price}
							</span>
							<li className="list-none font-['poppins'] text-[20px] tracking-[0.07em]">
								Stock: {product.stok}
							</li>
							<li className="list-none font-['poppins'] text-[20px] tracking-[0.07em]">
								Brand:{" "}
								<span className="capitalize font-['poppins'] text-[20px] tracking-[0.07em]">
									{product.brand}
								</span>
							</li>
							<li className="list-none font-['poppins'] text-[20px] tracking-[0.07em]">
								Kategori:{" "}
								<span className="capitalize font-['poppins'] tracking-[0.07em] ">
									{product.categories2}
								</span>
							</li>
						</div>
						<div className="w-[368px] h-[42px] flex justify-between">
							<Link
								to="https://wa.me/+6282145764595"
								className="w-[172px] h-[42px] flex items-center border-[2px] border-solid gap-[27px] border-[#239D60] rounded-[10px] justify-center font-['poppins'] tracking-[0.07em] hover:bg-[#239D60] hover:text-white transition duration-150 ease-in-out"
							>
								CHAT VIA <img src={whatsapplogo} alt="Chat on WhatsApp" />
							</Link>
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
							{listDesc.map((list, index) => (
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

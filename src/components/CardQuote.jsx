import React from "react";
import "../styles/CardQuote.css";

const CardQuote = ({ quotes }) => {
	return (
		<div>
			{/* card quote */}
			<div className="con-card w-[368px] h-[397px] relative flex justify-center">
				<div className="rounded-full w-[140px] h-[140px] overflow-hidden absolute z-20 flex justfy-center flex-wrap">
					<img className="object-cover" src={quotes.img} alt={quotes.name} />
				</div>
				<div className="card-quotes bg-white w-[368px] h-[368px]  rounded-[15px]  self-end flex flex-col justify-center items-center">
					<div className="absolute bottom-[20px] flex flex-col gap-[19px]">
						<p className="w-[328px] h-[147px] italic leading-[130%] text-center text-[16px] flexjustify-center items-center text-[#626262] font-['poppins']">
							"{quotes.quote}"
						</p>
						<div className="flex justify-center items-center gap-[8px] flex-col w-[328px] h-[42]px">
							<h3 className="font-bold tracking-[0.07em] font-['poppins']">
								{quotes.name}
							</h3>
							<p className="text-[12px] font-['poppins'] text-[#626262]">
								{quotes.log}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardQuote;

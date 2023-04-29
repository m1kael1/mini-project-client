import React from "react";
import "../styles/CardQuote.css";

const CardQuote = ({ quotes }) => {
	return (
		<div className="flex">
			{/* card quote */}
			<div className="con-card-quote w-[368px] h-auto max-h-[391px] relative flex justify-center">
				<div className="card-qoute-img rounded-full w-[140px] h-[140px] overflow-hidden absolute z-20 flex justfy-center	">
					<img className="object-cover" src={quotes.img} alt={quotes.name} />
				</div>
				<div className="card-quote bg-white w-full h-full min-w[300px] min-h[368px] max-w-[368px] max-h-[368px]  rounded-[15px]  self-end flex flex-col justify-center items-center relative">
					<div className="quote w-auto h-auto absolute bottom-[20px] flex flex-col gap-[19px] p-3">
						<p className="h-auto w-full italic leading-[130%] text-center text-[16px] flex justify-center items-center text-[#626262] font-['poppins']">
							"{quotes.quote}"
						</p>
						<div className="flex justify-center items-center gap-[8px] flex-col w-full h-[42]px">
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

import React from "react";
import "../../styles/Quotes.css";
import CardQuote from "../CardQuote";
import quotes from "../../data/quotes";

const Quotes = () => {
	return (
		<div>
			<section className="quotes-section w-full bg-[#239D60] h-[658px] relative flex justify-center items-center flex-col gap-[40px]">
				<h1 className=" font-bold text-[24px] tracking-[0.07em] text-[#212125]">
					APA KATA CUSTOMER KITA
				</h1>
				<div className="hide-scroll h-[450px] max-w-[1152px] w-[100%] flex relative overflow-x-scroll gap-[24px] min-w-300">
					<span className="gradien-slide w-[98px] h-full flex z-30 absolute left-0 "></span>
					<span className="gradien-slide w-[98px] h-full flex z-30 absolute -right-1 rotate-180 "></span>
					<div className="hide-scroll pl-[98px] pr-[98px] h-[450px]max-w-[1152px] w-[100%] flex relative overflow-x-scroll gap-[24px] min-w-300">
						{quotes.map((quotes) => (
							<CardQuote key={quotes.no} quotes={quotes} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Quotes;

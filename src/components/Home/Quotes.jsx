import React from "react";
import "../../styles/Quotes.css";
import quotes1 from "../../assets/Quotes/quotes1.svg";
import quotes2 from "../../assets/Quotes/quotes2.svg";
import quotes3 from "../../assets/Quotes/quotes3.svg";
import quotes4 from "../../assets/Quotes/quotes4.svg";
import quotes5 from "../../assets/Quotes/quotes5.svg";

const Quotes = () => {
	return (
		<div>
			<section className="quotes-section w-full bg-[#239D60] h-[658px] relative flex justify-center items-center flex-col gap-[40px]">
				<h1 className=" font-bold text-2xl tracking-[0.07em] text-[#212125]">
					APA KATA CUSTOMER KITA
				</h1>

				<div className="hide-scroll pl[98px] h-[450px] w-[1152px] flex relative overflow-x-scroll gap-[24px] m-w-300">
					<span className="gradien-slide w-[98px] h-[397px] flex z-30 absolute left-0 "></span>
					<span className="gradien-slide w-[98px] h-[397px] flex z-30 absolute -right-1 rotate-180 "></span>
					<div className="hide-scroll pl-[98px] pr-[98px] h-[450px] w-[1152px] flex relative overflow-x-scroll gap-[24px] m-w-300">
						<div className="con-card w-[368px] h-[397px] relative flex justify-center">
							<div className="rounded-full w-[140px] h-[140px] overflow-hidden absolute z-20">
								<img src={quotes1} alt="" />
							</div>
							<div className="card-quotes bg-white w-[368px] h-[368px]  rounded-[15px]  self-end flex flex-col justify-center items-center">
								<div className="absolute bottom-[20px] flex flex-col gap-[19px]">
									<p className="w-[328px] h-[147px] italic leading-[130%] flex text-center text-[16px] items-center text-[#626262] font-['poppins']">
										“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Nunc vitae porttitor neque. Pellentesque commodo non arcu
										pulvinar tincidunt. Cras nec nisi eu orci tempor maximus eu
										a justo. Ut elementum mi sed tristique bibendum. Sed in
										tristique diam.”
									</p>
									<div className="flex justify-center items-center gap-[8px] flex-col w-[328px] h-[42]px">
										<h3 className="font-bold tracking-[0.07em] font-['poppins']">
											Name Lastname
										</h3>
										<p className="text-[12px] font-['poppins']">
											Position @ Company
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="con-card w-[368px] h-[397px] relative flex justify-center ">
							<div className="rounded-full w-[140px] h-[140px] overflow-hidden absolute z-20">
								<img src={quotes2} alt="" />
							</div>
							<div className="card-quotes bg-white w-[368px] h-[368px]  rounded-[15px] self-end flex flex-col justify-center items-center ">
								<div className="absolute bottom-[20px] flex flex-col gap-[19px]">
									<p className="w-[328px] h-[147px] italic leading-[130%] flex text-center text-[16px] items-center text-[#626262] font-['poppins']">
										“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Nunc vitae porttitor neque. Pellentesque commodo non arcu
										pulvinar tincidunt. Cras nec nisi eu orci tempor maximus eu
										a justo. Ut elementum mi sed tristique bibendum. Sed in
										tristique diam.”
									</p>
									<div className="flex justify-center items-center gap-[8px] flex-col w-[328px] h-[42]px">
										<h3 className="font-bold tracking-[0.07em] font-['poppins']">
											Name Lastname
										</h3>
										<p className="text-[12px] font-['poppins']">
											Position @ Company
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="con-card w-[368px] h-[397px] relative flex justify-center ">
							<div className="rounded-full w-[140px] h-[140px] overflow-hidden absolute z-20">
								<img src={quotes3} alt="" />
							</div>
							<div className="card-quotes bg-white w-[368px] h-[368px]  rounded-[15px] self-end flex flex-col justify-center items-center ">
								<div className="absolute bottom-[20px] flex flex-col gap-[19px]">
									<p className="w-[328px] h-[147px] italic leading-[130%] flex text-center text-[16px] items-center text-[#626262] font-['poppins']">
										“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Nunc vitae porttitor neque. Pellentesque commodo non arcu
										pulvinar tincidunt. Cras nec nisi eu orci tempor maximus eu
										a justo. Ut elementum mi sed tristique bibendum. Sed in
										tristique diam.”
									</p>
									<div className="flex justify-center items-center gap-[8px] flex-col w-[328px] h-[42]px">
										<h3 className="font-bold tracking-[0.07em] font-['poppins']">
											Name Lastname
										</h3>
										<p className="text-[12px] font-['poppins']">
											Position @ Company
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="con-card w-[368px] h-[397px] relative flex justify-center ">
							<div className="rounded-full w-[140px] h-[140px] overflow-hidden absolute z-20">
								<img src={quotes4} alt="" />
							</div>
							<div className="card-quotes bg-white w-[368px] h-[368px]  rounded-[15px] self-end flex flex-col justify-center items-center ">
								<div className="absolute bottom-[20px] flex flex-col gap-[19px]">
									<p className="w-[328px] h-[147px] italic leading-[130%] flex text-center text-[16px] items-center text-[#626262] font-['poppins']">
										“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Nunc vitae porttitor neque. Pellentesque commodo non arcu
										pulvinar tincidunt. Cras nec nisi eu orci tempor maximus eu
										a justo. Ut elementum mi sed tristique bibendum. Sed in
										tristique diam.”
									</p>
									<div className="flex justify-center items-center gap-[8px] flex-col w-[328px] h-[42]px">
										<h3 className="font-bold tracking-[0.07em] font-['poppins']">
											Name Lastname
										</h3>
										<p className="text-[12px] font-['poppins']">
											Position @ Company
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="con-card w-[368px] h-[397px] relative flex justify-center ">
							<div className="rounded-full w-[140px] h-[140px] overflow-hidden absolute z-20">
								<img src={quotes5} alt="" />
							</div>
							<div className="card-quotes bg-white w-[368px] h-[368px]  rounded-[15px] self-end flex flex-col justify-center items-center ">
								<div className="absolute bottom-[20px] flex flex-col gap-[19px]">
									<p className="w-[328px] h-[147px] italic leading-[130%] flex text-center text-[16px] items-center text-[#626262] font-['poppins']">
										“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Nunc vitae porttitor neque. Pellentesque commodo non arcu
										pulvinar tincidunt. Cras nec nisi eu orci tempor maximus eu
										a justo. Ut elementum mi sed tristique bibendum. Sed in
										tristique diam.”
									</p>
									<div className="flex justify-center items-center gap-[8px] flex-col w-[328px] h-[42]px">
										<h3 className="font-bold tracking-[0.07em] font-['poppins']">
											Name Lastname
										</h3>
										<p className="text-[12px] font-['poppins']">
											Position @ Company
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Quotes;

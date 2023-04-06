import React, { useState, useEffect } from "react";
import "../../styles/FormField.css";
import { FiChevronDown } from "react-icons/fi";

const FormField = () => {
	const [selectedCountry, setSelectedCountry] = useState("+62");
	const [inputText, setInputText] = useState("");
	const [characterCount, setCharacterCount] = useState(0);

	const country = [
		{ name: "ID", code: "+62" },
		{ name: "SG", code: "+65" },
		{ name: "MY", code: "+60" },
	];

	useEffect(() => {
		setCharacterCount(inputText.length);
	}, [inputText]);

	const handleCountryChange = (e) => {
		setSelectedCountry(e);
		console.log(e);
	};

	return (
		<>
			<section className="w-full flex justify-center pb-52 ">
				<form className="mt-28 w-[564px]">
					<div className="flex flex-col gap-14">
						<div className="flex flex-col gap-3">
							<label
								htmlFor=""
								className="font-['poppins'] text-xl tracking-[0.07em]"
							>
								Nama Lengkap
							</label>
							<input
								type="text"
								className="h-12 font-['poppins'] tracking-[0.07em] focus:outline-none rounded-lg pl-6 drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]"
								placeholder="Jhon Doe"
							/>
						</div>
						<div className="flex flex-col gap-3">
							<label
								htmlFor=""
								className="font-['poppins'] text-xl tracking-[0.07em]"
							>
								Email
							</label>
							<input
								type="text"
								className="h-12 font-['poppins'] tracking-[0.07em] focus:outline-none rounded-lg pl-6 drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]"
								placeholder="jhon.doe@example"
							/>
						</div>
						<div className="flex flex-col gap-3">
							<label
								htmlFor=""
								className="font-['poppins'] text-xl tracking-[0.07em]"
							>
								Nomor Handphone
							</label>
							<div className="flex gap-6">
								<div className="cont-country w-32 relative z-[9999]">
									<div className="select-country relative">
										<FiChevronDown className="icon absolute z-[9999] top-[16px] right-[10px]" />
										<div
											id="country"
											name="country"
											className="h-12 w-full flex items-center justify-center bg-white font-['poppins'] tracking-[0.07em] focus:outline-none rounded-lg text-center drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]"
											value={selectedCountry}
										>
											{selectedCountry}
										</div>
									</div>
									<ul className="absolute  w-32 z-[999] list-country overflow-hidden drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]  rounded-lg">
										{country.map((item) => (
											<li
												key={item.code}
												className="w-full flex items-center justify-center h-8 bg-[#f8f8f8] hover:bg-gray-400  hover:text-white  font-['poppins'] tracking-[0.07em]"
												value={item.name}
												onClick={() => handleCountryChange(item.code)}
											>
												{item.code}
											</li>
										))}
									</ul>
								</div>
								<input
									type="tel"
									id="phone-number"
									name="phone-number"
									className="h-12 font-['poppins'] tracking-[0.07em] focus:outline-none rounded-lg pl-6 drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]"
									placeholder="082XXXX"
								/>
							</div>
						</div>
						<div className="flex flex-col gap-3 relative">
							<label
								htmlFor=""
								className="font-['poppins'] text-xl tracking-[0.07em]"
							>
								Pesan
							</label>
							<textarea
								value={inputText}
								onChange={(event) => setInputText(event.target.value)}
								name="Pesan"
								id=""
								cols="2"
								rows="2"
								className="h-56 font-['poppins'] tracking-[0.07em] focus:outline-none rounded-lg pl-6 drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] placeholder:absolute pt-4 pr-4 resize-none "
								placeholder="Masukkan Pesan anda"
								maxLength={150}
							></textarea>
							<span className="absolute right-0 -bottom-10 font-['poppins'] tracking-[0.07em] text-[#8C8C8C]">
								{characterCount}/150
							</span>
						</div>
					</div>
					<div>
						<button className="mt-24 font-['poppins'] tracking-[0.07em] text-xl bg-[#A3DE83] w-full  h-16 rounded-lg drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]">
							Kirimkan Pesan Anda
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default FormField;

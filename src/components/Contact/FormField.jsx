import React, { useState, useEffect } from "react";
import "../../styles/FormField.css";
import { FiChevronDown } from "react-icons/fi";

const FormField = () => {
	const [selectedCountry, setSelectedCountry] = useState("+62");
	const [selectedCountryName, setSelectedCountryName] = useState("ID");
	const [characterCount, setCharacterCount] = useState(0);
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [phoneNumber, setPhoneNumber] = useState(null);
	const [massage, setMassage] = useState("");

	function handleContact(e) {
		if (name === null) {
			alert("Masukkan Nama Anda");
		} else if (email === null) {
			alert("Masukkan Email Anda");
		} else if (massage === "") {
			alert("Masukkan Pesan Anda");
		} else {
			e.preventDefault();
			console.log(`name : ${name}`);
			console.log(`email : ${email}`);
			console.log(`phoneNumber : ${phoneNumber}`);
			console.log(`country : ${selectedCountryName}`);
			console.log(`massage : ${massage}`);
		}
	}

	const country = [
		{ name: "ID", code: "+62" },
		{ name: "SG", code: "+65" },
		{ name: "MY", code: "+60" },
	];

	useEffect(() => {
		setCharacterCount(massage.length);
	}, [massage]);

	const handleCountryChange = (e, f) => {
		setSelectedCountry(e);
		setSelectedCountryName(f);
	};

	return (
		<>
			<section className="w-full flex justify-center pb-52 pl-4 pr-4">
				<form className="mt-28 max-w-[564px] w-full">
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
								id="name"
								onChange={(e) => setName(e.target.value)}
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
								id="email"
								onChange={(e) => setEmail(e.target.value)}
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
								<div className="cont-country w-32  relative z-[9999]">
									<div className="select-country relative">
										<FiChevronDown className="icon absolute z-[9999] top-[16px] right-[10px]" />
										<div
											id="country"
											name="country"
											className="h-12 min-w-[92px] w-full flex items-center justify-center bg-white font-['poppins'] tracking-[0.07em] focus:outline-none rounded-lg text-center drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]"
											value={selectedCountry}
										>
											{selectedCountry}
										</div>
									</div>
									<ul className="absolute  max-w-32 w-full z-[999] list-country overflow-hidden drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]  rounded-lg">
										{country.map((item) => (
											<li
												key={item.code}
												className="w-full flex items-center justify-center h-8 bg-[#f8f8f8] hover:bg-gray-400  hover:text-white  font-['poppins'] tracking-[0.07em]"
												value={item.name}
												id="country"
												onClick={(e) =>
													handleCountryChange(item.code, item.name)
												}
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
									onChange={(e) => setPhoneNumber(e.target.value)}
									className="h-12 max-w-[225px] w-full font-['poppins'] tracking-[0.07em] focus:outline-none rounded-lg pl-6 drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]"
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
								value={massage}
								id="massage"
								onChange={(event) => setMassage(event.target.value)}
								name="massage"
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
						<div
							onClick={handleContact}
							className="mt-24 font-['poppins']  text-center tracking-[0.07em] text-xl bg-[#A3DE83] w-full  py-4 rounded-lg drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] cursor-pointer"
						>
							Kirimkan Pesan Anda
						</div>
					</div>
				</form>
			</section>
		</>
	);
};

export default FormField;

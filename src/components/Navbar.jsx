import React from "react";
import ellipse from "../assets/ellipse.svg";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
	return (
		<div>
			<section className="min-w-300 bg-green-500 w-full top-0 fixed left-0 h-[72px] bg-opacity-60 flex items-center justify-between z-50">
				<div className="h-full ml-10 flex justify-center items-center">
					<img className="p-1" src={logo} alt="" />
					<p className="text-xl font-bold text-white">LOGO</p>
				</div>
				<div className=" ml-10 mr-10 w-96 h-full items-center flex justify-between">
					<li className="list-none">
						<NavLink
							to="/"
							className="link-menu h-12 flex items-center justify-center font-normal text-white text-xs"
						>
							LAYANAN
						</NavLink>
					</li>
					<li className="list-none">
						<NavLink
							to="/product"
							className="link-menu h-12 flex items-center justify-center font-normal text-white text-xs"
						>
							PRODUK
						</NavLink>
					</li>
					<li className="list-none">
						<NavLink
							to="/contact"
							className="link-menu h-12 flex items-center justify-center font-normal text-white text-xs"
						>
							HUBUNGI KAMI
						</NavLink>
					</li>
				</div>
				<div className="mr-10 h-full flex items-center">
					<img
						className="m-auto w-10 h-10 min-w-10 min-h-10 min-w-40 min-h-40"
						src={ellipse}
						alt=""
					/>
				</div>
			</section>
		</div>
	);
};

export default Navbar;

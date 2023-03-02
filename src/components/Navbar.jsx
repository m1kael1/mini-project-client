import React from "react";
import ellipse from "../assets/ellipse.svg";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
	return (
		<div className="container-nav w-full min-w-300 h-[72px] bg-green-500 top-0 fixed left-0 flex items-center flex z-50 bg-opacity-60 justify-center">
			<section className="min-w-300 w-[1385px] h-[62px] flex items-center justify-between">
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

import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [showNav, setShowNav] = useState(false);
	const navRef = useRef(null);

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, []);

	const handleClickOutside = (event) => {
		if (navRef.current && !navRef.current.contains(event.target)) {
			setShowNav(false);
		}
	};
	return (
		<nav
			ref={navRef}
			className="bg-color container-nav w-full min-w-300 h-[72px] top-0 fixed left-0 items-center flex z-[99999] justify-center"
		>
			<section className="min-w-300 w-[1385px] h-[62px] flex items-center justify-between">
				<NavLink
					to="/"
					className="logo h-full ml-10 flex justify-center items-center"
				>
					<img className="p-1" src={logo} alt="" />
					<p className="text-xl font-bold text-white">LOGO</p>
				</NavLink>
				<div className="nav-icon" onClick={() => setShowNav(true)}>
					<FaBars className="mr-8 text-white" />
				</div>
				<ul
					className={`list-nav ml-10 mr-10 w-96 h-full items-center flex justify-between ${
						showNav ? "right-0" : "right-[-300px]"
					}`}
				>
					<div
						className="nav-icon h-[72px] flex items-center w-full justify-end "
						onClick={() => setShowNav(false)}
					>
						<FaTimes className=" text-white mr-8	" />
					</div>
					<li className=" list-none">
						<NavLink
							to="/layanan"
							className="link-menu h-12 flex items-center justify-center font-normal text-white text-xs"
						>
							LAYANAN
						</NavLink>
					</li>
					<li className=" list-none">
						<NavLink
							to="/product"
							className="link-menu h-12 flex items-center justify-center font-normal text-white text-xs"
						>
							PRODUK
						</NavLink>
					</li>
					<li className=" list-none">
						<NavLink
							to="/contact"
							className="link-menu h-12 flex items-center justify-center font-normal text-white text-xs"
						>
							HUBUNGI KAMI
						</NavLink>
					</li>
				</ul>
			</section>
		</nav>
	);
};

export default Navbar;

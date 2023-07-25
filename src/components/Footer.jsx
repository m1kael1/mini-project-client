import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo.svg";
import whatsapp from "../assets/whatsapp.svg";
import tokopedia from "../assets/tokopedia.svg";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
	const scrollto = (a, b) => {
		window.scrollTo(a, b);
	};
	return (
		<div className="Footer">
			<div className="Footer-Container">
				<div className="row-1">
					<NavLink onClick={() => scrollto(0, 0)} to="/" className="logo2">
						<img className="logo" src={logo} alt="" />
						<p className="text-xl font-bold text-white">LOGO</p>
					</NavLink>
					<p className="textfooter">
						Copyright reserved 2023 Link Data Technology
					</p>
					<div className="social-media-links">
						<div className="tokopedia">
							<Link
								className="link-footer"
								to="https://www.tokopedia.com/"
								target="_blank"
							>
								<img className="tokped" src={tokopedia} alt="" />
							</Link>
						</div>
						<div className="whatsapp">
							<Link className="link-footer" to="https://wa.me/+6282145764595">
								<img className="wa" src={whatsapp} alt="" />
							</Link>
						</div>
					</div>
				</div>
				<span className="line"></span>
				<div className="row-2">
					<div className="column-1">
						<Link className="link-footer" to="https://wa.me/+6282145764595">
							Whatsapp
						</Link>
						<Link className="link-footer" to="https://tokopedia.com">
							Tokopedia
						</Link>
						<Link className="link-footer" to="https://gmail.com">
							Gmail
						</Link>
					</div>
					<div className="column-2">
						<NavLink
							onClick={() => scrollto(0, 0)}
							className="link-footer"
							to="/about"
						>
							Tentang Kami
						</NavLink>
						<Link
							onClick={() => scrollto(0, 0)}
							className="link-footer"
							to="/contact"
						>
							Contact
						</Link>
						<NavLink
							onClick={() => scrollto(0, 0)}
							className="link-footer"
							to="/product"
						>
							Product
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

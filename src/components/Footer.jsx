import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo.svg";
import whatsapp from "../assets/whatsapp.svg";
import tokopedia from "../assets/tokopedia.svg";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<div className="Footer">
			<div className="Footer-Container">
				<div className="row-1">
					<NavLink to="/" className="logo2">
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
							<Link className="link-footer" to="">
								<img className="wa" src={whatsapp} alt="" />
							</Link>
						</div>
					</div>
				</div>
				<span className="line"></span>
				<div className="row-2">
					<div className="column-1">
						<Link className="link-footer" to="">
							Whatsapp
						</Link>
						<Link className="link-footer" to="">
							Tokopedia
						</Link>
						<Link className="link-footer" to="">
							Gmail
						</Link>
					</div>
					<div className="column-2">
						<NavLink className="link-footer" to="/about">
							Tentang Kami
						</NavLink>
						<Link className="link-footer" to="/contact">
							Contact
						</Link>
						<a className="link-footer" href="/product">
							Product
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

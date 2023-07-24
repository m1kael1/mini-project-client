import React from "react";
import { Link } from "react-router-dom";
import cisco from "../../assets/Brands/cisco.svg";
import hp from "../../assets/Brands/hp.svg";
import huawei from "../../assets/Brands/huawei.svg";
import juniper from "../../assets/Brands/juniper.svg";
import "../../styles/Brand.css";

const Brand = () => {
	return (
		<div className="container-brands w-full min-w-300 relative  flex items-center justify-center">
			<div className="sec-con-brand flex justify-center gap-[56px] min-w-300 w-screen h-[100px] items-center">
				<div className="brand-logo cisco w-[184px] h-auto">
					<Link to="https://www.cisco.com/" target="_blank">
						<img src={cisco} alt="cisco" />
					</Link>
				</div>
				<div className="brand-logo huawei w-[100px] h-auto">
					<Link to="https://www.huawei.com/" target="_blank">
						<img src={huawei} alt="huawei" />
					</Link>
				</div>
				<div className="brand-logo hp w-[100px] h-auto">
					<Link to="https://www.hp.com/" target="_blank">
						<img src={hp} alt="hp" />
					</Link>
				</div>
				<div className="brand-logo juniper w-[369px] h-auto">
					<Link to="https://www.juniper.netl,l,/" target="_blank">
						<img src={juniper} alt="juniper" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Brand;

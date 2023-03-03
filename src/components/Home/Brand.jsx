import React from "react";
import cisco from "../../assets/Brands/cisco.svg";
import hp from "../../assets/Brands/hp.svg";
import huawei from "../../assets/Brands/huawei.svg";
import juniper from "../../assets/Brands/juniper.svg";
import "../../styles/Brand.css";

const Brand = () => {
	return (
		<div className="container-brands w-full min-w-300 h-[315px] flex items-center justify-center">
			<div className="flex justify-center gap-[56px] min-w-300 w-[910px] h-[100px] items-center">
				<div className="cisco w-[184px] h-[100px]">
					<a href="https://www.cisco.com/">
						<img src={cisco} alt="cisco" />
					</a>
				</div>
				<div className="huawei w-[100px] h-[100px]">
					<a href="https://www.huawei.com/">
						<img src={huawei} alt="huawei" />
					</a>
				</div>
				<div className="hp w-[100px] h-[100px]">
					<a href="https://www.hp.com/">
						<img src={hp} alt="hp" />
					</a>
				</div>
				<div className="juniper w-[369px] h-[100px]">
					<a href="https://www.juniper.net/">
						<img src={juniper} alt="juniper" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Brand;

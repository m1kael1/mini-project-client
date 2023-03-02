import React from "react";
import cisco from "../../assets/Brands/cisco.svg";
import hp from "../../assets/Brands/hp.svg";
import huawei from "../../assets/Brands/huawei.svg";
import juniper from "../../assets/Brands/juniper.svg";

const Brand = () => {
	return (
		<div className="container-brands w-full min-w-300 h-[315px] flex items-center justify-center">
			<div className="flex justify-center gap-[56px] min-w-300 w-[910px] h-[100px] items-center">
				<div>
					<img src={cisco} alt="" />
				</div>
				<div>
					<img src={huawei} alt="" />
				</div>
				<div>
					<img src={hp} alt="" />
				</div>
				<div>
					<img src={juniper} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Brand;

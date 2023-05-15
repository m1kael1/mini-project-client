import React from "react";
import "../../styles/Counter.css";

const Counter = () => {
	return (
		<div className="counter">
			<div className="counter-container">
				<div className="counter-content">
					<h1>300+</h1>
					<h2>produk terjual</h2>
				</div>
				<div className="counter-content">
					<h1>200+</h1>
					<h2>pengiriman produk</h2>
				</div>
				<div className="counter-content">
					<h1>50+</h1>
					<h2>klien tetap</h2>
				</div>
			</div>
		</div>
	);
};

export default Counter;

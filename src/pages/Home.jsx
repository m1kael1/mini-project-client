import React from "react";
import This from "../components/Home/This";
import Slider from "../components/Home/Slider";
import Brand from "../components/Home/Brand";
import Service from "../components/Home/Service";
import Counter from "../components/Home/Counter";
import Quotes from "../components/Home/Quotes";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div>
			<Slider></Slider>
			<Brand></Brand>
			<This></This>
			<Counter></Counter>
			<Quotes></Quotes>
			{/* <Footer></Footer> */}
		</div>
	);
};

export default Home;

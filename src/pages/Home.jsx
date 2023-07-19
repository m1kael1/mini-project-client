import React from "react";
import This from "../components/Home/This";
import Slider from "../components/Home/Slider";
import Brand from "../components/Home/Brand";
import Counter from "../components/Home/Counter";
import Quotes from "../components/Home/Quotes";

const Home = () => {
    return (
        <>
            <Slider />
            <Brand />
            <This />
            <Counter />
            <Quotes />
        </>
    );
};

export default Home;

import React, { useEffect, useState } from "react";
import "../../styles/Counter.css";
import { useInView } from "react-intersection-observer";

const Counter = () => {
    const [productCounter, setProductCounter] = useState(240);
    const [deliveriesCounter, setDeliveriesCounter] = useState(140);
    const [clientCounter, setClientCounter] = useState(0);
    const { ref, inView } = useInView();

    useEffect(() => {
        const targetProductCounter = 300;
        const targetDeliveriesCounter = 200;
        const targetClientCounter = 50;

        if (inView) {
            if (
                productCounter !== targetProductCounter ||
                deliveriesCounter !== targetDeliveriesCounter ||
                clientCounter !== targetClientCounter
            ) {
                const interval = setInterval(() => {
                    setProductCounter((prevCount) =>
                        prevCount < targetProductCounter
                            ? prevCount + 1
                            : prevCount
                    );
                    setDeliveriesCounter((prevCount) =>
                        prevCount < targetDeliveriesCounter
                            ? prevCount + 1
                            : prevCount
                    );
                    setClientCounter((prevCount) =>
                        prevCount < targetClientCounter
                            ? prevCount + 1
                            : prevCount
                    );
                }, 30);

                return () => clearInterval(interval);
            }
        }
    }, [inView, productCounter, deliveriesCounter, clientCounter]);

    return (
        <div ref={ref} className='counter'>
            <div className='counter-container'>
                <div className='counter-content'>
                    <h1>{productCounter}+</h1>
                    <h2>produk terjual</h2>
                </div>
                <div className='counter-content'>
                    <h1>{deliveriesCounter}+</h1>
                    <h2>pengiriman produk</h2>
                </div>
                <div className='counter-content'>
                    <h1>{clientCounter}+</h1>
                    <h2>klien tetap</h2>
                </div>
            </div>
        </div>
    );
};

export default Counter;

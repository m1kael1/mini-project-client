import React from "react";
import logo from "../assets/about_image.jpg";

const About = () => {
    return (
        <div className='container mb-[52rem] mt-32 flex justify-center text-justify h-screen md:mb-[40rem] lg:mb-[32rem] pb-80'>
            <div className='md:w-1/2 md:pl-8'>
                <h1 className='text-4xl font-bold mb-4 text-center'>
                    About Our Technology Company
                </h1>
                <p className='text-gray-700 mb-4'>
                    Welcome to our technology company! We are a team of
                    dedicated and passionate professionals working together to
                    create cutting-edge solutions that drive innovation and
                    transform businesses. Our mission is to make technology
                    accessible and beneficial for everyone.
                </p>
                <img className='rounded-lg' src={logo} alt='' />
                <p className='text-gray-700 mb-4 mt-10'>
                    At our core, we believe that technology has the power to
                    change the world positively. From developing user-friendly
                    applications to implementing robust infrastructure, we
                    strive to deliver the best products and services that cater
                    to the needs of our clients.
                </p>
                <p className='text-gray-700 mb-4'>
                    Innovation is at the heart of everything we do. We are
                    continuously exploring new technologies, trends, and
                    methodologies to ensure that we stay ahead in the fast-paced
                    world of tech. Our team of experts collaborates seamlessly
                    to solve complex challenges and achieve remarkable results.
                </p>
                <p className='text-gray-700 mb-4'>
                    Customer satisfaction is our top priority. We work closely
                    with our clients, listen to their requirements, and offer
                    personalized solutions that exceed their expectations. Our
                    commitment to quality, timely delivery, and unmatched
                    support sets us apart from the rest.
                </p>
                <p className='text-gray-700 mb-4'>
                    Thank you for considering our technology company. We are
                    excited about the future and look forward to partnering with
                    you on your next project. Let's build something incredible
                    together!
                </p>
            </div>
        </div>
    );
};

export default About;

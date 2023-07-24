import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-gray-800'>404</h1>
                <p className='mt-4 text-xl'>Oops! Page not found.</p>
                <p className='mt-2'>
                    The page you are looking for might have been removed or
                    relocated.
                </p>
                <Link
                    to={"/"}
                    className='mt-4 inline-block bg-[#239D5F] hover:bg-[#1b7f4d] transition-all duration-300 text-white px-4 py-2 rounded-lg'
                >
                    Go back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;

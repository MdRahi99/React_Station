import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <img src="" alt="" />
            <p className='bg-cyan-600 text-white p-20 my-20 w-1/2 text-5xl text-center mx-auto'>404 No data found...</p>
            <Link className='w-64 mx-auto bg-cyan-600 hover:bg-cyan-500 text-white text-xl shadow-2xl shadow-cyan-600 font-serif rounded flex items-center justify-center p-4' to="/">Back to Home</Link>
        </div>
    );
};

export default Error;
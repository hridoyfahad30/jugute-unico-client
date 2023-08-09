/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const NewsLetter = () => {
    return (
        <div className='lg:flex justify-center items-center gap-12 space-y-6 my-12 bg-green-100 py-12 px-4'>
            <div className='lg:w-2/2'>
                <h2 className='text-4xl font-semibold'>Newsletter</h2>
                <p className='text-lg'>Remember to stay in touch to get Season's offers and discounts!</p>
            </div>
            <div className='flex gap-2'>
                <input type="email" name="" placeholder='Enter your email' className='bg-green-200 p-4 rounded-2xl outline-green-500 w-96' />
                <button className='flex items-center gap-2 text-xl bg-green-300 px-6 rounded-2xl hover:bg-green-500 duration-300'>Submit <FaPaperPlane /> </button>
            </div>
        </div>
    );
};

export default NewsLetter;
import React from 'react';

const Modal = ({isOpen, isClose}) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
            <div className="modal-container">
                <div className="bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md">

                    <h2 className='text-xl font-semibold mb-4 mt-6 uppercase'>Please Login Hare</h2>

                    <form className='px-4'>
                        <div className="mb-5">
                            <input type="email" name='email' placeholder='example@gmail.com' className='w-full rounded-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-700 focus:shadow-md'  />
                        </div>
                        <div className="mb-5">
                            <input type="password" name='password' placeholder='Enter your password' className='w-full rounded-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-700 focus:shadow-md'  />
                        </div>

                        <div className="">
                        <button className='hover:shadow-md rounded-md bg-purple-700 hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none'>Login</button>
                        </div>
                    </form>


                    {/* modal close btn*/}

                    <button onClick={isClose} className='hover:shadow-md rounded-md bg-gray-300 hover:bg-orange-600 py-3 px-8 text-base font-semibold text-black outline-none mt-5'>Colse</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
import React, { useState } from 'react';
import logo from '../../images/logo.png'
import Modal from '../Modal/Modal';

import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false)

    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)

    return (
        <>
            <nav className="hidden md:block bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="#/" className="flex">
                        <img src={logo} alt="" />
                    </a>
                    <div className="flex md:order-2">
                        <h6 className='font-semibold'>Create account. <span
                            onClick={openModal} className='text-blue-600 font-bold cursor-pointer'>It's free</span></h6>
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
                        <div className="hidden relative mr-3 md:mr-0 md:block">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="email-adress-icon" className="block  py-1 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm  outline-0 " placeholder="Search for your favorite groups in ATG" />
                        </div>
                    </div>
                </div>
            </nav>
            <Modal
                modal={open}
                openModal={openModal}
                closeModal={closeModal}

            />
        </>
    );
};

export default Header;
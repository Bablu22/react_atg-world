import React, { useRef, useState } from 'react';
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import image from '../../images/login.png'
import SignUp from '../Form/SignUp';
import SignIn from '../Form/SignIn';


const Modal = ({ product, modal, openModal, closeModal }) => {

    const cancelButtonRef = useRef(null)

    const [toggle, setToggle] = useState(true)

    const signInToggle = () => {
        setToggle(false)
    }
    const signUpToggle = () => {
        setToggle(true)
    }

    return (
        <>
            <Transition.Root show={modal} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={openModal}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4  sm:p-6 sm:pb-4">
                                    <div onClick={closeModal} className='flex justify-end cursor-pointer mb-3'>
                                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <i className="fas fa-times text-xl"></i>
                                        </div>
                                    </div>

                                    <div className="sm:flex sm:items-start">

                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <div className="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">

                                                <div>
                                                    <span className="font-medium">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</span>
                                                </div>
                                            </div>

                                            {toggle ? <div className='flex justify-between items-center'>
                                                <h4 className='font-bold text-xl'>Create Account</h4>
                                                <h6 className='font-medium'>Already have an account? <span onClick={signInToggle} className='text-blue-500 font-bold cursor-pointer'>Sign In</span> </h6>
                                            </div> :

                                                <div className='flex justify-between items-center'>
                                                    <h4 className='font-bold text-xl'>Sign In</h4>
                                                    <h6 className='font-medium'>Don’t have an account yet?<span onClick={signUpToggle} className='text-blue-500 font-bold cursor-pointer'>Create new for free!</span> </h6>
                                                </div>
                                            }

                                            <div className="mt-2">
                                                <div className="lg:grid grid-cols-2 gap-4">
                                                    <div>

                                                        {toggle ? <SignUp /> :
                                                            <SignIn />}
                                                    </div>

                                                    <div>
                                                        <img src={image} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default Modal;
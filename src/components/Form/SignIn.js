import React from 'react';
import google from '../../images/google.png'
import facebook from '../../images/facebook.png'

const SignIn = () => {
    return (
        <>
            <form action="" className='form-input'>

                <input type="email" name="" id="" placeholder='Email' />
                <input type="password" name="" id="" placeholder='Password' />
                <button
                    type="submit"
                    className="w-full block bg-blue-600  focus:bg-indigo-400 text-white font-semibold rounded-full px-4 py-2 mt-6">Sign In
                </button>

                <button
                    type="button"
                    className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-1 my-2 border border-gray-300">
                    <div className="flex justify-evenly">
                        <img src={google} alt="" />
                        <span>Sign up with Google</span>
                    </div>
                </button>
                <button
                    type="button"
                    className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-1 my-2 border border-gray-300">
                    <div className="flex justify-evenly">
                        <img src={facebook} alt="" />
                        <span>Sign up with Facebook</span>
                    </div>
                </button>

            </form>
        </>
    );
};

export default SignIn;
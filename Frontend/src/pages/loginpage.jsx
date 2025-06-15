

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Loginpage() {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const onsubmit = async (e) => {
        e.preventDefault();
        if (true) {
            try {
                const response = await axios.post(
                    'https://intern-l810.onrender.com/user/signin',
                    { email, password }
                );

                if (response.data.success) {
                    localStorage.setItem('token', response.data.token);
                    nav('/home');  // Navigate first
                    window.location.reload();  // Then reload if needed
                } else {
                    setErrors({ form: 'Invalid login credentials' });
                }
            } catch (error) {
                setErrors({ form: 'An error occurred during login. Please try again.' });
            }
        }
    };
    return (
        <div className="min-h-screen bg-white flex flex-col justify-between text-black">
            {/* Header */}
            <div className="flex justify-between items-center p-6">
                <svg
                    className="w-32 text-black cursor-pointer"
                    onClick={() => navigate('/home')}

                    viewBox="0 0 342 35"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    role="img"
                    aria-label="Tesla Wordmark Logo"
                >
                    <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7" />
                </svg>
            </div>

            {/* Login Form */}
            <div className="flex flex-col items-center px-4">
                <div className="w-full max-w-md text-center space-y-8">
                    <h1 className="text-3xl font-semibold">Sign In</h1>

                    <form onSubmit={onsubmit} className="space-y-6">
                        <div className="text-left">
                            <label className="block text-lg font-medium mb-1">Email <span className="text-gray-400 text-xs ml-1">ⓘ</span></label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div className="text-left">
                            <label className="block text-lg font-medium mb-1">Password <span className="text-gray-400 text-xs ml-1">ⓘ</span></label>
                            <input
                                type="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Your Password"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>


                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 rounded-md transition"
                        >
                            Submit
                        </button>



                        {/* Divider with OR */}
                        <div className="flex items-center my-6">
                            <div className="flex-grow h-px bg-gray-300"></div>
                            <span className="mx-4 text-gray-500 text-sm">Or</span>
                            <div className="flex-grow h-px bg-gray-300"></div>
                        </div>

                        <button
                        onClick={() => nav('/signup')}
                            type="button"
                            className="w-full bg-gray-100 hover:bg-gray-200 text-black text-sm font-medium py-2 rounded-md transition"
                        >
                            Create Account
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center text-xs text-gray-500 py-6 space-x-4">
                <span>Tesla © 2025</span>
                <a href="#" className="hover:underline">Privacy & Legal</a>
                <a href="#" className="hover:underline">Contact</a>
            </footer>
        </div>
    );
}

export default Loginpage;


import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setname] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [phoneNo, setPhoneNo] = useState('');

    const [errors, setErrors] = useState({});
    const onsubmit = async (e) => {
        e.preventDefault();
        if (true) {
            try {
                const response = await axios.post(
                    'http://localhost:5000/user/signup',
                    { name, address, pincode, phoneNo, email, password }
                );

                if (response.data.success) {
                    nav('/login');
                    window.location.reload();  // Then reload if needed
                } else {
                    setErrors({ form: 'Invalid' });
                }
            } catch (error) {
                setErrors({ form: 'An error occurred during SignUp. Please try again.' });
            }
        }
    };
    return (
        <div className="min-h-screen bg-white flex flex-col justify-between text-black">
            {/* Header */}
            <div className="flex justify-between items-center p-6">
                <svg
                    className="w-32 text-black cursor-pointer"
                    onClick={() => navigate('/')}

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
                    <h1 className="text-3xl font-semibold">Register</h1>

                    <form onSubmit={onsubmit} className="space-y-6">


                        <div className="text-left">
                            <label className="block text-lg font-medium mb-1">Name <span className="text-gray-400 text-xs ml-1">ⓘ</span></label>
                            <input
                                type="Name"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div className='flex flex-cols-1  gap-4'>
                            <div className="text-left w-full">
                                <label className="block text-lg font-medium mb-1">Address <span className="text-gray-400 text-xs ml-1">ⓘ</span></label>
                                <input
                                    type="Address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Your Adress"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <div className="text-left w-1/2 ">
                                <label className="block text-lg font-medium mb-1">Pin Code <span className="text-gray-400 text-xs ml-1">ⓘ</span></label>
                                <input
                                    type="pincode"
                                    value={pincode}
                                    onChange={(e) => setPincode(e.target.value)}
                                    placeholder="Pincode"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        </div>

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
                            <label className="block text-lg font-medium mb-1">Phone No <span className="text-gray-400 text-xs ml-1">ⓘ</span></label>
                            <input
                                type="PhoneNo"
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                placeholder="Your Phone No"
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
    )
}
export default SignUp;
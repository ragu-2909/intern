import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    return (
        <div>
            <nav className=" bg-white/60 px-6 py-3 shadow-md">
                <div className="max-w-8xl mx-auto flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex-items-center overflow-visible">
                        <svg
                            className="w-32 text-black" // or text-white depending on theme
                            viewBox="0 0 342 35"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            role="img"
                            aria-label="Tesla Wordmark Logo"
                        >
                            <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7" />
                        </svg>

                    </div>


                    {/* Center Nav Items */}
                    <div className="flex-1 flex justify-center ">
                        <ul className="flex space-x-4 text-lg font-medium">
                            <li className="relative group inline-block">
                                <a
                                    href="#"
                                    className="relative z-10 px-4 py-2 text-black"
                                >
                                    Vehicles
                                </a>
                                <span
                                    className="absolute inset-0 z-0 rounded-md bg-gray-300 backdrop-blur-md ring-1 ring-white/40 shadow-md shadow-black/10 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out"
                                ></span>
                            </li>


                            <li onClick={() => {
                                const token = localStorage.getItem('token');
                                if (!token) {
                                    alert('Please login to view your customizations');
                                    return;
                                }

                                navigate('/customizations')
                            }} className="relative group inline-block">
                                <a
                                    href="#"
                                    className="relative z-10 px-4 py-2 text-black"
                                >
                                    Your Customizations
                                </a>
                                <span
                                    className="absolute inset-0 z-0 rounded-md bg-gray-300 backdrop-blur-md ring-1 ring-white/40 shadow-md shadow-black/10 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out"
                                ></span>
                            </li>


                            <li onClick={() => {
                                const token = localStorage.getItem('token');
                                if (!token) {
                                    navigate('/login');
                                    return;
                                }

                                navigate('/orderHistory')
                            }} className="relative group inline-block">
                                <a
                                    href="#"
                                    className="relative z-10 px-4 py-2 text-black"
                                >
                                    Orders
                                </a>
                                <span
                                    className="absolute inset-0 z-0 rounded-md bg-gray-300 backdrop-blur-md ring-1 ring-white/40 shadow-md shadow-black/10 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out"
                                ></span>
                            </li>

                            <li className="relative group inline-block">
                                <a
                                    href="#"
                                    className="relative z-10 px-4 py-2 text-black"
                                >
                                    Discover
                                </a>
                                <span
                                    className="absolute inset-0 z-0 rounded-md bg-gray-300 backdrop-blur-md ring-1 ring-white/40 shadow-md shadow-black/10 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out"
                                ></span>
                            </li>

                            <li className="relative group inline-block">
                                <a
                                    href="#"
                                    className="relative z-10 px-4 py-2 text-black"
                                >
                                    Shop
                                </a>
                                <span
                                    className="absolute inset-0 z-0 rounded-md bg-gray-300 backdrop-blur-md ring-1 ring-white/40 shadow-md shadow-black/10 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out"
                                ></span>
                            </li>

                        </ul>
                    </div>

                    {/* Account Button */}
                    <div
                        className="relative group inline-block p-2 rounded-md cursor-pointer"
                        onClick={() => {
                            const token = localStorage.getItem('token');
                            if (!token) {
                                navigate('/login');
                            } else {
                                const confirmLogout = window.confirm('Are you sure you want to logout?');
                                if (confirmLogout) {
                                    localStorage.removeItem('token');
                                    navigate('/');
                                }
                            }
                        }}
                    >
                        <div className="absolute inset-0 rounded-md bg-gray-300 backdrop-blur-md ring-1 ring-white/40 shadow-md shadow-black/10 opacity-0 scale-95 group-hover:opacity-100  group-hover:scale-100 transition-all duration-300 ease-in-out z-0" />

                        <svg
                            className="w-9 h-7 text-black relative z-10"
                            viewBox="1 -1 20 22"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="currentColor"
                                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M6.858 18.752c.605-1.868 2.722-3.24 5.142-3.24s4.537 1.372 5.142 3.24C15.712 19.844 13.933 20.5 12 20.5s-3.712-.656-5.142-1.748m11.469-1.095c-1.02-2.165-3.483-3.645-6.327-3.645s-5.307 1.48-6.327 3.645A8.46 8.46 0 0 1 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5a8.46 8.46 0 0 1-2.173 5.657M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m0 5.5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2"
                            />
                        </svg>
                    </div>


                </div>
            </nav>
        </div>
    );
}
export default Navbar;

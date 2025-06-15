import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Customization() {
    const [customizations, setCustomizations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCustomizations = async () => {
            try {
                const response = await axios.get("http://localhost:5000/user/getCustomizations", {
                    headers: {
                        'token': localStorage.getItem('token')
                    }
                });

                setCustomizations(response.data.customizations);
            } catch (error) {
                console.error("Error fetching customization products:", error);
            }
        };

        fetchCustomizations();
    }, []);

    const handleClick = (prodId) => {
        navigate(`/product/${prodId}`);
    };

    return (
        <>


            <div className="flex justify-between items-center p-3 fixed w-full bg-white z-20">
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
                <h1 className="text-2xl font-bold text-gray-800">Your Customizations</h1>

            </div>

            <div className="min-h-screen  bg-gray-100 mt-5 py-14 ">
                <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
                    {customizations.length === 0 ? (
                        <p className="text-center col-span-2">No customizations found.</p>
                    ) : (
                        customizations.map((item) => (
                            <div key={item._id} onClick={() => handleClick(item.prodId)} className="cursor-pointer bg-white shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-105">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <img src={item.customization.color.images[0]} alt={item.customization.carName} className="w-full h-64 object-cover" />
                                    <div className="p-6 space-y-4">
                                        <h2 className="text-2xl font-semibold text-gray-800">{item.customization.carName}</h2>
                                        <p className="text-gray-600"><strong>Variant:</strong> {item.customization.variant}</p>
                                        <p className="text-gray-600"><strong>Sub Variant:</strong> {item.customization.subVariant}</p>
                                        <p className="text-gray-600"><strong>Color:</strong> {item.customization.color.name}</p>
                                        
                                        <p className="text-gray-600"><strong>Cost:</strong> ${item.customization.cost}</p>
                                        <div className="text-sm text-gray-500">
                                            <p><strong>Range:</strong> {item.customization.feature?.Range}</p>
                                            <p><strong>Acceleration:</strong> {item.customization.feature?.Acceleration}</p>
                                            <p><strong>Top Speed:</strong> {item.customization.feature?.['Top Speed']}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default Customization;
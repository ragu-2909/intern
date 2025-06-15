import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function OrderHistory() {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrderHistory = async () => {
            try {
                const response = await axios.get("http://localhost:5000/user/getOrderHistory", {
                    headers: {
                        token: localStorage.getItem("token"),
                    },
                });
                setOrders(response.data.orderHistory || []);
            } catch (error) {
                console.error("Error fetching order history:", error);
            }
        };

        fetchOrderHistory();
    }, []);

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
                <h1 className="text-2xl font-bold text-gray-800">Order History</h1>

            </div>

            <div className="p-8 py-14 bg-gray-100 min-h-screen mt-5">

                <h1 className="text-4xl font-bold text-center mb-8">Order History</h1>
                <div className="flex flex-col gap-6">
                    {orders.length === 0 ? (
                        <p className="text-center text-gray-500">No orders found.</p>
                    ) : (
                        orders.map((order, index) => {
                            const product = order.product;
                            const color = product?.subVariant?.color;
                            return (
                                <div
                                    key={index}
                                    onClick={() => navigate(`/product/${product.productId}`)}
                                    className="cursor-pointer flex flex-col md:flex-row gap-4 border p-4 rounded-lg shadow hover:shadow-xl transition-shadow"
                                >
                                    {/* Left: Image */}
                                    <div className="md:w-1/2">
                                        <img
                                            src={color?.image?.[0]}
                                            alt="Car"
                                            className="rounded-lg w-full h-64 object-cover"
                                        />
                                    </div>

                                    {/* Right: Details */}
                                    <div className="md:w-1/2 flex flex-col justify-center gap-2">
                                        <h2 className="text-2xl font-bold">{product.name}</h2>
                                        <p className="text-lg text-gray-700">Variant: {product.variant}</p>
                                        <p className="text-lg text-gray-700">Sub-Variant: {product.subVariant.feature}</p>
                                        <p className="text-lg text-gray-700">Color Quantity: {color?.qty}</p>
                                        <p className="text-lg text-gray-700">Range: {color?.Range}</p>
                                        <p className="text-lg text-gray-700">Acceleration: {color?.Acceleration}</p>
                                        <p className="text-lg text-gray-700">Top Speed: {color?.['Top Speed']}</p>
                                        <p className="text-lg font-semibold text-green-600">
                                            ₹{color?.cost?.toLocaleString('en-IN')}
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </>
    );
}

export default OrderHistory;

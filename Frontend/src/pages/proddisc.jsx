import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { ChevronLeft, ChevronRight } from 'lucide-react';


function Proddisc() {
    const [product, setProduct] = useState(null);
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
    const [selectedSubVariantIndex, setSelectedSubVariantIndex] = useState(0);
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);
    const params = useParams();
    const [range, setRange] = useState({});
    const [Acceleration, setAcceleration] = useState({});
    const [speed, setspeed] = useState({});
    const nav = useNavigate();


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://intern-l810.onrender.com/product/${params.id}`);
                setProduct(response.data.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        fetchProduct();
    }, [params.id]);

    if (!product) return <div>Loading...</div>;

    const variant = product.quantity[selectedVariantIndex];
    const subVariant = variant.subVariants[selectedSubVariantIndex];
    const color = subVariant.colors[selectedColorIndex];
    const images = color.image;

    const handlePrev = () => {
        setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };


    const handleOrder = async () => {
        const orderDetails = {
            orderPlaced: true,
            product: {
                productId: product._id,
                name: product.name,
                variant: variant.variant,
                subVariant: {
                    feature: subVariant.feature,
                    color: {
                        name: color.color,
                        qty: color.qty,
                        Range: color.Range,
                        Acceleration: color.Acceleration,
                        "Top Speed": color["Top Speed"],
                        image: color.image,
                        cost: color.cost
                    }
                }
            }
        };

        try {
            const res = await axios.post('https://intern-l810.onrender.com/user/confirmOrder', orderDetails, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('token')
                }
            });

            if (res.data.success) {
                nav('/orderHistory');
                alert("Order placed successfully!");
                console.log("Order placed successfully", res.data);
            } else {
                console.error("Order failed:", res.data.message);
            }
        } catch (error) {
            console.error("Error placing order:", error.response?.data?.message || error.message);
        }

    };




    const saveCust = async () => {
        const CustomizeDetails = {
            prodId: product._id,
            customization: {
                carName: product.name,
                variant: variant.variant,
                subVariant: subVariant.feature,
                feature: {
                    Range: color.Range,
                    Acceleration: color.Acceleration,
                    "Top Speed": color["Top Speed"],
                },
                color: {
                    name: color.color,
                    images: color.image,
                },
                cost: color.cost
            }
        }
        try {
            const response = await axios.post('https://intern-l810.onrender.com/user/customize', CustomizeDetails, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('token')
                }
            });

            if (response.data.success) {
                nav('/customizations');
                alert("Customization saved successfully!");
                console.log("Customization saved successfully", response.data);
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert("Customization already exists");
                nav('/customizations');
                console.error("Customization save failed:", error.response.data.message);
            } else {
                console.error("Error saving customization:", error.response?.data?.message || error.message);
                alert("Something went wrong. Please try again.");
            }
        }

    }



    return (
        <>
            <div className="flex justify-between items-center p-6 fixed w-full bg-white z-20">
                <svg
                    className="w-32 text-black cursor-pointer"
                    onClick={() => nav('/home')}

                    viewBox="0 0 342 35"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    role="img"
                    aria-label="Tesla Wordmark Logo"
                >
                    <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7" />
                </svg>
                <div className="flex gap-4">
                    <button onClick={() => { nav('/customizations') }} className='bg-white text-black font-normal px-1 py-1 rounded-sm border-2 border-black hover:bg-gray-300  transition duration-300'>
                        Your Customizations
                    </button>
                </div>
            </div>

            <div className="flex gap-2 pt-28 px-4"> {/* Increased pt to push below fixed navbar */}
                {/* LEFT IMAGE SECTION  */}
                <div className="w-full h-screen sticky top-28 flex items-center justify-center">
                    <div className="relative w-full h-[700px]">
                        <img
                            src={images[imageIndex]}
                            alt="Product"
                            className="w-full h-full object-cover rounded-xl"
                        />
                        <button
                            onClick={handlePrev}
                            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-10"
                        >
                            <ChevronLeft />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-10"
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>

                {/* RIGHT OPTIONS SECTION  */}
                <div className="w-1/2 flex flex-col gap-6 pb-20">
                    <h1 className="text-5xl ml-24 font-semibold">{product.name}</h1>

                    {/* Variant buttons */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Variants</h2>
                        <div className="flex flex-col gap-3">
                            {product.quantity.map((v, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setSelectedVariantIndex(index);
                                        setSelectedSubVariantIndex(0);
                                        setSelectedColorIndex(0);
                                        setImageIndex(0);
                                    }}
                                    className={`px-4 py-5 w-11/12 h-24 font-semibold rounded-md border ${index === selectedVariantIndex ? 'bg-slate-300 text-black border-2 border-black' : 'bg-white text-black'}`}
                                >
                                    {v.variant}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* SubVariants */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Features</h2>
                        <div className="flex flex-wrap gap-2">
                            {variant.subVariants.map((s, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setSelectedSubVariantIndex(index);
                                        setSelectedColorIndex(0);
                                        setImageIndex(0);
                                    }}
                                    className={`px-4 py-5 w-11/12 h-24 font-semibold rounded-md border ${index === selectedSubVariantIndex ? 'bg-slate-300 text-black border-2 border-black' : 'bg-white text-black'}`}
                                >
                                    {s.feature}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Colors with specs */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Colors & Specs</h2>
                        <div className="flex flex-col gap-4">
                            {subVariant.colors.map((c, index) => (
                                <div
                                    key={index}
                                    className={`p-4 border rounded-xl transition duration-300 shadow-md cursor-pointer ${index === selectedColorIndex ? 'bg-gray-300 border-black' : 'bg-white'
                                        }`}
                                    onClick={() => {
                                        setSelectedColorIndex(index);
                                        setImageIndex(0);
                                    }}
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-bold text-gray-700">{c.color}</h3>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-3 text-sm text-gray-800">
                                        <div><strong>Range:</strong> {c.Range} km</div>
                                        <div><strong>Acceleration:</strong> {c.Acceleration} s</div>
                                        <div><strong>Top Speed:</strong> {c['Top Speed']} km/h</div>
                                        <div><strong>Cost:</strong> ₹{c.cost?.toLocaleString()}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <button onClick={handleOrder} className='w-11/12 h-16 bg-black text-white font-semibold rounded-md mt-4 hover:bg-gray-800 transition duration-300'>
                                Place Order
                            </button>
                            <button onClick={saveCust} className='w-11/12 h-16 bg-black text-white font-semibold rounded-md mt-4 hover:bg-gray-800 transition duration-300'>
                                Save Customization
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Proddisc;

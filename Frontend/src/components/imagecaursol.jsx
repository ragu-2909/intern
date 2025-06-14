import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ImageCarousel() {
  const [heroProducts, setHeroProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHeroProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/heroProducts");
        setHeroProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching hero products:", error);
      }
    };

    fetchHeroProducts();
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroProducts.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === heroProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-screen h-[550px] overflow-hidden">
      {/* Image Slider */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {heroProducts.map((product) => (
          <div
            key={product._id}
            className="w-screen h-full relative flex-shrink-0"
          >
            <img
              src={product.image[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />

            {/* Text overlay */}
            <div className="absolute inset-0 bg-black/10 flex flex-col justify-center px-36 text-white">
              <h1 className="text-6xl sm:text-7xl -translate-y-16 font-semibold mb-2 drop-shadow-lg font-sans">
                {product.name}
              </h1>
              <p className="text-xl -translate-y-11 font-semibold sm:text-4xl mb-1">₹{product.price}</p>
              {/* {product.discount?.disc >0 && (
                <p className="text-lg text-green-300 mb-4">
                  {product.discount.disc}% OFF
                </p>
              )} */}
              <button
                onClick={() => navigate(`/product/${product._id}`)}
                className="bg-blue-600/75 hover:bg-blue-700 transition px-6 py-3 w-60 rounded-md text-lg text-white shadow-lg"

              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-10"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-10"
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default ImageCarousel;

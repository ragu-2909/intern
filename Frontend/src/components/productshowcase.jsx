import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductShowcase() {
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

  if (heroProducts.length === 0) return null;

  return (
    <div className="relative w-full h-[550px] overflow-hidden mb-10 px-4">
      {/* Image Row */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 74}%)` }} // 74% to account for 70% width + spacing
      >
        {heroProducts.map((product, index) => (
          <div
            key={product._id}
            className="relative w-[70%] mr-5 h-full flex-shrink-0"
          >
            <img
              src={product.image[1]}
              alt={product.name}
              className="w-full h-full object-cover rounded-xl"
            />

            {/* Show overlay only for current index */}
            {index === currentIndex && (
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-start px-6 sm:px-12 text-white">
                <h1 className="text-4xl sm:text-4xl font-bold mb-2 drop-shadow-lg">
                  {product.name}
                </h1>
                <p className="text-2xl sm:text-4xl font-medium mt-4 mb-1">
                  ₹{product.price}
                </p>
                {/* {product.discount?.disc > 0 && (
                  <p className="text-lg text-green-300 mb-5">
                    {product.discount.disc}% OFF
                  </p>
                )} */}
                <button
                  onClick={() => navigate(`/product/${product._id}`)}
                  className="bg-blue-600/60 hover:bg-blue-700/90 transition px-6 py-3 w-60 rounded-md text-lg text-white shadow-lg"
                >
                  Order Now
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-20"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-20"
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default ProductShowcase;

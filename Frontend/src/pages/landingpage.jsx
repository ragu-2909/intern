
import ImageCarousel from "../components/imagecaursol.jsx";
import ProductShowcase from "../components/productshowcase.jsx";
import Viideoad from "../components/videoad.jsx";
import Navbar from "../components/navigationbar.jsx";

function LandingPage() {
    return (
        <div>

            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>
            {/* Carousel */}
            <div className="   mt-16 py-1">
                <ImageCarousel />
            </div>
            <div className="   mt-1 py-1 mb-4">
                <ProductShowcase />
            </div>

            <div>
                <Viideoad />
            </div>


        </div>
    )

}

export default LandingPage;
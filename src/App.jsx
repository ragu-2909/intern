import Imagecarsoul from "./components/imagecaursol.jsx";
import Navbar from "./components/navigationbar.jsx";
import ProductShowcase from "./components/productshowcase.jsx";
import Viideoad from "./components/videoad.jsx";
function App() {
  return (
    <div className="text-2xl bg-white font-bold overflow-y-auto h-screen">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Carousel */}
      <div className="   mt-16 py-1">
        <Imagecarsoul />
      </div>
      <div className="   mt-1 py-1 mb-4">
        <ProductShowcase />
      </div>

      <div>
        <Viideoad/>
      </div>



    </div>
  );
}

export default App;

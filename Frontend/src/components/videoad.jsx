function Viideoad() {
    return (
        <div className=" relative w-full h-[600px]">
            {/* Video background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                autoPlay
                loop
                muted
            >
                <source src="https://res.cloudinary.com/dkcwopasm/video/upload/v1749984279/Homepage-We-Are-Tesla-Desktop_dkto47.webm" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay text */}
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-4xl sm:text-6xl font-bold mb-4 drop-shadow-lg">
                    We are Tesla
                </h1>
                <p className="text-xl sm:text-2xl font-medium mb-6">
                    The future of sustainable energy.
                </p>
                <button className="bg-blue-600/60 hover:bg-blue-700/90 transition px-6 py-3 w-60 rounded-md text-lg text-white shadow-lg">
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default Viideoad;

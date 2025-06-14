function Viideoad() {
    return (
        <div className="videoad">
            <video
                className="w-full h-[550px] object-cover rounded-xl mb-2 mt-5"
                autoPlay
                loop
                muted
            >
                <source src="src/assets/Homepage-We-Are-Tesla-Desktop.webm" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Viideoad;
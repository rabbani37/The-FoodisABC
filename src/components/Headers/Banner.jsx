





const Banner = () => {
    return (
        <div className="">
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1543353071-873f17a7a088)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl justify-center">
                        <h1 className="mb-5 text-5xl font-bold leading-18">
                            Fresh flavors crafted daily to satisfy  your every craving</h1>
                        <p className="mb-5">
                            We serve freshly prepared meals using quality ingredients, delivering authentic flavors, great taste,  and memorable dining experiences every single day.
                        </p>
                        <div className="space-x-10">
                            <button className="btn  btn-success">Explore Now</button>
                            <button className="btn btn-outline btn-success">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
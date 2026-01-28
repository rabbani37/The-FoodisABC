





const Banner = () => {
    return (
        <div className="">
            <div
                className="hero min-h-[550px]"
                style={{
                    backgroundImage:
                        "url(banner.jpg)",
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
                            <button className="btn  btn-success text-white">Explore Now</button>
                            <button className="btn btn-outline text-green-500
                             border-green-500   ">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import PropTypes from 'prop-types';

const Slider = ({ image, title, description }) => {

    return (

        <div
            className="hero h-full"
            style={{
                backgroundImage: `url(${image})`,
            }}>
                
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-white text-center">
                <div className="max-w-3xl space-y-5">
                    <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
                    <p className="">{description}</p>
                    <button className="bg-[#c0392b] hover:bg-[#e74c3c] px-4 py-2 text-white rounded-lg">Explore Now</button>
                </div>
            </div>
        </div>
    );
};

Slider.propTypes = {
    children: PropTypes.node,
    // image: PropTypes.image.required,
    // title: PropTypes.title.required,
    // description: PropTypes.description.required,
}

export default Slider;
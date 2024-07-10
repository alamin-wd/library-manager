import PropTypes from 'prop-types';

const Slider = ({ image, title }) => {

    return (

        <div
            className="hero h-full rounded-xl"
            style={{
                backgroundImage: `url(${image})`,
            }}>

            <div className="hero-content text-white text-center">

                <h1 className="text-2xl font-semibold">{title}</h1>

            </div>
        </div>
    );
};

Slider.propTypes = {
    children: PropTypes.node,
}

export default Slider;
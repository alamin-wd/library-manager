
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const BookCard = ({ book }) => {
    const { _id, image, bookName, authorName, category, rating, shortDescription } = book;

    return (
        <div className="h-[290px] flex items-center gap-6 border-2 hover:border-[#e74c3c] rounded-lg p-6 transition ease-in-out transform hover:scale-105">
            <div className="w-2/5">
                <img className="w-full h-full object-cover" 
                src={image} alt="Book Image" />
            </div>

            <div className="w-3/5">
                <h4 className="text-[#444444] text-lg font-semibold">{bookName}</h4>

                <h5 className="text-[#737373] text-sm font-semibold">
                    <span className="italic text-xs">By</span> {authorName}
                </h5>

                <h5 className="text-[#444444] text-base font-semibold mt-3">{category}</h5>

                <div className="text-[#444444] text-xl font-semibold my-2">
                    <Rating
                        initialRating={rating}
                        readonly
                        emptySymbol={<FaStar color="gray" />}
                        fullSymbol={<FaStar color="gold" />}
                        fractions={2}
                        placeholderSymbol={<FaStarHalfAlt color="gold" />}
                    />
                </div>

                <p className="text-[#737373] mt-3">{shortDescription}</p>

                <NavLink to={`/update-book/${_id}`}>
                    <button className="bg-[#c0392b] hover:bg-[#e74c3c] px-4 py-1 text-white text-sm rounded-lg mt-4">
                        Update
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.object.isRequired,
};

export default BookCard;

import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const BookCard = ({ book }) => {

    const { _id, image, bookName, authorName, category, rating, shortDescription } = book;

    return (

        <div className="h-[290px] flex items-center gap-6 border-2 hover:border-[#e74c3c] rounded-lg p-6 transition ease-in-out">

            <div className="w-2/5">
                <img className="" src={image} alt="Book Image" />
            </div>

            <div className="w-3/5">
                <h4 className="text-[#444444] text-lg font-semibold">{bookName}</h4>

                <h5 className="text-[#737373] text-sm font-semibold"> <span className="italic text-xs">By</span> {authorName}</h5>

                <h5 className="text-[#444444] text-base font-semibold mt-3">{category}</h5>

                <h6 className="text-[#444444] text-xl font-semibold my-2">{rating}</h6>

                <p color="text-[#737373] mt-3">{shortDescription}</p>

                <NavLink to="">
                    <button className="bg-[#c0392b] hover:bg-[#e74c3c] px-4 py-1 text-white text-sm rounded-lg mt-4">Update</button>
                </NavLink>
            </div>
        </div>

    );
};

BookCard.propTypes = {
    book: PropTypes.node,
}

export default BookCard;

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import LoadingSpinner from '../../components/Shared/LoadingSpinner/LoadingSpinner';

const TableView = ({ books, isLoading }) => {
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-full">
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <div className="w-full">
            <table className="w-full">
                <thead>

                    <tr className="text-left">
                    <th className="pb-4 ">Image</th>

                        <th className="pb-4 px-4">Book Name</th>

                        <th className="pb-4">Author Name</th>

                        <th className="pb-4 w-24">Category</th>

                        <th className="pb-4 w-24 text-center">Quantity</th>

                        <th className="pb-4 w-24 text-center">Rating</th>

                        <th className="pb-4 text-center">Action</th>
                    </tr>
                </thead>

                <tbody>

                    {books.map(book => (
                        <tr key={book._id} className="hover:bg-gray-50">

                            <td className="border-t py-3 ">
                                <img className='h-20' src={book.image} alt="" />
                            </td>

                            <td className="border-t px-4 py-3">{book.bookName}</td>

                            <td className="border-t py-3">{book.authorName}</td>

                            <td className="border-t py-3">{book.category}</td>

                            <td className="border-t py-3 text-center">{book.quantity}</td>

                            <td className="border-t py-3 text-center">{book.rating}</td>

                            <td className="border-t py-3 text-right">

                                <NavLink to={`/update-book/${book._id}`}>

                                    <button className="bg-[#c0392b] hover:bg-[#e74c3c] px-3 py-2 text-white text-xs rounded-lg">
                                        Update
                                    </button>

                                </NavLink>
                            </td>
                        </tr>
                    ))}

                </tbody>

            </table>
        </div>
    );
};

TableView.propTypes = {
    books: PropTypes.node,
    isLoading: PropTypes.node,
};

export default TableView;

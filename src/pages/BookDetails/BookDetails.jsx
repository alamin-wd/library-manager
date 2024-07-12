
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/Shared/LoadingSpinner/LoadingSpinner';
import Rating from 'react-rating';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const BookDetails = () => {

    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const book = async () => {
            try {
                const res = await fetch(`http://localhost:5000/allBooks/${id}`);
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setBook(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        book();
    }, [id]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!book) {
        return <div>No book found.</div>;
    }

    return (

        <div className="w-11/12 mx-auto pt-10">

            <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden md:gap-10 p-4 md:p-10">

                <div className="w-full md:w-2/5">
                    <img src={book.image} alt={book.bookName} className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{book.bookName}</h2>

                        <p className="text-gray-600 mb-4"><strong>Author:</strong> {book.authorName}</p>

                        <p className="text-gray-600 mb-4"><strong>Category:</strong> {book.category}</p>

                        <p className="text-gray-600 mb-4"><strong>Description:</strong> {book.description}</p>

                        <p className="text-gray-600 mb-4"><strong>Rating:</strong>  <Rating
                            initialRating={book.rating}
                            readonly
                            emptySymbol={<FaStar color="gray" />}
                            fullSymbol={<FaStar color="gold" />}
                            fractions={2}
                            placeholderSymbol={<FaStarHalfAlt color="gold" />}
                        /></p>



                        <p className="text-gray-600 mb-4"><strong>Published Year:</strong> {book.publishingYear}</p>
                    </div>

                    <div className="mt-4">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                            Borrow This Book
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;


import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/Shared/LoadingSpinner/LoadingSpinner';
import Rating from 'react-rating';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const BookDetails = () => {

    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const [borrowModalOpen, setBorrowModalOpen] = useState(false);
    const [returnDate, setReturnDate] = useState('');

    const { user } = useContext(AuthContext);

    useEffect(() => {

        const fetchBook = async () => {

            try {
                const res = await fetch(`http://localhost:5000/allBooks/${id}`);
                if (!res.ok) {
                    throw new Error('Network res was not ok');
                }
                const data = await res.json();
                setBook(data);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);

    const handleBorrow = async () => {
        if (book.quantity <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Unavailable',
                text: 'This book is currently unavailable.',
            });
            return;
        }

        const res = await fetch('http://localhost:5000/borrow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                bookId: book._id,
                userEmail: user.email,
                userName: user.displayName,
                image: book.image,
                bookName: book.bookName,
                returnDate,
            }),
        });

        const data = await res.json();

        if (data.message === 'Book borrowed successfully!') {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Book borrowed successfully!',
            });

            setBorrowModalOpen(false);
            setBook((prevBook) => ({ ...prevBook, quantity: prevBook.quantity - 1 }));
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: data.message,
            });
        }
    };


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

                        <p className="text-gray-600 mb-4"><strong>Rating:</strong>
                            <Rating
                                initialRating={book.rating}
                                readonly
                                emptySymbol={<FaStar color="gray" />}
                                fullSymbol={<FaStar color="gold" />}
                                fractions={2}
                                placeholderSymbol={<FaStarHalfAlt color="gold" />}
                            />
                        </p>

                        <p className="text-gray-600 mb-4"><strong>Published Year:</strong> {book.publishingYear}</p>

                    </div>

                    <div className="mt-4">
                        <button
                            onClick={() => setBorrowModalOpen(true)}
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                            disabled={book.quantity <= 0} >
                            Borrow This Book
                        </button>

                    </div>
                </div>
            </div>

            {/* Modal for Borrowing */}
            {borrowModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">

                    <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/3">
                        <h3 className="text-lg font-bold mb-4">Borrow this Book</h3>

                        <p><strong>Your Email:</strong> {user.email}</p>

                        <p><strong>Your Name:</strong> {user.displayName}</p>

                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="returnDate">Return Date</label>
                            <input
                                type="date"
                                id="returnDate"
                                value={returnDate}
                                onChange={(e) => setReturnDate(e.target.value)}
                                className="border rounded p-2 w-full"
                                required
                            />
                        </div>

                        <button
                            onClick={handleBorrow}
                            className="bg-[#c0392b] hover:bg-[#e74c3c] text-white py-2 px-4 rounded ">
                            Submit
                        </button>

                        <button
                            onClick={() => setBorrowModalOpen(false)}
                            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 ml-2" >
                            Cancel
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
};

export default BookDetails;

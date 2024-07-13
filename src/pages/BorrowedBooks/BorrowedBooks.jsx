import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import { AuthContext } from "../../providers/AuthProvider";

const BorrowedBooks = () => {
    const { user } = useContext(AuthContext);
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const allBorrowedBooks = async () => {

            if (!user) {
                setIsLoading(false);
                return;
            }

            try {

                const res = await fetch(`https://library-manager-server.vercel.app/borrowedBooks?email=${user.email}`);

                const data = await res.json();
                setBorrowedBooks(data);

            }
            catch (err) {
                console.error(err);
            }
            finally {
                setIsLoading(false);
            }
        };

        allBorrowedBooks();

        window.scrollTo(0, 0);
    }, [user]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (!user) {
        return <div>Please log in to see your borrowed books.</div>;
    }

    return (

        <div className="w-11/12 mx-auto mt-24">
            <Helmet>
                <title>Library Manager | Borrowed Books </title>
            </Helmet>

            <h2 className="text-2xl font-bold">Your Borrowed Books</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">

                {borrowedBooks.map(book => (

                    <div key={book._id} className="border p-4 rounded-lg flex items-center gap-6">

                        <img src={book.image} alt={book.bookName}
                            className="w-40 h-60 " />
                            
                        <div className="space-y-4">

                            <h3 className="text-lg font-semibold">{book.bookName}</h3>

                            <p>Category: {book.category}</p>

                            <p>Borrowed Date: {new Date(book.borrowedDate).toLocaleDateString()}</p>

                            <p>Return Date: {new Date(book.returnDate).toLocaleDateString()}</p>

                            <button className="bg-red-600 text-white py-2 px-4 rounded mt-2">
                                Return
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BorrowedBooks;


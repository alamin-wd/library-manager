
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/Shared/LoadingSpinner/LoadingSpinner';
import CategoryBookCard from './CategoryBookCard';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const books = async () => {
            try {
                const res = await fetch('http://localhost:5000/allBooks');

                if (!res.ok) {
                    Error('Error getting books');
                }

                const data = await res.json();

                const filteredBooks = data.filter(book =>
                    book.category.trim().toLowerCase() === categoryName.trim().toLowerCase()
                );

                setBooks(filteredBooks);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        };

        books();

    }, [categoryName]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (

        <div className='w-11/12 mx-auto mt-28 flex flex-col md:flex-row md:justify-between md:items-start '>

            <div className='w-1/4'>
                <h2 className="text-2xl md:text-3xl font-bold">Category Name: {categoryName}</h2>
            </div>

            <div className='w-3/4 '>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 ">
                    {books.length > 0 ? (
                        books.map(book => (
                            <CategoryBookCard key={book._id} book={book} />
                        ))
                    ) : (
                        <div>No books found in this category.</div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default CategoryPage;

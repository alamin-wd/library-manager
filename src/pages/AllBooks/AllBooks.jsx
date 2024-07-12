import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import LoadingSpinner from '../../components/Shared/LoadingSpinner/LoadingSpinner';
import BookCard from './BookCard';

const AllBooks = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [allBooks, setAllBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [isFiltering, setIsFiltering] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/allBooks')
            .then(res => res.json())
            .then(data => {

                setAllBooks(data);
                setFilteredBooks(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, []);

    const handleCategoryClick = category => {

        setSelectedCategory(category);
        setIsFiltering(true); 

        setTimeout(() => {

            if (category === '') {
                setFilteredBooks(allBooks);
            } 
            else {
                setFilteredBooks(allBooks.filter(book => book.category === category));
            }

            setIsFiltering(false); 

        }, 500); 
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="w-11/12 mx-auto mt-32">
            
            <Helmet>
                <title>Library Manager | All Books</title>
            </Helmet>

            <div className="w-full flex flex-col md:flex-row gap-20 items-start">
                
                <div className="w-1/3">
                    <h3 className="text-3xl text-[#151515] font-bold">Category</h3>

                    <ul className="list-none mt-4">
                        <li>
                            <button
                                className={`block text-lg py-2 ${
                                    selectedCategory === '' ? 'font-bold text-[#c0392b]' : ''
                                }`}

                                onClick={() => handleCategoryClick('')}>
                                All Categories
                            </button>
                        </li>

                        <li>
                            <button
                                className={`block text-lg py-2 hover:text-[#c0392b] ${
                                    selectedCategory === 'Arts & Music' ? 'font-bold text-[#c0392b]' : ''
                                }`}

                                onClick={() => handleCategoryClick('Arts & Music')}>

                                Arts & Music
                            </button>
                        </li>

                        <li>
                            <button
                                className={`block text-lg py-2 hover:text-[#c0392b] ${
                                    selectedCategory === 'Biographies' ? 'font-bold text-[#c0392b]' : ''
                                }`}

                                onClick={() => handleCategoryClick('Biographies')}>
                                Biographies
                            </button>
                        </li>

                        <li>
                            <button
                                className={`block text-lg py-2 hover:text-[#c0392b] ${
                                    selectedCategory === 'Home & Garden' ? 'font-bold text-[#c0392b]' : ''
                                }`}

                                onClick={() => handleCategoryClick('Home & Garden')}>
                                Home & Garden
                            </button>
                        </li>

                        <li>
                            <button
                                className={`block text-lg py-2 hover:text-[#c0392b] ${
                                    selectedCategory === 'Hobbies & Crafts' ? 'font-bold text-[#c0392b]' : ''
                                }`}
                                onClick={() => handleCategoryClick('Hobbies & Crafts')} >

                                Hobbies & Crafts
                            </button>
                        </li>

                        <li>
                            <button
                                className={`block text-lg py-2 hover:text-[#c0392b] ${
                                    selectedCategory === 'Kids' ? 'font-bold text-[#c0392b]' : ''
                                }`}

                                onClick={() => handleCategoryClick('Kids')}>
                                Kids
                            </button>
                        </li>

                        <li>
                            <button
                                className={`block text-lg py-2 hover:text-[#c0392b] ${
                                    selectedCategory === 'Religion' ? 'font-bold text-[#c0392b]' : ''
                                }`}

                                onClick={() => handleCategoryClick('Religion')}>
                                Religion
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="w-auto grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 md:mx-0">
                    {isFiltering ? (
                        <div className="flex justify-center items-center h-full">
                            <LoadingSpinner />
                        </div>
                    ) : (
                        filteredBooks.map(book => <BookCard key={book._id} book={book} />)
                    )}
                </div>
                
            </div>
        </div>
    );
};

export default AllBooks;


import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import LoadingSpinner from '../../components/Shared/LoadingSpinner/LoadingSpinner';
import BookCard from './BookCard';
import TableView from './TabView';
import { IoMdSearch } from 'react-icons/io';


const AllBooks = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [allBooks, setAllBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [isFiltering, setIsFiltering] = useState(false);
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);
    const [viewMode, setViewMode] = useState('card');

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

    const handleShowAvailableClick = () => {

        if (showAvailableOnly) {
            setFilteredBooks(allBooks);
        }
        else {
            setFilteredBooks(allBooks.filter(book => book.quantity > 0));
        }
        setShowAvailableOnly(!showAvailableOnly);
    };

    const handleViewModeChange = mode => {
        setViewMode(mode);
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

                {/* Right Side */}
                <div className="w-1/3">
                    <h3 className="text-3xl text-[#151515] font-bold">
                        Categories
                    </h3>

                    <ul className="list-none mt-4">
                        <li>
                            <button
                                className={`block text-lg py-2 ${selectedCategory === '' ? 'font-bold text-[#c0392b]' : ''
                                    }`}

                                onClick={() => handleCategoryClick('')}>
                                All Categories
                            </button>
                        </li>

                        <li>
                            <button
                                className={`block text-lg py-2 hover:text-[#c0392b] ${selectedCategory === 'Arts & Music' ? 'font-bold text-[#c0392b]' : ''
                                    }`}

                                onClick={() => handleCategoryClick('Arts & Music')}>

                                Arts & Music
                            </button>
                        </li>

                        <li>
                            <button
                                className={`block text-lg py-2 hover:text-[#c0392b] ${selectedCategory === 'Biographies' ? 'font-bold text-[#c0392b]' : ''
                                    }`}

                                onClick={() => handleCategoryClick('Biographies')}>
                                Biographies
                            </button>
                        </li>

                        <li>
                            <button
                                className={`block text-lg py-2 hover:text-[#c0392b] ${selectedCategory === 'Home & Garden' ? 'font-bold text-[#c0392b]' : ''
                                    }`}

                                onClick={() => handleCategoryClick('Home & Garden')}>
                                Home & Garden
                            </button>
                        </li>

                        <li>
                            <button
                                className={`block text-lg py-2 hover:text-[#c0392b] ${selectedCategory === 'Hobbies & Crafts' ? 'font-bold text-[#c0392b]' : ''
                                    }`}
                                onClick={() => handleCategoryClick('Hobbies & Crafts')} >

                                Hobbies & Crafts
                            </button>
                        </li>

                        <li>
                            <button
                                className={`block text-lg py-2 hover:text-[#c0392b] ${selectedCategory === 'Kids' ? 'font-bold text-[#c0392b]' : ''
                                    }`}

                                onClick={() => handleCategoryClick('Kids')}>
                                Kids
                            </button>
                        </li>

                        <li>
                            <button
                                className={`block text-lg py-2 hover:text-[#c0392b] ${selectedCategory === 'Religion' ? 'font-bold text-[#c0392b]' : ''
                                    }`}

                                onClick={() => handleCategoryClick('Religion')}>
                                Religion
                            </button>
                        </li>
                    </ul>

                    {/* Show Available & Show All Books*/}
                    <button
                        className="block bg-[#c0392b] hover:bg-[#e74c3c] px-4 py-2 text-white text-sm rounded-md mt-4"
                        onClick={handleShowAvailableClick}>

                        {showAvailableOnly ? 'Show All Books' : 'Show Available Books'}
                    </button>

                </div>

                {/* Right Side */}
                <div className="w-full mt-4">

                    <div className='flex flex-col md:flex-row md:justify-between items-center mb-12'>

                        <div className='w-full md:w-1/3'>
                            <p className='text-lg font-medium'>Result for
                                <span className='ms-1 italic text-[#c0392b] text-base '>{selectedCategory}</span>
                            </p>

                            <p>
                                <span className='text-[#c0392b] text-lg font-medium'>{filteredBooks.length} </span>
                                Books found of
                                <span className='text-[#c0392b] text-lg font-medium ms-2'>{allBooks.length}</span>
                            </p>
                        </div>

                        <div className='w-full md:w-1/3'>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Search" />
                                <IoMdSearch  className='text-xl text-[#c0392b]'/>
                            </label>
                        </div>

                        {/* Toggle Card View & Table View */}
                        <div className="flex items-center gap-2">
                            <label htmlFor="viewModeSelect"
                                className="block text-lg font-semibold">
                                View Mode:
                            </label>

                            <select
                                id="viewModeSelect"
                                className="p-2 border border-gray-300 rounded"
                                value={viewMode}
                                onChange={e => handleViewModeChange(e.target.value)}>

                                <option value="card">Card View</option>
                                <option value="table">Table View</option>
                            </select>
                        </div>

                    </div>

                    {viewMode === 'card' ? (
                        <div className="w-auto grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 md:mx-0">
                            {isFiltering ? (
                                <div className="flex justify-center items-center h-full">
                                    <LoadingSpinner />
                                </div>
                            ) : (
                                filteredBooks.map(book => (
                                    <BookCard key={book._id} book={book} />
                                ))
                            )}
                        </div>
                    ) : (
                        <TableView books={filteredBooks} isLoading={isFiltering} />
                    )}
                </div>


            </div>
        </div>
    );
};

export default AllBooks;




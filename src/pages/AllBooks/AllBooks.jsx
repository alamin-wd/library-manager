import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import BookCard from "./BookCard";

const AllBooks = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/allBooks')
            .then(res => res.json())
            .then(data => setAllBooks(data));

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        window.scrollTo(0, 0);
    }, []);

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    return (

        <div className="w-11/12 mx-auto mt-32">
            <Helmet>
                <title>Library Manager | All Books</title>
            </Helmet>

            <div className="w-full flex flex-col md:flex-row gap-20 items-start">

                <div className="w-1/3">
                    <h3 className="text-3xl text-[#151515] font-bold">Category</h3>
                </div>

                <div className="w-auto grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 md:mx-0">
                    {
                        allBooks.map(book => <BookCard
                            key={book._id}
                            book={book}
                        ></BookCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AllBooks;
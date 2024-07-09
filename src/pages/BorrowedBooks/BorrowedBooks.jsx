import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";

const BorrowedBooks = () => {

    const [isLoading, setIsLoading] = useState(true);

  
    useEffect(() => {
  
      setTimeout(() => {
          setIsLoading(false);
      }, 700);
      window.scrollTo(0, 0);
  }, []);
  
  if (isLoading) {
      return <LoadingSpinner></LoadingSpinner>;
  }

    return (

        <div>
            <Helmet>
                <title>Library Manager | Borrowed Books</title>
            </Helmet>
            
        </div>
    );
};

export default BorrowedBooks;
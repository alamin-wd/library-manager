import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";

const AllBooks = () => {

    const [isLoading, setIsLoading] = useState(true);

  
    useEffect(() => {
  
      setTimeout(() => {
          setIsLoading(false);
      }, 1000);
      window.scrollTo(0, 0);
  }, []);
  
  if (isLoading) {
      return <LoadingSpinner></LoadingSpinner>;
  }

    return (

        <div>
            <Helmet>
                <title>Library Manager | All Books</title>
            </Helmet>
            
        </div>
    );
};

export default AllBooks;
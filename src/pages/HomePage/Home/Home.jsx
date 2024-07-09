import { Helmet } from "react-helmet-async";
import Banner from "../../../components/Banner/Banner";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner/LoadingSpinner";

const Home = () => {

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
                <title>Library Manager | Home </title>
            </Helmet>

            <div className="w-full">
                <Banner></Banner>
            </div>

        </div>
    );
};

export default Home;
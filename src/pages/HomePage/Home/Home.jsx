import { Helmet } from "react-helmet-async";
import Banner from "../../../components/Banner/Banner";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner/LoadingSpinner";
import AboutUsCard from "../AboutUs/AboutUsCard";
import AboutImg from "../AboutUs/AboutImg";
import CategoryCard from "../CategoryCard/CategoryCard";

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

            {/* About Us Section */}
            <div className="w-11/12 mx-auto my-10">
                <div className="w-full md:w-2/3 md:mx-auto text-center">
                    <h3 className="text-[#151515] text-2xl md:text-4xl font-semibold md:font-bold mb-4">About Us</h3>
                    <p className="text-[#737373] mb-6">
                        Welcome to Library Manager, your platform for managing your book collection. <br /> Easily add, update, borrow, and return books. Join our community of book lovers and experience a seamless way to organize and enjoy your library.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 md:h-[400px] mt-10">
                    <div className="col-span-2">
                        {
                            <AboutUsCard></AboutUsCard>
                        }
                    </div>
                    <div className="h-full">
                        {
                            <AboutImg></AboutImg>
                        }
                    </div>
                </div>
            </div>

            {/* Category Section */}
            <div className="w-11/12 mx-auto mt-20">
                <div className="w-full md:w-2/3 md:mx-auto text-center">
                    <h3 className="text-[#151515] text-2xl md:text-4xl font-semibold md:font-bold mb-4">Our Category</h3>
                    <p className="text-[#737373] mb-6">
                        Welcome to Library Manager, your platform for managing your book collection. <br /> Easily add, update, borrow, and return books. Join our community of book lovers and experience a seamless way to organize and enjoy your library.
                    </p>
                </div>

                <div>
                    {
                        <CategoryCard></CategoryCard>
                    }
                </div>

            </div>

        </div>
    );
};

export default Home;
import { Helmet } from "react-helmet-async";
import Banner from "../../../components/Banner/Banner";

const Home = () => {

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
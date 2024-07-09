import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";

const Root = () => {

    return (

        <div className="max-w-full">

            <Navbar></Navbar>

            <div className="mt-16">
                <div className="min-h-[calc(100vh-450px)]">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;
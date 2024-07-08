import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";

const Root = () => {

    return ( 

        <div className="max-w-full px-10">

            <Navbar></Navbar>

            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;
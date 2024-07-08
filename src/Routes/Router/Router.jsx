
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/HomePage/Home/Home";
import Root from "../../pages/Root/Root";
import AllBooks from "../../pages/AllBooks/AllBooks";
import BorrowedBooks from "../../pages/BorrowedBooks/BorrowedBooks";
import AddBooks from "../../pages/AddBooks/AddBooks";
import SignUp from "../../pages/SignUp/SignUp";
import SignIn from "../../pages/SignIn/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },

            {
                path: "/all-books",
                element: <AllBooks></AllBooks>,
            },

            {
                path: "/borrowed-books",
                element: <BorrowedBooks></BorrowedBooks>,
            },

            {
                path: "/add-books",
                element: <AddBooks></AddBooks>,
            },

            {
                path: "/signUp",
                element: <SignUp></SignUp>,
            },

            {
                path: "/signIn",
                element: <SignIn></SignIn>,
            }
        ]
    },
]);

export default router;
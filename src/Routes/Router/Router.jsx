
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/HomePage/Home/Home";
import Root from "../../layouts/Root/Root";
import AllBooks from "../../pages/AllBooks/AllBooks";
import BorrowedBooks from "../../pages/BorrowedBooks/BorrowedBooks";
import AddBooks from "../../pages/AddBooks/AddBooks";
import SignUp from "../../authentication/SignUp/SignUp";
import SignIn from "../../authentication/SignIn/SignIn";
import BookUpdateForm from "../../pages/BookUpdateForm/BookUpdateForm";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },

            {
                path: "/all-books",
                element: <AllBooks></AllBooks>,
            },

            {
                path: "/borrowed-books",
                element: <BorrowedBooks></BorrowedBooks>,
                // element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
            },

            {
                path: "/add-books",
                element: <AddBooks></AddBooks>,
                // element: <PrivateRoute><AddBooks></AddBooks></PrivateRoute>,
            },

            {
                path: "/update-book",
                element: <BookUpdateForm></BookUpdateForm>,
                // element: <PrivateRoute><AddBooks></AddBooks></PrivateRoute>,
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
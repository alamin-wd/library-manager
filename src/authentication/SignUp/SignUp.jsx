import { Link, useNavigate } from "react-router-dom";
import SocialLogins from "../SocialLogins/SocialLogins";
import { useContext, useEffect, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Helmet } from "react-helmet-async";
import bgImg from "../../assets/signUp/bgImg.jpg";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {

    const { createUser, user, setUser } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;

        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        const isPasswordValid = validatePassword(password);

        if (!isPasswordValid) {
            Swal.fire({
                html: 'Password must contain:<br>- At least one uppercase letter<br>- At least one lowercase letter<br>- Minimum 6 characters',
                confirmButtonText: 'OK'
            });
            return;
        }

        createUser(email, password, userName, photoURL)
            .then(result => {
                console.log(result);

                const user = { userName, email, password, photoURL };

                fetch('https://art-vista-server.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Congratulation!',
                                text: 'You have Successfully Sign Up',
                                icon: 'success',
                                confirmButtonText: 'Next'
                            })
                                .then(() => {
                                    navigate('/');
                                    form.reset();
                                });
                        }
                    })
            })
            .catch(error => {
                console.error(error);
            })

    };

    //To validate password
    const validatePassword = (password) => {

        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const lengthRequirement = password.length >= 6;

        return uppercaseRegex.test(password) && lowercaseRegex.test(password) && lengthRequirement;
    };

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 500);
        window.scrollTo(0, 0);
    }, []);

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    return (

        <div>
            <Helmet>
                <title>Sign Up | Library Manager</title>
            </Helmet>

            <div className="mt-6 py-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 ...">
                <div className="text-center">


                </div>

                <div className="w-3/4 mx-auto flex flex-col md:flex-row md:justify-center md:items-center my-10">

                    <div className="w-full md:w-1/2 md:h-[708px]">
                        <img className="w-full h-full rounded-l-none md:rounded-l-xl" src={bgImg} alt="" />
                    </div>

                    <div className="w-full md:rounded-none md:rounded-r-xl max-w-sm shadow-2xl bg-base-100 text-center ">

                        <h3 className="text-4xl font-bold mt-4">Sign Up</h3>

                        <form onSubmit={handleSignUp}
                            className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered" required />
                            </div>

                            <div className="form-control relative">

                                <label className="label">
                                    <span className="label-text text-[#403F3F] font-medium">Password</span>
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered" />

                                <button className="absolute inset-y-0 right-3 mt-8"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setShowPassword(!showPassword);
                                    }}>

                                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                </button>

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Photo URL</span>
                                </label>
                                <input
                                    type="url"
                                    name="photoURL"
                                    placeholder="PhotoURL"
                                    className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Sign Up"
                                    className="bg-[#c0392b] hover:bg-[#e74c3c] py-3 rounded-lg text-white font-medium" />
                            </div>

                        </form>

                        <div className="w-10/12 mx-auto text-center space-y-4 mb-4">

                            <h3 className="font-medium text-[#737373]">
                                <span className="text-[#444444] text-lg font-semibold mr-1">Or</span>
                                Continue With
                            </h3>

                            <div className="">
                                {
                                    <SocialLogins></SocialLogins>
                                }
                            </div>

                            <p className="text-[#737373]">Already have an account?
                                <span className="px-1 text-[#c0392b] hover:text-[#e74c3c] font-medium hover:underline">
                                    <Link to={"/signIn"}>Sign In</Link>
                                </span>
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default SignUp;


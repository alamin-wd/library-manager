
import { useContext, useEffect, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import SocialLogins from "../SocialLogins/SocialLogins";
import { Helmet } from "react-helmet-async";
import bgImg from "../../assets/signUp/bgImg.jpg";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {

  const { signIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleSignIn = async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value

    try {

      await signIn(email, password);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'You have successfully signed in!',
        confirmButtonColor: '#3085d6'
      });

      form.reset();

      navigate(location.state?.from || "/");
    }
    catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Please use valid Email & Password",
        confirmButtonColor: '#d33'
      });
    }
  };

  useEffect(() => {

    setIsLoading(false);

    window.scrollTo(0, 0);

  }, []);

  if (user) {
    return <Navigate to={location.state?.from || "/"} replace />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (

    <div>

      <Helmet>
        <title>Library Manager</title>
      </Helmet>

      <div className="mt-6 py-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">

        <div className="w-3/4 mx-auto flex flex-col md:flex-row md:justify-center md:items-center my-10">

          <div className="w-full md:w-1/2 md:h-[523px]">
            <img className="w-full h-full rounded-l-none md:rounded-l-xl" src={bgImg} alt="" />
          </div>

          <div className="w-full md:rounded-none rounded-r-none md:rounded-r-xl max-w-sm shadow-2xl bg-base-100 text-center">

            <h3 className="text-4xl font-bold mt-4">Sign In</h3>

            <form onSubmit={handleSignIn} className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-[#403F3F] font-medium">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <button className="absolute inset-y-0 right-3 mt-8" onClick={(e) => {
                  e.preventDefault();
                  setShowPassword(!showPassword);
                }}>
                  {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                </button>
              </div>

              <div className="form-control mt-6">
                <input type="submit" value="Sign In" className="bg-[#c0392b] hover:bg-[#e74c3c] py-3 rounded-lg text-white font-medium" />
              </div>

            </form>

            <div className="w-10/12 mx-auto text-center space-y-4 mb-4">

              <h3 className="font-medium text-[#737373]">
                <span className="text-[#444444] text-lg font-semibold mr-1">Or</span> Continue With
              </h3>

              <SocialLogins />

              <p className="text-[#737373]">Don't have an account?
                <span className="px-1 text-[#c0392b] hover:text-[#e74c3c] font-medium hover:underline">
                  <Link to={"/signUp"}>Sign Up</Link>
                </span>

              </p>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

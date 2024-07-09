import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogins = () => {

    const { googleLogin, githubLogin, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                navigate("/"); 
            })
            .catch(error => {
                console.error(error);
                setLoading(false); 
            });
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                console.log(result.user);
                navigate("/"); 
            })
            .catch(error => {
                console.error(error);
                setLoading(false); 
            });
    }
    
    return (
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
 
            <button onClick={handleGoogleLogin}
                className="w-full md:w-[145px] btn btn-outline hover:bg-[#0F9D58] text-[#0F9D58] text-lg">
                <FaGoogle />
                Google
            </button>
            
            <button onClick={handleGithubLogin}
                className="w-full md:w-[145px] btn btn-outline file:text-lg">
                <FaGithub />
                Github
            </button>

        </div>
    );
};

export default SocialLogins;
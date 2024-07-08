import { NavLink } from "react-router-dom";

const Footer = () => {

    return (

        <div className="mt-20">
            <footer className="footer bg-base-200 text-base-content p-14">
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <NavLink to="/" className="hover:underline">Home</NavLink>
                    <NavLink to="/all-books" className="hover:underline">All Books</NavLink>
                    <NavLink to="/borrowed-books" className="hover:underline">Borrowed Books</NavLink>
                    <NavLink to="/add-books" className="hover:underline">Add Books</NavLink>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="bg-[#c0392b] hover:bg-[#e74c3c] px-4 py-2 text-white join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>

            <div className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © ${new Date().getFullYear()} - All right reserved by Library Manager</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;
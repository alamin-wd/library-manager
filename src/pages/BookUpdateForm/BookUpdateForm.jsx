import { IoIosArrowDown } from "react-icons/io";

const BookUpdateForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (

        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 my-10 w-full max-w-5xl ">

                <div className='text-center mb-6'>
                    <h2 className="text-[#151515] text-xl md:text-3xl font-semibold md:font-semibold mb-4">Update Book Information</h2>
                    <p className='text-[#737373] italic text-sm'>
                        Please update the book information below. Modify the book name, author's name, select the appropriate category, adjust the rating between 1 and 5, and update the image URL if needed. Ensure all fields are completed before submitting.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-20">
                        <div>
                            <img src="https://i.ibb.co/Qb723hx/The-Goldfinch.jpg" alt="" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="bookName"
                                    placeholder="Book Name"
                                    className="input input-bordered text-gray-800" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Author Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="authorName"
                                    placeholder="Author Name"
                                    className="input input-bordered text-gray-800"

                                    required />
                            </div>

                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Category</span>
                                </label>
                                <select
                                    name="category"
                                    className="input input-bordered text-gray-800 appearance-none pr-10"
                                    required>

                                    <option value="">Select a category</option>
                                    <option value="Arts & Music">Arts & Music</option>
                                    <option value="Biographies">Biographies</option>
                                    <option value="Home & Garden">Home & Garden</option>
                                    <option value="Hobbies & Crafts">Hobbies & Crafts</option>
                                    <option value="Kids">Kids</option>
                                    <option value="Religion">Religion</option>
                                </select>

                                <div className="pointer-events-none absolute inset-y-0 right-0 top-11 flex items-center px-2 text-gray-800">
                                    <IoIosArrowDown />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Rating</span>
                                </label>
                                <input
                                    type="number"
                                    name="rating"
                                    placeholder="Rating"
                                    className="input input-bordered text-gray-800"

                                    min="1"
                                    max="5"
                                    required
                                />
                            </div>

                            <div className="form-control md:col-span-2">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Image</span>
                                </label>
                                <input
                                    type="url"
                                    name="image"
                                    placeholder="Use Image URL"
                                    className="input input-bordered text-gray-800"

                                    required
                                />
                            </div>

                            <div className="mt-6 md:col-span-2">
                                <button
                                    type="submit"
                                    className="w-full bg-[#c0392b] hover:bg-[#e74c3c] text-white text-lg font-medium py-2 rounded-lg">
                                    Submit
                                </button>
                            </div>

                        </div>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default BookUpdateForm;
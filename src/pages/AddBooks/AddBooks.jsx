import { useState } from 'react';

const AddBook = () => {
    const [formData, setFormData] = useState({
        bookName: '',
        authorName: '',
        category: '',
        quantity: '',
        image: '',
        rating: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 my-10 w-full max-w-4xl ">

                <div className='text-center mb-6'>
                    <h2 className="text-[#151515] text-2xl md:text-4xl font-semibold md:font-bold mb-4">Add Book</h2>
                    <p className='text-[#737373]'>
                        Add new books effortlessly with our user-friendly form. Input details like book name, author, category, and more. Keep your library organized and up-to-date with ease.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Name</span>
                            </label>
                            <input
                                type="text"
                                name="bookName"
                                placeholder="Book Name"
                                className="input input-bordered text-gray-800"
                                value={formData.bookName}
                                onChange={handleChange}
                                required
                            />
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
                                value={formData.authorName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Category</span>
                            </label>
                            <input
                                type="text"
                                name="category"
                                placeholder="Category"
                                className="input input-bordered text-gray-800"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Quantity</span>
                            </label>
                            <input
                                type="number"
                                name="quantity"
                                placeholder="Quantity"
                                className="input input-bordered text-gray-800"
                                value={formData.quantity}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Image</span>
                            </label>
                            <input
                                type="url"
                                name="image"
                                placeholder="Image URL"
                                className="input input-bordered text-gray-800"
                                value={formData.image}
                                onChange={handleChange}
                                required
                            />
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
                                value={formData.rating}
                                onChange={handleChange}
                                min="1"
                                max="5"
                                required
                            />
                        </div>

                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Description</span>
                            </label>
                            <textarea
                                name="description"
                                placeholder="Short description"
                                className="textarea textarea-bordered h-20 text-gray-800"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-[#c0392b] hover:bg-[#e74c3c] text-white text-lg font-medium py-2 rounded-lg">
                            Add Book
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddBook;

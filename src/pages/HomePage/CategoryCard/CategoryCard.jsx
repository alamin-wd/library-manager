
import { NavLink } from 'react-router-dom';
import categoryCard1 from "../../../assets/categories-img/Art&Music-bg.png";
import categoryCard2 from "../../../assets/categories-img/Biographies-bg.png";
import categoryCard3 from "../../../assets/categories-img/Home&Garden-bg.png";
import categoryCard4 from "../../../assets/categories-img/Hobbies-bg.png";
import categoryCard5 from "../../../assets/categories-img/kid's-bg.png";
import categoryCard6 from "../../../assets/categories-img/religion-bg.png";

const categories = [
    { name: 'Arts & Music', image: categoryCard1, route: '/category/arts-music' },
    { name: 'Biographies', image: categoryCard2, route: '/category/biographies' },
    { name: 'Home & Garden', image: categoryCard3, route: '/category/home-garden' },
    { name: 'Hobbies & Crafts', image: categoryCard4, route: '/category/hobbies-crafts' },
    { name: 'Kids', image: categoryCard5, route: '/category/kids' },
    { name: 'Religion', image: categoryCard6, route: '/category/religion' },
];

const CategoryCard = () => {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (

                <div key={index}
                    className="h-[300px] flex flex-col items-center gap-3 border-2 hover:border-[#e74c3c] rounded-lg p-6 transition ease-in-out transform hover:scale-105">

                    <div className="w-[200px] h-[200px]">
                        <img className="w-full h-full rounded-lg" src={category.image} alt={`${category.name} Image`} />
                    </div>

                    <h4 className="text-[#444444] text-lg font-semibold">{category.name}</h4>

                    <NavLink to={category.route}>
                        <button className="bg-[#c0392b] hover:bg-[#e74c3c] px-4 py-2 text-white text-md rounded-lg mt-2">
                            View Books
                        </button>
                    </NavLink>

                </div>
            ))}
        </div>
    );
};

export default CategoryCard;

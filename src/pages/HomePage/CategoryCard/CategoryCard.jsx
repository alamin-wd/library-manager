import { BsFilePersonFill } from "react-icons/bs";
import { FaHome, FaMusic } from "react-icons/fa";
import { GiStoneCrafting } from "react-icons/gi";

const CategoryCard = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            <div className="border-2 rounded-lg text-center p-6">
                <div className="bg-[#2980B9] p-3 rounded-lg  w-24 h-24 text-center mx-auto my-4">
                    <FaMusic className="text-[#c0392b] text-5xl ms-2 mt-3 " />
                </div>
                <h4 className="text-[#444444] text-2xl mt-6 font-semibold">Art & Music</h4>
            </div>

            <div className="border-2 rounded-lg text-center p-6">
                <div className="bg-[#36C2CE] p-3 rounded-lg  w-24 h-24 text-center mx-auto my-4">
                    <BsFilePersonFill className="text-[#c0392b] text-5xl ms-2 mt-3 " />
                </div>
                <h4 className="text-[#444444] text-2xl mt-6 font-semibold">Biographies</h4>
            </div>

            <div className="border-2 rounded-lg text-center p-6">
                <div className="bg-[#B784B7] p-3 rounded-lg  w-24 h-24 text-center mx-auto my-4">
                    <FaHome className="text-[#c0392b] text-5xl ms-2 mt-3 " />
                </div>
                <h4 className="text-[#444444] text-2xl mt-6 font-semibold">Home & Garden</h4>
            </div>

            <div className="border-2 rounded-lg text-center p-6">
                <div className="bg-[#FFB200] p-3 rounded-lg  w-24 h-24 text-center mx-auto my-4">
                    <GiStoneCrafting className="text-[#c0392b] text-5xl ms-2 mt-3 text-center" />
                </div>
                <h4 className="text-[#444444] text-2xl mt-6 font-semibold">Hobbies & Crafts</h4>
            </div>

        </div>
    );
};

export default CategoryCard;
import { FaSwatchbook } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { TbBuildingCommunity } from "react-icons/tb";

const AboutUsCard = () => {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 h-full">
            <div className="space-y-3">
                <FaSwatchbook className="text-3xl text-[#c0392b] hover:text-[#e74c3c]" />
                <h4 className="text-[#444444] text-xl md:text-2xl font-semibold">Smart Book Management</h4>
                <p className="text-[#737373]">Effortlessly manage your books: add, update, borrow, and return on a user-friendly platform.</p>
            </div>

            <div className="space-y-3">
                <MdOutlinePersonalInjury className="text-3xl text-[#c0392b] hover:text-[#e74c3c]" />
                <h4 className="text-[#444444] text-xl md:text-2xl font-semibold">Personalized Collection</h4>
                <p className="text-[#737373]">Organize your library by editing book details to reflect your unique reading preferences.</p>
            </div>

            <div className="space-y-3">
                <TbBuildingCommunity className="text-3xl text-[#c0392b] hover:text-[#e74c3c]" />
                <h4 className="text-[#444444] text-xl md:text-2xl font-semibold">Community of Readers</h4>
                <p className="text-[#737373]">Join book lovers, share favorites, get recommendations, and connect with readers.</p>
            </div>

            <div className="space-y-3">
                <GiReturnArrow className="text-3xl text-[#c0392b] hover:text-[#e74c3c]" />
                <h4 className="text-[#444444] text-xl md:text-2xl font-semibold">Borrowing and Returning</h4>
                <p className="text-[#737373]">Enjoy hassle-free borrowing and returning with our system that tracks and ensures timely returns.</p>
            </div>
        </div>
    );
};

export default AboutUsCard;
import { Link } from "react-router-dom";
import book_img from "../../assets/kindpng_7318921.png";
const Banner = () => {
    return (
        <div className="max-w-7xl max-h-[550px] ml-8 rounded-2xl p-20 flex justify-around bg-gray-200">
            <div className="mt-20">
                <h1 className="text-playfair-display-font text-5xl font-bold">Books to freshen up <br />your bookshelf</h1>
                <Link to="/listed-book"><button className="btn text-white bg-[#23BE0A] mt-10">View The List</button></Link>
            </div>
            <div>
                <img className="w-[318px] h-[394px]" src={book_img} alt="" /> 
            </div>
        </div>
    );
};

export default Banner;
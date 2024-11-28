import { CiStar } from "react-icons/ci";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const Book = ({book}) => {
    const {bookId, image, tags, bookName, author, category, rating} = book;
    return (
        <Link to={`/book-detail/${bookId}`}>
            <div className="border-2 p-8 ml-5 rounded-2xl">
                <div className="flex justify-center w-80 bg-gray-200 p-5 rounded-2xl">
                    <img className="items-center" src={image} alt="" />
                </div>
                <div className="mt-5">
                    <div className="flex gap-10 text-work-sans-font text-base font-medium text-[#23BE0A] mt-5">
                        <p>{tags[0]}</p>
                        <p>{tags[1]}</p>
                    </div>
                    <p className="text-playfair-display-font text-2xl font-bold mt-5">{bookName}</p>
                    <p className="text-work-sans-font text-base font-medium">By: {author}</p>
                    <div className="flex justify-between text-work-sans-font text-base font-medium mt-5">
                        <p>{category}</p>
                        <div className="flex gap-2">
                            {rating}
                            <CiStar className="text-xl"></CiStar>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;
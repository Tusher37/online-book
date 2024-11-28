import { IoPeopleOutline } from "react-icons/io5";
import { TbPageBreak } from "react-icons/tb";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ReadListBook = ({book}) => {
    const {bookId} = book;
    return (
        <div className='flex gap-5 border-2 rounded-xl p-5 mt-5'>
            <div className='flex justify-center rounded-xl bg-gray-200 p-8'>
                <img className='w-[230px] h-[230px]' src={book.image} alt="" />
            </div>
            <div>
                <div>
                    <h2 className='text-playfair-display-font text-2xl font-bold mt-5'>{book.bookName}</h2>
                    <p className='text-work-sans-font text-base font-medium mt-5'>By: {book.author} </p>
                    <p className='flex gap-5 text-work-sans-font text-base font-medium mt-5'><span className='font-bold'>Tag</span>
                        <div className='flex gap-6'>
                            <p className='text-[#23BE0A]'>#{book.tags[0]}</p>
                            <p className='text-[#23BE0A]'>#{book.tags[1]}</p>
                            <p>Year of Publishing: {book.yearOfPublishing}</p>
                        </div>
                    </p>
                    <div className='flex gap-8 mt-5'>
                        <div className='flex gap-1'>
                            <p className="text-xl"><IoPeopleOutline /></p>
                            <p>Publisher: {book.publisher}</p>
                        </div>
                        <div className='flex gap-1'>
                            <p className="text-xl"><TbPageBreak /></p>
                            <p>Page: {book.totalPages}</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 mt-5">
                    <p className="bg-blue-200 text-blue-600 text-base font-normal px-3 p-2 rounded-lg">Category: {book.category}</p>
                    <p className="bg-orange-200 text-orange-600 text-base font-normal px-2  p-2 rounded-lg">Rating: {book.rating}</p>
                    <Link to={`/book-detail/${bookId}`}><button className='text-white bg-[#23BE0A] text-base font-normal px-3  p-2 rounded-lg'>View Details</button></Link>
                </div>
            </div>
        </div>
    );

};

ReadListBook.propTypes = {
    book: PropTypes.object
}

export default ReadListBook;
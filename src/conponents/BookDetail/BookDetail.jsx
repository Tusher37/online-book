import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {saveBookList, saveWishList } from "../Utility/localStorage";

const BookDetail = () => {
    const books = useLoaderData();
    const {bookId} = useParams();
    // console.log(bookId, book)
    const bookIdInt = parseInt(bookId);
    // console.log(bookIdInt)
    const book = books.find(book => book.bookId === bookIdInt);
    // console.log(book)

    const handleReadlist = () => {
        saveBookList(bookIdInt);
        
    }
    const handleWishlist = () => {
        saveWishList(bookIdInt);

    }

    return (
        <div className="flex gap-5 max-w-7xl ml-8 mb-8">
            <div className="flex justify-center rounded-lg bg-gray-200 w-2/5">
                <img className="w-[250px] h-[250px] mt-32" src={book.image} alt="" />
            </div>
            <div className="w-3/5">
                <p className="text-playfair-display-font text-4xl font-bold">{book.bookName}</p>
                <p className="text-work-sans-font text-xl font-medium mt-3">By: {book.author}</p>
                <p className="text-work-sans-font text-xl font-medium  mt-2">{book.category}</p>
                <p className="text-work-sans-font text-base font-normal  mt-2"><span className="font-bold  mt-2">Review:</span> {book.review}</p>
                <p className="text-work-sans-font flex gap-4  mt-5"><span className="font-bold">Tag</span>    
                    <div className="flex gap-10">  
                        <p className="text-[#23BE0A]">#{book.tags[0]} 
                        </p>
                        <p className="text-[#23BE0A]">#{book.tags[1]}</p>
                    </div>
                </p>
                <p className="text-work-sans-font  mt-3">Number of Pages: <span className="font-bold">{book.totalPages}</span></p>
                <p className="text-work-sans-font  mt-2">Publisher: <span className="font-bold">{book.publisher}</span></p>
                <p className="text-work-sans-font  mt-2">Year of Publishing: <span className="font-bold">{book.yearOfPublishing}</span></p>
                <p className="text-work-sans-font  mt-2">Rating: <span className="font-bold">{book.rating}</span></p>
                <div className="flex flex-row gap-2  mt-5">
                    <button onClick={() => handleReadlist()} className="border-2 p-2 px-4 text-work-sans-font text-lg font-semibold">Read</button>
                    <button onClick={() => handleWishlist()} className="border-2 p-2 px-4 bg-[#50B1C9] rounded-lg text-work-sans-font text-white text-lg font-semibold">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetail;
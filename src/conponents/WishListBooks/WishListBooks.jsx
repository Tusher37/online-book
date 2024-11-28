import { useEffect, useState } from "react";
import { getStoredWishList } from "../Utility/localStorage";
import WishListBook from "../WishListBook/WishListBook";

const WishListBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('/bookData.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])

    const [displayStoredWishListBooks, setDisplayStoredWishListBooks] = useState([]);
    useEffect(() => {
        const storedWishListBooksIds = getStoredWishList();
        if(books.length >0){
            const storedWishBooks = [];
            for(const id of storedWishListBooksIds){
                const book = books.find(book => book.bookId === id);
                if(book){
                    storedWishBooks.push(book);
                }
            }
            setDisplayStoredWishListBooks(storedWishBooks);
        }
    },[books])

    return (
        <div className="mt-8">
            {
                displayStoredWishListBooks.map(book => <WishListBook  key={book.bookId} book={book}></WishListBook>)
            }
        </div>
    );
};

export default WishListBooks;
import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/bookData.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])

    return (
        <div className="mt-10">
            <h2 className="text-5xl text-center font-bold mb-8">Books</h2>
            <div className="grid grid-cols-3 gap-5 max-w-7xl ml-8 mb-10">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;
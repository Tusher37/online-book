import { useEffect, useState } from "react";
import ReadListBook from "../ReadListBook/ReadListBook";
import { getStoredReadList } from "../Utility/localStorage";

const ReadBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('/bookData.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])


    const [displayStoredReadBooksList, setDisplayStoredReadBooksList] = useState([]);
    useEffect(() => {
        const storedReadBookListIds = getStoredReadList();
        if(books.length >0){
            const storedReadBooks = [];
            for(const id of storedReadBookListIds){
                const book = books.find(book => book.bookId === id);
                if(book){
                    storedReadBooks.push(book);
                }
            }
            setDisplayStoredReadBooksList(storedReadBooks);
        }
    },[books])

    return (
        <div className="mt-8">
            {
                displayStoredReadBooksList.map(book => <ReadListBook  key={book.bookId} book={book}></ReadListBook>)
            }
        </div>
    );
};

export default ReadBooks;
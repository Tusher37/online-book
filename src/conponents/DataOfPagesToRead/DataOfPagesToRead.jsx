import { useEffect, useState } from "react";
import { getStoredReadList } from "../Utility/localStorage";
import PagesToRead from "../PagesToRead/PagesToRead";

const DataOfPagesToRead = () => {
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
                displayStoredReadBooksList.map(book => <PagesToRead  key={book.bookId} book={book}></PagesToRead>)
            }
        </div>
    );
};

export default DataOfPagesToRead;
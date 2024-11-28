import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getStoredReadList = () => {
    const storedBookList = localStorage.getItem('book-list');
    if(storedBookList){
        return JSON.parse(storedBookList);
    }
    return [];
}
const getStoredWishList = () => {
    const storedWishList = localStorage.getItem('wish-list');
    if(storedWishList){
        return JSON.parse(storedWishList);
    }
    return [];
}
const saveBookList = bookId => {
    console.log(bookId)
    const storedBookList = getStoredReadList();
    const exists = storedBookList.find(lisedBookId => lisedBookId === bookId);
    if(exists){
        console.log('Already exist!');
        toast('Already added in the read list');
    }
    else{
        storedBookList.push(bookId);
        localStorage.setItem('book-list', JSON.stringify(storedBookList));
        toast('Successfully added to the book list');
    }
}
const saveWishList = bookId => {
    const storedBookList = getStoredReadList();
    const r_exist = storedBookList.find(lisedBookId => lisedBookId === bookId);
    if(r_exist){
        toast('Already in read list can not add to wish list');
    }
    else{
        const storedWishList = getStoredWishList();
        const exists = storedWishList.find(lisedWishBookId => lisedWishBookId === bookId);
        if(exists){
            toast('Already added in wish list');
        }
        if(!exists){
            const storedBookList = getStoredReadList();
            const exist = storedBookList.find(lisedBookId => lisedBookId === bookId);
            if(exist){
                toast('Already in read list can not add to wish list');
            }
            else{
                storedWishList.push(bookId);
                localStorage.setItem('wish-list', JSON.stringify(storedWishList));
                toast('Successfully added to wish list');
            }
        }
    }
}

export {getStoredReadList, saveBookList, getStoredWishList, saveWishList}
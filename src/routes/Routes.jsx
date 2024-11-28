import { createBrowserRouter } from "react-router-dom";
import Root from "../conponents/Root/Root";
import Home from "../conponents/Home/Home";
import ListedBooks from "../conponents/ListedBooks/ListedBooks";
import PagesToRead from "../conponents/PagesToRead/PagesToRead";
import BookDetail from "../conponents/BookDetail/BookDetail";
import ReadBooks from "../conponents/ReadBooks/ReadBooks";
import WishListBooks from "../conponents/WishListBooks/WishListBooks";
import ErrorPage from "../conponents/PageNotFound/PageNotFound";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/listed-book',
          element: <ListedBooks></ListedBooks>,
          children: [
            {
                index: true,
                element: <ReadBooks></ReadBooks>
            },
            {
                path: 'wish-list-books',
                element: <WishListBooks></WishListBooks>
            },
          ]
        },
        {
          path: '/pages-to-read',
          element: <PagesToRead></PagesToRead>
        },
        {
          path: '/book-detail/:bookId',
          element: <BookDetail></BookDetail>,
          loader: () => fetch('/bookData.json')
        }
      ]
    },
]);
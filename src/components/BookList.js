import React from "react";
import Book from "./Book";

const BookList = ({books}) => {
    return ( 
        <ul>
            {
                books.items.map((book, index) => {
                    return (
                     <Book book={book} key={index} />
                    );
                })
            }
        </ul>
     );
}
 
export default BookList;
import React from "react";
import { bookAuthors } from "../utils";

const Book = ({book}) => {
    return (
        <>
        <li>
          <div>
            <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
            <div>
              <h3>{book.volumeInfo.title}</h3>
              <p>{bookAuthors(book.volumeInfo.authors)}</p>
              <p>{book.volumeInfo.publishedDate}</p>
            </div>
          </div>
          <hr/>
        </li>
        
        </> 
     );
}
 
export default Book;

import React, { useState } from "react";
import axios from 'axios';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import saveTrees from '../svgs/search.svg';
import './SearchPage.css';
import Loading from "../components/Loading";
import BookList from "../components/BookList";
import BookSearchForm from "../components/BookSearchForm";


function SearchPage() {
    const iconStyles = { color: "white", fontSize: "2.5rem" };
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState({ items: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    let API_URL = `https://www.googleapis.com/books/v1/volumes`;

    const fetchBooks = async () => {
        setLoading(true);
        try {
            const result = await axios.get(`${API_URL}?q=${searchTerm}`);
            setBooks(result.data);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
        setLoading(false);
    };

    const searchInputHandler = (e) => {
        setSearchTerm(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        fetchBooks();
    };

    const bookAuthors = authors => {
        if (authors.length <= 2) {
            authors = authors.join(' and ');
        } else if (authors.length > 2) {
            let lastAuthor = ' and ' + authors.slice(-1);
            authors.pop();
            authors = authors.join(', ');
            authors += lastAuthor;
        }
        return authors;
    };


    return (
        <div className="App">
            <nav className="navbar">
                <div className="container">
                    <div className="title">
                        <h3 className="title">Surebooks</h3>
                    </div>
                    <div className="links">
                        <a href="">About</a>
                        <a href="">Contact</a>
                    </div>
                </div>
            </nav>
            <div className="search-container">
                <div className="ban-books">
                    <p >
                        You do not need to know the name of the book, if you know the name of the author or publisher, just type, search and find
                    </p>
                </div>
                <div>
                    <BookSearchForm submitHandler={submitHandler} searchInputHandler={searchInputHandler} searchTerm={searchTerm} error={error} />
                    {loading && <Loading searchTerm={searchTerm} />}
                </div>
                <ul>
                    {
                        books.items.map((book, index) => {
                            return (
                                <li key={index}>
                                    <div>
                                        <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                                        <div>
                                            <h3>{book.volumeInfo.title}</h3>
                                            <p>{book.volumeInfo.publishedDate}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </li>
                            );
                        })
                    }
                </ul>
                <div className='damn-books'>
                    <img src={saveTrees} alt="save the damn trees" />
                </div>

            </div>
            <footer>
                <div className='footer-container'>
                    <div>
                        <p><span>Surebooks</span></p>
                    </div>
                    <div>
                        <p>© Copyright 2020 LuisFrag. All rights reserved.</p>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/dunsin-ajibabi-7921b4224/'>
                            <AiFillLinkedin style={iconStyles} />
                        </a>
                        <a href='https://github.com/Gaisensai'>
                            <AiFillGithub style={iconStyles} />
                        </a>
                    </div>
                </div>
            </footer>
            {/* <section>
                <BookSearchForm submitHandler={submitHandler} searchInputHandler={searchInputHandler} searchTerm={searchTerm} error={error} />
                {loading && <Loading searchTerm={searchTerm} />}
            </section> */}
            {/* <BookList books={books} bookAuthors={bookAuthors} /> */}
        </div>
    );
}

export default SearchPage;

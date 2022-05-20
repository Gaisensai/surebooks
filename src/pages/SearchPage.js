import React, { useState } from "react";
import axios from 'axios';
import Loading from "../components/Loading";
import BookList from "../components/BookList";
import BookSearchForm from "../components/BookSearchForm";


function SearchPage() {

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
            <section>
                <BookSearchForm submitHandler={submitHandler} searchInputHandler={searchInputHandler} searchTerm={searchTerm} error={error} />
                {loading && <Loading searchTerm={searchTerm} />}
            </section>
            <BookList books={books} bookAuthors={bookAuthors} />
        </div>
    );
}

export default SearchPage;

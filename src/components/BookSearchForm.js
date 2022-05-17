const BookSearchForm = ({submitHandler, searchTerm, searchInputHandler, error}) => {
    return ( 
        <form onSubmit={submitHandler}>
            <label>
                <span>Search for Books</span>
                <input
                    type="search"
                    placeholder="microservice, restful design, etc.,"
                    value={searchTerm}
                    onChange={searchInputHandler}
                    required
                />
                <button type="submit" >search</button>
            </label>
            {error && <div style={{ color: 'red' }}>Some error occured...couldn't fetch books</div>}
        </form>
     );
}
 
export default BookSearchForm;
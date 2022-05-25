import './BookSearch.css';

const BookSearchForm = ({submitHandler, searchTerm, searchInputHandler, error}) => {
    return ( 
        <form onSubmit={submitHandler}>
            <label>
                    <input
                        type="search"
                        placeholder="title, author, publisher"
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
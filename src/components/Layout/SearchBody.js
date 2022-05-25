import './SearchBody.css';
import saveTrees from '../../svgs/search.svg';


const Search = () => {
    return ( 
        <>
            <div className="search-container">
                <div className="ban-books">
                    <p >
                        You do not need to know the name of the book, if you know the name of the author or publisher, just type, search and find   
                    </p>
                </div>
                <div className='form-control'>
                    <input />
                    <button>search</button>
                </div>
                <div className='damn-books'>
                    <img src={saveTrees} alt= "save the damn trees" />
                </div>

            </div>
        </>
     );
}
 
export default Search;
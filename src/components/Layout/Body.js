import React from "react";
import mySvg from '../../svgs/main-apresentation.svg';
import hateBook from '../../svgs/home-1.svg';
import dislikeBooks from '../../svgs/home-2.svg';
import tearBooks from '../../svgs/home-3.svg';
import './Body.css';

const Body = () => {
    return ( 
        <>
            <div className="body-container">
                <div className="row-one">
                    <div className="read">
                        <p className="intro">Find the books you<br/> are looking for anywhere</p>
                        <div className="search">
                            <p>Search for books anywhere, you don't need to know the name of the book, if you know the name of the author or the publisher, just type and search.</p>
                            <button onClick={''}>Search Now</button>
                        </div>
                    </div>
                    <div className="image">
                        <img src={mySvg} alt="Never read a book!" />
                    </div>
                </div>
                <div className="sub-title">
                    <h3>Importance of Reading</h3>
                </div>
                <div className="row-two">                   
                    <div className="burn-books">
                        <p className="main">READING PRACTICE IMPROVES VOCABULARY</p>
                        <p>Whether for pleasure, study or information,<br/> reading practice improves vocabulary<br/> and streamlines reasoning and interpretation.</p>
                    </div>
                    <div className="burn-books">
                        <img src={hateBook} alt ="I hate books!" />
                    </div>
                    <div className="burn-books">
                        <img src={dislikeBooks} alt= "thou shall throw every book into the stream."/>
                    </div>
                    <div className="burn-books">
                        <p className="main">ADVANCING TECHNOLOGY</p>
                        <p>With the advancement of technologies in the modern world, people are less and less interested in reading.</p>
                    </div>
                    <div className="burn-books">
                        <p className="main">DYNAMIC READING</p>
                        <p>Dynamic and relaxed reading is one of the best ways to acquire information. The ideal is to learn to read informative texts, scientific articles, textbooks, educational books, etc.</p>
                    </div>
                    <div className="burn-books">
                        <img src={tearBooks} alt="normalize tearing books" />
                    </div>
                </div>
            </div>
        </>
     );
};
 
export default Body;
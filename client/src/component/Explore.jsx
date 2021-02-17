import React from 'react'
import collection_svg from "../img/collections-1.svg";
import book_svg from "../img/books-1.svg";
import { Link } from 'react-router-dom';

function Explore() {
    return (
        <section id="section1">
            <div id="book1" className="books1">
               <Link to="/engineering">
                    <div className="section1">
                        <img src={book_svg} alt="" />
                        <h3>
                           Engineering
                        </h3>
                    </div>
                    <p> Select book by Subject</p>
                   </Link>
            </div>
            <div id="book2" className="books1">
               <Link to="/categories">
                    <div className="section1">
                        <img src={collection_svg} alt="" />
                        <h3>
                            Categories
                        </h3>
                    </div>
                    <p> Select books by Categories </p>
                    </Link>
            </div>
        </section>
    )
}

export default Explore

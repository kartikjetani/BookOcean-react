import React from 'react'
import collection_svg from "../img/collections-1.svg";
import book_svg from "../img/books-1.svg";

function Explore() {
    return (
        <section id="section1">
            <div id="book1" className="books1">
                <a href="/">
                    <div className="section1">
                        <img src={book_svg} alt="" />
                        <h3>
                            Books
                        </h3>
                    </div>
                    <p> Select book by choice</p>
                </a>
            </div>
            <div id="book2" className="books1">
                <a href="/comingsoon.html">
                    <div className="section1">
                        <img src={collection_svg} alt="" />
                        <h3>
                            Categories
                        </h3>
                    </div>
                    <p> Select books by Categories </p>
                </a>
            </div>
        </section>
    )
}

export default Explore

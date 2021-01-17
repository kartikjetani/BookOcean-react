import React from 'react'
import collection_svg from "../img/collections-1.svg";
import book_svg from "../img/collections-1.svg";

function Explore() {
    return (
        <section id="section1">
        <div id="book1" className="books1">
            <div className="section1">
                <img src={book_svg} alt=""/>
                <h3>
                    books
                </h3>
            </div>
            <p> select book by choice</p>
        </div>
        <div id="book2" className="books1">
            <div className="section1">
                <img src={collection_svg} alt=""/>
                <h3>
                    collections
                </h3>
            </div>
            <p> select your favourite collection. </p>
        </div>
    </section>
    )
}

export default Explore

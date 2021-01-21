import React from 'react'
import books_icon from '../img/book-light.svg'
import popularData from '../popularBooks.json'
import { Link } from 'react-router-dom';
import ReactGa from 'react-ga';

function BookBox(props) {
    function viewClickevent(){
        ReactGa.event({
            category:"Button",
            action:"View Book Button Clicked"
        })
    }

    return (
        <>
            <div className="item" id="item1">
                <div className="book_img">

                    <img src={"http://libgen.gs/covers/" + props.dataObj.coverurl} alt="" />
                </div>
                <div className="book_detail">
                    <div className="all_details">
                        <h4 className="all_details_title">
                            Title :
                        </h4>
                        <h4 className="all_details_name">
                            {props.dataObj.title}
                        </h4>
                    </div>
                    <div className="all_details">
                        <h4 className="all_details_title">
                            Author :
                        </h4>
                        <h4 className="all_details_name">
                            {props.dataObj.author}
                        </h4>
                    </div>
                    <div className="all_details">
                        <h4 className="all_details_title">
                            Publisher :
                        </h4>
                        <h4 className="all_details_name">
                            {props.dataObj.publisher}
                        </h4>
                    </div>
                    <div className="all_details">
                        <h4 className="all_details_title">
                            Year :
                        </h4>
                        <h4 className="all_details_name">
                            {props.dataObj.year}
                        </h4>
                    </div>
                    <div className="all_details">
                        <h4 className="all_details_title">
                            Language :
                        </h4>
                        <h4 className="all_details_name">
                            {props.dataObj.language}
                        </h4>
                    </div>
                    <div className="all_details">
                        <h4 className="all_details_title">
                            Extension :
                        </h4>
                        <h4 className="all_details_name">
                            {props.dataObj.extension}
                        </h4>
                    </div>
                    <div className="all_details">
                        <h4 className="all_details_title">
                            Size :
                        </h4>
                        <h4 className="all_details_name">
                            {(props.dataObj.filesize / 1048576).toFixed(2)} MB
                        </h4>
                    </div>
                    <div className="all_details">
                        <Link to={"/view/"+props.dataObj.md5}>
                            <button onClick={viewClickevent}>
                                View Book
                            <img src={books_icon} alt="" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


        </>
    )
}
function Listing() {


    return (
        <section id="section2">
            <div id="popular_book">
                <h3>
                    Most Popular Books
            </h3>
            </div>
            <div className="books_cont">

                {popularData.map(data => <BookBox dataObj={data} key={data.md5} />)}


            </div>
        </section>
    )

}

export default Listing
export { BookBox };

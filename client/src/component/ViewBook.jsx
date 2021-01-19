import React, { useEffect, useState } from 'react'
import download_svg from '../img/download.svg';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {BeatLoader} from 'react-spinners';


function ViewBook() {
    const [details, setDetails] = useState();

    let { md5 } = useParams();

    useEffect(() => {

        fetch('http://3.20.8.168:5000/searchbymd5/' + md5)
            .then(res => res.json())
            .then(data => { setDetails(data[0]) })

    }, [])



    if (details === undefined) {
        return (<div className="loader"><BeatLoader color="#0F65CA"loading size="50px" /></div> )
    } else {
        return (<>
        {/* <div className="loader"><BeatLoader color="#0F65CA"loading /></div>  */}
            {/* <!--book view result page start--> */}
            <section id="all_book_detail">
                <div className="all_book_detail_cont" id="item1">
                    <div className="all_book_detail_cont_title">
                        <h2>
                            Book details
                    </h2>
                    </div>
                    <div className="all_book_detail_cont_2">
                        <div className="all_book_detail_book_img">
                            <img src={"http://libgen.gs/covers/" + details.coverurl} alt="" />
                        </div>

                        {/* <!--details of column 1 start--> */}

                        <div className="all_book_details">
                            <div className="all_detail_details">
                                <h4 className="all_book_details_title">
                                    Title :
                            </h4>
                                <h4 className="all_book_details_name">
                                    {details.title}
                                </h4>
                            </div>
                            <div className="all_detail_details">
                                <h4 className="all_book_details_title">
                                    Author :
                            </h4>
                                <h4 className="all_book_details_name">
                                    {details.author}
                                </h4>
                            </div>
                            <div className="all_detail_details">
                                <h4 className="all_book_details_title">
                                    series :
                            </h4>
                                <h4 className="all_book_details_name">
                                    {details.series}
                                </h4>
                            </div>
                            <div className="all_detail_details">
                                <h4 className="all_book_details_title">
                                    edition :
                            </h4>
                                <h4 className="all_book_details_name">
                                    {details.edition}
                                </h4>
                            </div>
                            <div className="all_detail_details">
                                <h4 className="all_book_details_title">
                                    publisher :
                            </h4>
                                <h4 className="all_book_details_name">
                                    {details.publisher}
                                </h4>
                            </div>
                            <div className="all_detail_details">
                                <h4 className="all_book_details_title">
                                    Year :
                            </h4>
                                <h4 className="all_book_details_name">
                                    {details.year}
                                </h4>
                            </div>
                            <div className="all_detail_details">
                                <h4 className="all_book_details_title">
                                    Language :
                            </h4>
                                <h4 className="all_book_details_name">
                                    {details.language}
                                </h4>
                            </div>
                            <div className="all_detail_details">
                                <h4 className="all_book_details_title">
                                    Extension :
                            </h4>
                                <h4 className="all_book_details_name">
                                    {details.extension}
                                </h4>
                            </div>
                            <div className="all_detail_details">
                                <h4 className="all_book_details_title">
                                    Size :
                            </h4>
                                <h4 className="all_book_details_name">
                                    {(details.filesize / (1024 * 1024)).toFixed(2)} MB
                            </h4>
                            </div>
                        </div>

                        {/* <!--details of column 1 end-->
                    <!--details of column 2 start--> */}

                        <div className="all_book_details">
                            <div className="all_detail_details">
                                <h4 className="all_book_details_title">
                                    id :
                            </h4>
                                <h4 className="all_book_details_name">
                                    {details.id}
                                </h4>
                            </div>
                            <div className="all_detail_details">
                                <h4 className="all_book_details_title">
                                    Pages :
                            </h4>
                                <h4 className="all_book_details_name">
                                    {details.pages}
                                </h4>
                            </div>
                            <div className="all_detail_details">
                                <h4 className="all_book_details_title">
                                    isbn :
                            </h4>
                                <h4 className="all_book_details_name">
                                    {details.isbn}
                                </h4>
                            </div>
                            <div className="all_detail_details">
                                <h4 className="all_book_details_title">
                                    md5 :
                            </h4>
                                <h4 className="all_book_details_name">
                                    {details.md5}
                                </h4>
                            </div>
                            <div className="all_detail_details">
                                <h4 className="all_book_details_title">
                                    Time added :
                            </h4>
                                <h4 className="all_book_details_name">
                                    {details.timeadded}
                                </h4>
                            </div>
                            <div className="all_detail_details">
                                <h4 className="all_book_details_title">
                                    Time modified: :
                            </h4>
                                <h4 className="all_book_details_name">
                                    {details.timelastmodified}
                                </h4>
                            </div>

                            <div className="all_detail_details">
                                {/* <!--download button is here--> */}
                                <a href={"http://111.90.145.72/get.php?md5=" + details.md5 + "&mirr=1"}>
                                    <button>

                                        Downlod
                                <img src={download_svg} alt="" />
                                    </button>
                                </a>
                            </div>
                            <div className="all_detail_details">
                                {/* <!--download button is here--> */}
                                <a href={"http://library.lol/main/" + details.md5} target="_blank">
                                    <button>
                                        Downlod
                                <img src={download_svg} alt="" />
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* <!--details of column 2 end--> */}

                    </div>
                </div>
            </section>

            {/* <!--book view result page end--> */}
        </>
        )
    }
}

const mapStatetoProps = (state) => state;

export default connect(mapStatetoProps)(ViewBook)

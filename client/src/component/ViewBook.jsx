import React, { useEffect, useState } from 'react'
import download_svg from '../img/download.svg';
import default_img from "../img/poster.png";
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import ReactGa from 'react-ga';

function ViewBook() {
    const [details, setDetails] = useState();

    let { md5 } = useParams();

    useEffect(() => {

        // 3.20.8.168
        fetch('http://bookocean.ml:5000/searchbymd5/' + md5)
            .then(res => res.json())
            .then(data => { setDetails(data[0]) })

    }, [])

    function download_1() {
        ReactGa.event({
            category: "Button",
            action: "Download-1 Button Clicked"
        })
    }

    function download_2() {
        ReactGa.event({
            category: "Button",
            action: "Download-2 Button Clicked"
        })
    }

    function shareLink() {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = "http://bookocean.ml/view/" + md5;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);

        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Link Copied!";

        ReactGa.event({
            category: "Button",
            action: "Share Button Clicked"
        })
    }


    if (details === undefined) {
        return (<div className="loader"><BeatLoader color="#0F65CA" loading size="50px" /></div>)
    } else {
        return (<>
            {/* <div className="loader"><BeatLoader color="#0F65CA"loading /></div>  */}
            {/* <!--book view result page start--> */}
            <section id="all_book_detail">
                <div className="all_book_detail_cont" id="item1">
                    <div className="all_book_detail_cont_title">
                        <h2>
                            Book Details
                    </h2>
                    </div>
                    <div className="all_book_detail_cont_2">
                        <div className="all_book_detail_book_img">
                            <object data={"http://libgen.gs/covers/" + details.coverurl} type="image/jpg">
                                <img src={default_img} />
                            </object>
                        </div>

                        {/* <!--details of column 1 start--> */}
                        <div id="outer_column">
                            <div id="column-1" className="all_book_details">
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
                                        Series :
                            </h4>
                                    <h4 className="all_book_details_name">
                                        {details.series}
                                    </h4>
                                </div>
                                <div className="all_detail_details">
                                    <h4 className="all_book_details_title">
                                        Edition :
                            </h4>
                                    <h4 className="all_book_details_name">
                                        {details.edition}
                                    </h4>
                                </div>
                                <div className="all_detail_details">
                                    <h4 className="all_book_details_title">
                                        Publisher :
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

                            <div id="column-2" className="all_book_details">
                                <div className="all_detail_details">
                                    <h4 className="all_book_details_title">
                                        Id :
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
                                        ISBN :
                            </h4>
                                    <h4 className="all_book_details_name">
                                        {details.isbn}
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
                            <Link to={"/preview/"+details.md5}>
                            <button id="share">
                                <i className="fa fa-eye"></i>
                                Preview
                            </button>
                            </Link>
                        </div>

                        <div className="all_detail_details">
                            {/* <!--download button is here--> */}
                            <div className="tooltip">

                            <span className="tooltiptext" id="myTooltip">Click to Copy URL</span>

                            <button id="share" onClick={shareLink}>
                                <i className="fa fa-share"></i>                          
                                Share

                            </button>
                            </div>

                        </div>




{/* 
                                <div className="all_detail_details">
                                    {/* <!--Share button is here--> 
                                      <button id="share" >
                                        <img src={sharesvg} alt=""/>
                                            Share
                                       </button>
                                  </div> */}

                                    <div className="all_detail_details">
                                        {/* <!--download button is here--> */}
                                        <a href={details.download1}>
                                            <button id="download-1" onClick={download_1}>

                                                Download
                                             <img src={download_svg} alt="" />
                                            </button>
                                        </a>
                                    </div>
                                    <div className="all_detail_details">
                                        {/* <!--download button is here--> */}
                                        <Link to={"/download2/" + details.md5}>
                                            <button id="download-2" onClick={download_2}>
                                                Download
                                            <img src={download_svg} alt="" />
                                            </button>
                                        </Link>
                                        {/* <Link to={"/preview/"+details.md5}><button>Preview</button></Link> */}
                                    </div>
                                </div>

                                {/* <!--details of column 2 end--> */}
                            </div>
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

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { BookBox } from "./PopularListing";
import Pagination from "./Pagination";
import { BeatLoader } from 'react-spinners';

const useFetch = (query,option) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(async() => {
        setLoading(true)
        await fetch("http://3.20.8.168:5000/"+option+"/" + query)
            .then(res => res.json())
            .then(data => {
                if (Object.keys(data).length !== 0) {
                    setData(data)
                }else{setData(null)}
            })
        setLoading(false);
        
    }, [query,option])
    return { data, loading };  
  };


function CommonListing(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    let { data, loading } = useFetch(props.query,props.option)
    // console.log(props.query,props.option);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentBooks = (data) ? data.slice(indexOfFirstPost, indexOfLastPost) : null


    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    function getMsg() {
        if (loading) {
            return <div className="loader"><BeatLoader color="#0F65CA" loading size="50px" /></div>
        } else if (data) {
          return (props.query.substring(0,7)==="topicid")?
             `${data.length} Results for category`:
             `${data.length} Results for ${props.query && props.query.substring(0, 10)}...`
        } else {
            return "No result found"
        }
    }



    return (<>
        <section id="section2">
            <div id="popular_book">
                <h3>
                    {
                        getMsg()
                    }
                </h3>
            </div>
            <div className="books_cont">
                {

                    (data) ? currentBooks.map(data => <BookBox dataObj={data} key={data.md5} />) : <h4></h4>

                }
            </div>
        </section>
        <Pagination
            postsPerPage={postsPerPage}
            totalPosts={(data) ? data.length : 0}
            paginate={paginate}
        />
    </>)
}

const mapStatetoProps = (state) => state;

export default connect(mapStatetoProps)(CommonListing)

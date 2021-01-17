import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import search_svg from '../img/searc.svg'
import { update_query } from '../store/actions';
import store from '../store/index';

function Header() {

    const [search, setSearch] = useState();

    const clickEvent = () => {
        update_query(search)
    }
    const changeEvent = (inp) => {
        setSearch(inp.target.value);
    }

    return (
        <>
            <header id="header">
                <nav id="nav">
                    <div id="left">
                        <h1 id="name">
                            <a href="/">Book Ocean</a>

                        </h1>
                    </div>
                    <div id="right">
                        <ul>
                            <li className="option1"><a href="/">Home</a></li>
                            <li className="option2"><a href="#">Categories</a></li>
                            <li className="option3"><a href="#">Like</a></li>
                        </ul>
                    </div>
                </nav>
                <section id="main">

                    <div id="title">
                        <h1 className="title">
                            World's biggest online free digital Library
                            </h1>
                        {/* <h3 class="tagline">One Stop Destination for Digital Readers</h3> */}
                    </div>
                    <div id="search">
                        <div id="search-icon">
                            <img src={search_svg} alt="" />
                        </div>
                        <div>
                            <input type="text" onChange={changeEvent} id="search-txt" placeholder="type to search" />
                            <Link to="/search" >

                                <button onClick={clickEvent}  >
                                    <img src={search_svg} className="search-button-img" alt="" />
                                    <h4>
                                        search
                        </h4>
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header;
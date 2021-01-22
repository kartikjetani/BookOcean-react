import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import search_svg from '../img/searc.svg'
import { update_options, update_query } from '../store/actions';
import ReactGa from 'react-ga';
import { slide as Menu } from 'react-burger-menu'

function Header() {

    const [search, setSearch] = useState();
    const [selection,setSelection]=useState("title");

    /* Set the width of the sidebar to 250px (show it) */
    function openNav() {
        document.getElementById("mySidepanel").style.width = "250px";
    }

    /* Set the width of the sidebar to 0 (hide it) */
    function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
    }    
      
    
    const clickEvent = () => {
        update_query(search)
        update_options(selection)

        ReactGa.event({
            category: 'Button',
            action: 'User Searched Something...'
        })
    }
    const changeEvent = (inp) => {
        setSearch(inp.target.value);
    }

    const selectionChange=(inp)=>{
        setSelection(inp.target.value)
    }

    return (
        <>
        
           {/* <Menu>
                         <a id="home" className="menu-item" href="/">Home</a>
                         <a id="about" className="menu-item" href="/about">About</a>
                         <a id="contact" className="menu-item" href="/contact">Contact</a>
                         {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> 
            </Menu> */}
            <header id="header">
                <nav id="nav">
                    <div id="left">
                        <h1 id="name">
                            <a href="/">Book Ocean</a>

                        </h1>
                    </div>
                    <div id="burger">
                <div id="mySidepanel" className="sidepanel">
                    <a  className="closebtn" onClick={closeNav}>&times;</a>
                    <a><Link onClick={closeNav} to="/">Home</Link></a>
                    <a ><Link onClick={closeNav} to="/categories">Categories</Link></a>
                    <a id="mail" href="mailto:contact.bookocean@gmail.com">Contact</a>
                </div>

                <button className="openbtn" onClick={openNav}>&#9776;</button>
            </div>
                    <div id="right">
                        <ul>
                            <li className="option1"><Link to="/" >Home</Link></li>
                            <li className="option2"><Link to="/categories" >Categories</Link></li>
                            <li className="option3"><a href="mailto:contact.bookocean@gmail.com">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <section id="main">

                    <div id="title">
                        <h1 className="title">
                            World's biggest online free digital Library
                            </h1>
                        {/* <h3 className="tagline">One Stop Destination for Digital Readers</h3> */}
                    </div>
                    <form >
                        <div id="search">
                            <div id="search-icon">
                                <img src={search_svg} alt="" />
                            </div>
                            <div>

                                <input type="text" onChange={changeEvent} id="search-txt" placeholder="type to search" />
                                <Link to="/search" >

                                    <button type="submit" onClick={clickEvent}  >
                                        <img src={search_svg} className="search-button-img" alt="" />
                                        <h4>
                                            search
                                    </h4>
                                    </button>
                                </Link>

                            </div>

                        </div>
                       <div id="div_search_option">
                            <div>
                                <h4>
                                    Search By 
                        </h4>
                                <select value={selection} onChange={selectionChange} className="search_option" id="search_by">
                                
                                    <option value="title" >Title</option>
                                    <option value="author">Author</option>
                                    <option value="publisher">Publisher</option>
                                    {/*  */}
                                </select>
                            </div>   
                        </div>
                    </form>
                </section>
            </header>
        </>
    )
}

export default Header;
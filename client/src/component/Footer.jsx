import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer id="footer">
            <div id="footer_nm">
                <h2>
                    Book Ocean
            </h2>
            </div>
            <div id="footer_list">
                <ul>
                    <li className="footer_list1" id="footer1"><a href="/">Home</a> </li>
                    <li className="footer_list1" id="footer2"><Link to="/categories"> Categories</Link> </li>
                    <li className="footer_list1" id="footer3"><a href="mailto:contact.bookocean@gmail.com">Contact</a></li>
                </ul>
                {/* style={{alignItems:'center',display:'flex',justifyContent:'center',paddingBottom:'25px'}} */}
            </div>
            <div>
                <h4>
                    Made with ❤️ in India
                </h4>
                </div>
                <p style={{fontSize:"7px"}}>**Disclimers : bookocean.ml is not the original publisher of the Books/Materials
on net. This e-book/Material has been collected from other sources of net.</p>
<p style={{fontSize:"7px"}}>**Note: Please do not Copy (or) Republish
this Materials without Legal Permission of the Publishers.If there is any legal procedures in front of you then we are not responsible for it.</p>
        </footer>
    )
}

export default Footer

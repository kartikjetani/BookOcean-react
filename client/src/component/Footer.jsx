import React from 'react'

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
                    <li className="footer_list1" id="footer2"><a href="/categories">Categories</a> </li>
                    <li className="footer_list1" id="footer3"><a href="mailto:contact.bookocean@gmail.com">Contact</a></li>
                </ul>
                {/* style={{alignItems:'center',display:'flex',justifyContent:'center',paddingBottom:'25px'}} */}
            </div>
            <div>
                <h4>
                    Made with ❤️ in India
                </h4>
            </div>
        </footer>
    )
}

export default Footer

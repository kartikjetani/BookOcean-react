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
                <li className="footer_list1" id="footer1"><a href="">Home</a> </li>
                <li className="footer_list1" id="footer2"><a href="">Categories</a> </li>
                <li className="footer_list1" id="footer3"><a href="">like</a> </li>
            </ul>
        <p style={{alignItems:'center',display:'flex',justifyContent:'center',paddingBottom:'25px'}}> Made with ❤️ in India</p>

        </div>
    </footer>
    )
}

export default Footer

import React from 'react'

function Footer() {
    return (
        <footer id="footer">
            <div id="footer_nm">
                <h2>
                    Book Ocean
            </h2>
            </div>
            <div class="footer_list_cont">
            <div class="footer_list" id="footer_list1">
                
                <h5>Quick Links</h5> 
                <ul>
                    <li class="footer_list1" id="footer1"><a href="/">Home</a> </li>
                    <li class="footer_list1" id="footer2"><a href="/categories"> Categories</a> </li>
                    <li class="footer_list1" id="footer2"><a href="/upload"> Upload Book</a> </li>
                    <li class="footer_list1" id="footer2"><a href="/request"> Request Book</a> </li>
                    <li class="footer_list1" id="footer3"><a href="mailto:contact.bookocean@gmail.com">Contact</a></li>
                </ul>
            </div>
            <div class="footer_list" id="footer_list2">
                <h5>
                    About us
                </h5>
                <p>
                    Book Ocean is India`s biggest online free digital Library. We have free 2.4M+ non-fiction and 2.2M+ fiction books for every bookish people. On this Library you can find free e-books in various format like pdf, epub, DjVu, Rtf, TXT, Mobi. All free books are devided into 23 categories and 296 sub-categories. Here you can search and download books without any limits. You can get preview of any book and read it on Book Ocean.
                </p>
            </div>
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

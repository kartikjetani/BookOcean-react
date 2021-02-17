import React ,{useEffect, useState}from 'react'
import { useLocation, useParams } from 'react-router';
import "../css/uploadbooks.css";

function UploadBook() {
    const [src, setsrc] = useState()
    const [title,setTitle]=useState();
    const [previewLink,setpreviewLink]=useState()

    const { md5 } = useParams();
    const location =useLocation();
  
    useEffect(() => {

        // 3.20.8.168
        fetch(`http://bookocean.ml:5000/previewlink/${md5}`)
        .then(res=>res.json())
        .then(data=>setpreviewLink(data.previewlink))
        
        if (!md5 && location.pathname==="/upload") { 
            setsrc("https://docs.google.com/forms/d/e/1FAIpQLSc5FhBNuVCKkF800DvqT1ILUj4rw6Kvq71wo1C7OG9jZUOevA/viewform?embedded=true" )
            
            setTitle("Upload Book")
        }else if(location.pathname==="/request"){
           setsrc("https://docs.google.com/forms/d/e/1FAIpQLSdoNV5lmZ5e7_AC_D3Jt9Y81K0NfwHu8Rz_IgZB735JEvbRCA/viewform?embedded=true")
           setTitle("Request Book")
            changeHeight("1598px") 
        }else if(location.pathname.substring(0,8)==="/preview"){
            setsrc(`https://docs.google.com/gview?embedded=true&url=${previewLink}`)
            setTitle("Preview Book")
             changeHeight("1000px") 
         }
        else {
            setsrc("http://library.lol/main/" + md5)
            setTitle("Download Book");
            
            changeHeight("1000px");
        }
    
    }, [previewLink])

    const changeHeight=(heightString)=>{
        
      if(window.innerWidth<=425 && document.getElementById("iframe")){
        document.getElementById("iframe").style.height="500px";
      }else{
        document.getElementById("iframe").style.height=heightString
      }
    }


    
    return (
        <section id="donatebook">
            <div>
                <h3>
                    {title}
                </h3>
            </div>
            <div id="donatebook_form">
                <iframe id="iframe" src={src} frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </div>
        </section>
    )
}

export default UploadBook

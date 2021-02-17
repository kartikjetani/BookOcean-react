import React from 'react'
import "../css/Engineering.css"
import gtuLogo from "../img/GTU.jpg";
import {Link,Route} from "react-router-dom"
import GTU from "./GTU"

function Engineering() {
    return (<>
        <div class="edu_category_cont" id="">
        <div class="edu_category" id="gtu">
    <Link to="/gtu/sub">
          <div class="edu_category_img">
            <img src={gtuLogo}/>
          </div>
          <div>
            <h3>
              GTU
            </h3>
          </div>
          </Link>
        </div>
      </div>
</>
    )
}

export default Engineering

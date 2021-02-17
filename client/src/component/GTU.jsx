import React, { useState, useEffect } from 'react'
import { useParams, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom'
import "../css/GTU.css";
import { BookBox } from "./PopularListing";
import { BeatLoader } from 'react-spinners';


function GTU() {

  const [branch, setBranch] = useState("comp");
  const [sem, setSem] = useState("sem1");
  const [semdata, setSemdata] = useState({})
  const [bookdata, setBookdata] = useState({error: "Wrong Key ids: "})
  const { subcode } = useParams();
  const [loading, setloading] = useState(false)

  useEffect(() => {
   if (semdata.apidata)setBookdata(semdata.apidata[`${subcode}`])
    // console.log(subcode, bookdata);
    
  }, [subcode])

  function branchChange(inp) {
    setBranch(inp.target.value);
  }

  function semChange(inp) {
    setSem(inp.target.value);
  }

async  function onApply() {
    setloading(true)

    setSemdata({})

    await fetch(`http://bookocean.ml:5000/branch-sem/${branch}/${sem}`)
      .then(res => res.json()).then(data => setSemdata(data))
    setloading(false)

  }
  return (
    <>
      <section id="edu_category_gtu">
        <div id="">
          <h3>
            GTU
          </h3>
        </div>

        <div id="edu_category_gtu-container">
          <div>
            <select onChange={branchChange} name="" id="" className="category">
              <option value="" selected disabled>Branch</option>
              <option value="comp">Computer Engineering</option>
              <option value="ece">Electronics & Communication Engineering</option>
              <option value="ele">Electrical Engineering</option>
              <option value="env">Environmental Engineering</option>
            </select>
            <select onChange={semChange} name="" id="" className="category">
              <option value="" selected disabled>Semester</option>
              <option value="sem1">Sem 1 & 2</option>
              <option value="sem3">Sem 3</option>
              <option disabled value="sem4">Sem 4</option>
              <option disabled value="sem5">Sem 5</option>
              <option disabled value="sem6">Sem 6</option>
              <option disabled value="sem7">Sem 7</option>
              <option disabled value="sem8">Sem 8</option>
            </select>
          </div>
          <div>
            <div className="edu_category_gtu_apply_btn">
              {/* <!--Subject name-> */}
              <button onClick={onApply} id="">

                Apply
                <i className="fa fa-check-circle"></i>

              </button>
            </div>
          </div>
        </div>

        <div id="edu_category_gtu-subject">
          {/* All Subject goes here */}
          {

            (semdata.subjectname) ?
              semdata.subjectname.map((sub, index) =>

                <Subjects subName={sub} key={index} subCode={semdata.subjectcode[index]} />
              ) :(loading)?<div className="loader"><BeatLoader color="#0F65CA" loading size="50px" /></div>:null

          }
        </div>
      </section>

      <section id="section2">
            <div id="popular_book">
                <h3>
                    {(subcode!="sub")?subcode:null}
            </h3>
            </div>
            <div className="books_cont">
        { (!bookdata.error && !loading) ? bookdata.map(data=><BookBox key={data.id} dataObj={data} /> ) :null}
        </div>
        </section>
    </>
  )
}


function Subjects({ subName, subCode }) {


  return (

    <div className="edu_category_gtu_subject_btn">
      {/* <!--Subject name-> */}
      <Link to={`/gtu/${subCode}`}>
        <button id="">
          {subName}
        </button>
      </Link>
    </div>
  )
}


export default GTU

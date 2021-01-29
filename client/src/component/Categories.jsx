import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router'
import { update_options, update_query } from '../store/actions';

function Categories() {
const [redirect,setRedirect]=useState(null)

   
    function catChangeEvent(inp){
        update_query(inp.target.value);
        update_options("auto")
        setRedirect(1);
    }
    return (
        <>
        {
            (redirect)?<Redirect to="/search"/>:null
        }
    {/*<!--Categories page categories start--> */}

    <section id="categories">
        <div id="popular_book">
            <h3>
                Categories
            </h3>
        </div>
        <div id="categories-container">
            <select onChange={catChangeEvent} name="" id="cstegory1" className="category">
            <option value="" disabled selected >Technology</option>
            <option value="topicid210" > Technology - All</option>
            <option value="topicid212">Aerospace Equipment</option>
                <option value="topicid211">Automation</option>
                <option value="topicid235">Communication: Telecommunications</option>
                <option value="topicid234">Communication</option>
                <option value="topicid236">Construction</option>
                <option value="topicid241">Construction: Cement Industry</option>
                <option value="topicid240">Construction: Renovation and interior design: Saunas</option>
                <option value="topicid239">Construction: Renovation and interior design</option>
                <option value="topicid238">Construction: Ventilation and Air Conditioning</option>
                <option value="topicid261">Electronics: Electronics</option>
                <option value="topicid252">Electronics: Fiber Optics</option>
                <option value="topicid251">Electronics: Hardware</option>
                <option value="topicid253">Electronics: Home Electronics</option>
                <option value="topicid254">Electronics: Microprocessor Technology</option>
                <option value="topicid256">Electronics: Radio</option>
                <option value="topicid257">Electronics: Robotics</option>
                <option value="topicid255">Electronics: Signal Processing</option>
                <option value="topicid260">Electronics: Telecommunications</option>
                <option value="topicid259">Electronics: TV. Video</option>
                <option value="topicid258">Electronics: VLSI</option>
                <option value="topicid250">Electronics</option>
                <option value="topicid263">Energy: Renewable Energy</option>
                <option value="topicid262">Energy</option>
                <option value="topicid229">Food Manufacturing</option>
                <option value="topicid243">Fuel Technology</option>
                <option value="topicid242">Heat</option>
                <option value="topicid232">Industrial equipment and technology</option>
                <option value="topicid231">Industry: Metallurgy</option>
                <option value="topicid230">Instrument</option>
                <option value="topicid218">Light Industry</option>
                <option value="topicid219">Materials</option>
                <option value="topicid220">Mechanical Engineering</option>
                <option value="topicid221">Metallurgy</option>
                <option value="topicid222">Metrology</option>
                <option value="topicid215">Military equipment: Weapon</option>
                <option value="topicid214">Military equipment</option>
                <option value="topicid233">Missiles</option>
                <option value="topicid224">Nanotechnology</option>
                <option value="topicid226">Oil and Gas Technologies: Pipelines</option>
                <option value="topicid225">Oil and Gas Technologies</option>
                <option value="topicid228">Patent Business. Ingenuity. Innovation</option>
                <option value="topicid216">Publishing</option>
                <option value="topicid249">Refrigeration</option>
                <option value="topicid227">Regulatory Literature</option>
                <option value="topicid223">Safety and Security</option>
                <option value="topicid217">Space Science</option>
                <option value="topicid244">Transport</option>
                <option value="topicid245">Transportation: Aviation</option>
                <option value="topicid246">Transportation: Cars, motorcycles</option>
                <option value="topicid247">Transportation: Rail</option>
                <option value="topicid248">Transportation: Ships</option>
                <option value="topicid213">Water Treatment</option>                
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory2" className="category">
                <option value="" disabled selected >Art</option>
                <option value="topicid57" >Art - All</option>
                <option value="topicid60">Cinema</option>
                <option value="topicid58">Design: Architecture</option>
                <option value="topicid59">Graphic Arts</option>
                <option value="topicid61">Music</option>
                <option value="topicid62">Music: Guitar</option>
                <option value="topicid63">Photo</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory3" className="category">
                <option value="" disabled selected>Biology</option>
                <option value="topicid12">Biology -All</option>
                <option value="topicid14">Anthropology</option>
                <option value="topicid15">Anthropology: Evolution</option>
                <option value="topicid16">Biostatistics</option>
                <option value="topicid17">Biotechnology</option>
                <option value="topicid18">Biophysics</option>
                <option value="topicid19">Biochemistry</option>
                <option value="topicid20">Biochemistry: enologist</option>
                <option value="topicid31">Ecology</option>
                <option value="topicid13">Estestvoznananie</option>
                <option value="topicid22">Genetics</option>
                <option value="topicid26">Microbiology</option>
                <option value="topicid27">Molecular</option>
                <option value="topicid28">Molecular: Bioinformatics</option>
                <option value="topicid30">Plants: Agriculture and Forestry</option>
                <option value="topicid21">Virology</option>
                <option value="topicid23">Zoology</option>
                <option value="topicid24">Zoology:Paleontology</option>
                <option value="topicid25">Zoology: Fish</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory4" className="category">
                <option value="" disabled selected >Business</option>
                <option value="topicid1" >Business - All</option>
                <option value="topicid2">Accounting</option>
                <option value="topicid11">E-Commerce</option>
                <option value="topicid3">Logistics</option>
                <option value="topicid6">Management</option>
                <option value="topicid4">Marketing</option>
                <option value="topicid5">Marketing: Advertising</option>
                <option value="topicid7">Management: Project Management</option>
                <option value="topicid8">MLM</option>
                <option value="topicid9">Responsibility and Business Ethics</option>
                <option value="topicid10">Trading</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory5" className="category">
                <option value="" disabled selected >Chemistry</option>
                <option value="topicid296" >Chemistry - All</option>
                <option value="topicid297">Analytical Chemistry</option>
                <option value="topicid304">Chemical</option>
                <option value="topicid299">Inorganic Chemistry</option>
                <option value="topicid298">Materials</option>
                <option value="topicid300">Organic Chemistry</option>
                <option value="topicid301">Pyrotechnics and explosives</option>
                <option value="topicid302">Pharmacology</option>
                <option value="topicid303">Physical Chemistry</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory6" className="category">
                <option value="" disabled selected >Computers</option>
                <option value="topicid69" >Computers - All</option>
                <option value="topicid71">Algorithms and Data Structures</option>
                <option value="topicid72">Algorithms and Data Structures: Cryptography</option>
                <option value="topicid73">Algorithms and Data Structures: Image Processing</option>
                <option value="topicid74">Algorithms and Data Structures: Pattern Recognition</option>
                <option value="topicid75">Algorithms and Data Structures: Digital watermarks</option>
                <option value="topicid80">Cybernetics</option>
                <option value="topicid81">Cybernetics: ArtificialIntelligence</option>
                <option value="topicid82">Cryptography</option>
                <option value="topicid76">Databases</option>
                <option value="topicid78">Information Systems</option>
                <option value="topicid79">Information Systems: EC businesses</option>
                <option value="topicid83">Lectures, monographs</option>
                <option value="topicid84">Media</option>
                <option value="topicid99">Networking</option>
                <option value="topicid100">Networking: Internet</option>
                <option value="topicid85">Operating Systems</option>
                <option value="topicid86">Organization and Data Processing</option>
                <option value="topicid87">Programming</option>
                <option value="topicid88">Programming: Libraries API</option>
                <option value="topicid89">Programming: Games</option>
                <option value="topicid90">Programming: Compilers</option>
                <option value="topicid91">Programming: Modeling languages</option>
                <option value="topicid92">Programming: Programming Languages</option>
                <option value="topicid93">Programs: TeX, LaTeX</option>
                <option value="topicid77">Security</option>
                <option value="topicid94">Software: Office software</option>
                <option value="topicid95">Software: Adobe Products</option>
                <option value="topicid96">Software: Macromedia Products</option>
                <option value="topicid97">Software: CAD</option>
                <option value="topicid98">Software: Systems: scientific computing</option>
                <option value="topicid101">System Administration</option>
                <option value="topicid70">Web-design</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory7" className="category">
                <option value="" disabled selected >Geography</option>
                <option value="topicid32" >Geography - All</option>
                <option value="topicid33">Geodesy. Cartography</option>
                <option value="topicid34">Local History</option>
                <option value="topicid35">Local history: Tourism</option>
                <option value="topicid36">Meteorology, Climatology</option>
                <option value="topicid37">Russia</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory8" className="category">
                <option value="" disabled selected >Geology</option>
                <option value="topicid38" >Geology - All</option>
                <option value="topicid39">Gidrogeology</option>
                <option value="topicid40">Mining</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory9" className="category">
                <option value="" disabled selected>Economy</option>
                <option value="topicid305">Economy-All</option>
                <option value="topicid310">Econometrics</option>
                <option value="topicid306">Investing</option>
                <option value="topicid309">Markets</option>
                <option value="topicid307">Mathematical Economics</option>
                <option value="topicid308">Popular</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory10" className="category">
                <option value="" disabled selected >Education</option>
                <option value="topicid183" >Education - All</option>
                <option value="topicid187">Elementary</option>
                <option value="topicid185">International Conferences and Symposiums</option>
                <option value="topicid186">Self-help books</option>
                <option value="topicid184">Theses abstracts</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory11" className="category">
                <option value="" disabled selected >Jurisprudence</option>
                <option value="topicid324" >Jurisprudence - All</option>
                <option value="topicid311">Criminology, Forensic Science</option>
                <option value="topicid312">Criminology: Court. examination</option>
                <option value="topicid313">Law</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory12" className="category">
                <option value="" disabled selected >Housekeeping, leisure</option>
                <option value="topicid41" >Housekeeping, leisure - All</option>
                <option value="topicid42">Aquaria</option>
                <option value="topicid43">Astrology</option>
                <option value="topicid48">Beauty, image</option>
                <option value="topicid52">Benefits Homebrew</option>
                <option value="topicid47">Collecting</option>
                <option value="topicid49">Cooking</option>
                <option value="topicid50">Fashion, Jewelry</option>
                <option value="topicid45">Games: Board Games</option>
                <option value="topicid46">Games: Chess</option>
                <option value="topicid56">Garden</option>
                <option value="topicid54">Handicraft</option>
                <option value="topicid55">Handicraft: Cutting and Sewing</option>
                <option value="topicid51">Hunting and Game Management</option>
                <option value="topicid44">Pet</option>
                <option value="topicid53">Professions and Trades</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory13" className="category">
                <option value="" disabled selected >History</option>
                <option value="topicid64" >History - All</option>
                <option value="topicid65">American Studies</option>
                <option value="topicid66">Archaeology</option>
                <option value="topicid67">Military History</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory14" className="category">
                <option value=""disabled selected >Linguistics</option>
                <option value="topicid314" >Linguistics - All</option>
                <option value="topicid318">Comparative Studies</option>
                <option value="topicid322">Dictionaries</option>
                <option value="topicid315">Foreign</option>
                <option value="topicid316">Foreign: English</option>
                <option value="topicid317">Foreign: French</option>
                <option value="topicid319">Linguistics</option>
                <option value="topicid320">Rhetoric</option>
                <option value="topicid321">Russian Language</option>
                <option value="topicid323">Stylistics</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory15" className="category">
                <option value="" disabled selected >Literature</option>
                <option value="topicid102" >Literature - All</option>
                <option value="topicid106">Children</option>
                <option value="topicid107">Comics</option>
                <option value="topicid105">Detective</option>
                <option value="topicid112">Fantasy</option>
                <option value="topicid103">Fiction</option>
                <option value="topicid111">Folklore</option>
                <option value="topicid104">Library</option>
                <option value="topicid108">Literary</option>
                <option value="topicid109">Poetry</option>
                <option value="topicid110">Prose</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory16" className="category">
                <option value="" disabled selected >Mathematics</option>
                <option value="topicid113" >Mathematics - All</option>
                <option value="topicid114">Algebra</option>
                <option value="topicid115">Algebra: Linear Algebra</option>
                <option value="topicid116">Algorithms and Data Structures</option>
                <option value="topicid117">Analysis</option>
                <option value="topicid137">Applied Mathematics</option>
                <option value="topicid139">Automatic Control Theory</option>
                <option value="topicid126">Combinatorics</option>
                <option value="topicid120">Computational Mathematics</option>
                <option value="topicid128">Computer Algebra</option>
                <option value="topicid133">Continued fractions</option>
                <option value="topicid125">Differential Equations</option>
                <option value="topicid124">Discrete Mathematics</option>
                <option value="topicid123">Dynamical Systems</option>
                <option value="topicid146">Elementary</option>
                <option value="topicid144">Functional Analysis</option>
                <option value="topicid134">Fuzzy Logic and Applications</option>
                <option value="topicid141">Game Theory</option>
                <option value="topicid121">Geometry and Topology</option>
                <option value="topicid140">Graph Theory</option>
                <option value="topicid129">Lectures</option>
                <option value="topicid130">Logic</option>
                <option value="topicid132">Mathematical Physics</option>
                <option value="topicid131">Mathematical Statistics</option>
                <option value="topicid143">Number Theory</option>
                <option value="topicid145">Numerical Analysis</option>
                <option value="topicid142">Operator Theory</option>
                <option value="topicid135">Optimal control</option>
                <option value="topicid136">Optimization. Operations Research</option>
                <option value="topicid119">Probability</option>
                <option value="topicid122">Puzzle</option>
                <option value="topicid138">Symmetry and group</option>
                <option value="topicid127">The complex variable</option>
                <option value="topicid118">Wavelets and signal processing</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory17" className="category">
                <option value="" disabled selected >Medicine</option>
                <option value="topicid147" >Medicine - All</option>
                <option value="topicid148">Anatomy and physiology</option>
                <option value="topicid149">Anesthesiology and Intensive Care</option>
                <option value="topicid159">Cardiology</option>
                <option value="topicid160">Chinese Medicine</option>
                <option value="topicid161">Clinical Medicine</option>
                <option value="topicid170">Dentistry, Orthodontics</option>
                <option value="topicid155">Diabetes</option>
                <option value="topicid151">Diseases: Internal Medicine</option>
                <option value="topicid150">Diseases</option>
                <option value="topicid176">Endocrinology</option>
                <option value="topicid167">ENT</option>
                <option value="topicid177">Epidemiology</option>
                <option value="topicid171">Feng Shui</option>
                <option value="topicid152">Histology</option>
                <option value="topicid153">Homeopathy</option>
                <option value="topicid156">Immunology</option>
                <option value="topicid157">Infectious diseases</option>
                <option value="topicid162">Molecular Medicine</option>
                <option value="topicid163">Natural Medicine</option>
                <option value="topicid165">Neurology</option>
                <option value="topicid166">Oncology</option>
                <option value="topicid168">Ophthalmology</option>
                <option value="topicid169">Pediatrics</option>
                <option value="topicid173">Pharmacology</option>
                <option value="topicid164">Popular scientific literature</option>
                <option value="topicid175">Surgery, Orthopedics</option>
                <option value="topicid172">Therapy</option>
                <option value="topicid171">Trial</option>
                <option value="topicid158">Yoga</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory18" className="category">
                <option value="" disabled selected >Other Social Sciences</option>
                <option value="topicid189" >Other Social Sciences - All</option>
                <option value="topicid191">Cultural</option>
                <option value="topicid197">Ethnography</option>
                <option value="topicid190">Journalism, Media</option>
                <option value="topicid192">Politics</option>
                <option value="topicid193">Politics: International Relations</option>
                <option value="topicid195">Philosophy</option>
                <option value="topicid196">Philosophy: Critical Thinking</option>
                <option value="topicid194">Sociology</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory19" className="category">
                <option value="" disabled selected >Physics</option>
                <option value="topicid264" >Physics - All</option>
                <option value="topicid266">Astronomy: Astrophysics</option>
                <option value="topicid265">Astronomy</option>
                <option value="topicid270">Crystal Physics</option>
                <option value="topicid287">Electricity and Magnetism</option>
                <option value="topicid288">Electrodynamics</option>
                <option value="topicid278">General courses</option>
                <option value="topicid267">Geophysics</option>
                <option value="topicid271">Mechanics</option>
                <option value="topicid274">Mechanics: Fluid Mechanics</option>
                <option value="topicid273">Mechanics: Mechanics of deformable bodies</option>
                <option value="topicid275">Mechanics: Nonlinear dynamics and chaos</option>
                <option value="topicid272">Mechanics: Oscillations and Waves</option>
                <option value="topicid276">Mechanics: Strength of Materials</option>
                <option value="topicid277">Mechanics: Theory of Elasticity</option>
                <option value="topicid279">Optics</option>
                <option value="topicid284">Physics of lasers</option>
                <option value="topicid283">Physics of the Atmosphere</option>
                <option value="topicid285">Plasma Physics</option>
                <option value="topicid268">Quantum Mechanics</option>
                <option value="topicid269">Quantum Physics</option>
                <option value="topicid286">Solid State Physics</option>
                <option value="topicid280">Spectroscopy</option>
                <option value="topicid281">Theory of Relativity and Gravitation</option>
                <option value="topicid282">Thermodynamics and Statistical Mechanics</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory20" className="category">
                <option value="" disabled selected >Physical Education & Sport</option>
                <option value="topicid289" >Physical Education & Sport - All</option>
                <option value="topicid290">Bodybuilding</option>
                <option value="topicid292">Bike</option>
                <option value="topicid295">Fencing</option>
                <option value="topicid291">Martial Arts</option>
                <option value="topicid294">Sport fishing</option>
                <option value="topicid293">Survival</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory21" className="category">
                <option value="" disabled selected >Psychology</option>
                <option value="topicid198" >Psychology - All</option>
                <option value="topicid200">The art of communication</option>
                <option value="topicid204">Creative Thinking</option>
                <option value="topicid199">Hypnosis</option>
                <option value="topicid201">Love, erotic</option>
                <option value="topicid202">Neuro-Linguistic Programming</option>
                <option value="topicid203">Pedagogy</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory22" className="category">
                <option value="" disabled selected >Religion</option>
                <option value="topicid205" >Religion - All</option>
                <option value="topicid206">Buddhism</option>
                <option value="topicid209">Esoteric, Mystery</option>
                <option value="topicid207">Kabbalah</option>
                <option value="topicid208">Orthodoxy</option>
            </select>
            <select onChange={catChangeEvent} name="" id="cstegory23" className="category">
                <option value="" disabled selected >Science (General)</option>
                <option value="topicid178" >Science (General) - All</option>
                <option value="topicid179">International Conferences and Symposiums</option>
                <option value="topicid180">Science of Science</option>
                <option value="topicid181">Scientific-popular</option>
                <option value="topicid182">Scientific and popular: Journalism</option>
            </select>


        </div>
    </section>
   {/* <!--Categories page categories end--> */}
   </>
    )
}

export default Categories


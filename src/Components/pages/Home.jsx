import React from "react";
import Slider from "../others/Slider";
import { Link } from "react-router-dom";

import Misson from './other/Misson.jsx';
import Ourservices from "./other/Ourservices.jsx";

function Home () {
  return(
    <>
      <div>
        <Slider/>
           <section className="section">
              <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="main-heading">Our Company</h2>     
                         <div className="underline mx-auto"></div>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium omnis consequuntur deleniti eum iure saepe, libero doloribus ad magni eaque natus! Sunt fugit nulla tempora? Iusto ipsum repellat quos exercitationem.</p>
                         <Link to="/about" className="btn btn-warning">Read More</Link>
                    </div>
                </div>
              </div>
           </section>

           {/* Misson and value  */}
              <Misson/>


              {/* Services  */}

              <Ourservices/>

       </div>
    </>
  )
}

export default Home;
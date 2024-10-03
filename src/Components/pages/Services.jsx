import React from "react";
import Ourservices from "./other/Ourservices";

import Newservices from "./other/Newservices";

function Services () {
    return(
        <>
         <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 my-auto">
              <center>
              <h4>Services</h4>
              </center>
            </div>
          </div>
        </div>
       </section>

         <Newservices/>
         <Ourservices/>
         
        </>
    )
}

export default Services;
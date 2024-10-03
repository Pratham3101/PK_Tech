import React from "react";
import { Link } from "react-router-dom";


function Ourservices () {
    return(
        <>
            <section className="section border-top">
              <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4 text-center">
                        <h2 className="main-heading">Other Services</h2>     
                         <div className="underline mx-auto"></div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow">
                        <img src="./Assets/img1.jpg" className="w-100 border-bottom" alt="Services"/>
                             <div className="card-body">
                                <h6>Service-1</h6>
                                <div className="underline"></div>
                                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum nisi maxime totam eum voluptates rem?</p>
                                 <Link to="/services" className="btn btn-link">Read More</Link>
                             </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow">
                        <img src="./Assets/img1.jpg" className="w-100 border-bottom" alt="Services"/>
                             <div className="card-body">
                                <h6>Service-2</h6>
                                <div className="underline"></div>
                                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum nisi maxime totam eum voluptates rem?</p>
                                 <Link to="/services" className="btn btn-link">Read More</Link>
                             </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow">
                        <img src="./Assets/img1.jpg" className="w-100 border-bottom" alt="Services"/>
                             <div className="card-body">
                                <h6>Service-3</h6>
                                <div className="underline"></div>
                                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum nisi maxime totam eum voluptates rem?</p>
                                 <Link to="/services" className="btn btn-link">Read More</Link>
                             </div>
                        </div>
                    </div>
                </div>
              </div>
              </section>
        </>
    )
}

export default Ourservices;
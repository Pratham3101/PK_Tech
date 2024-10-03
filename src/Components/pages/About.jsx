import React from "react";
import Misson from "./other/Misson";

function About () {
  return(
    <>
       <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 my-auto">
              <center>
              <h4>About Us</h4>
              </center>
            </div>
          </div>
        </div>
       </section>

       <section className="section border-bottom">
        <div className="container">
          <h6 className="main-heading">Our Company</h6>
          <div className="underline"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ullam quasi facilis eveniet saepe necessitatibus voluptatibus magni minus. Assumenda, explicabo. Nam, blanditiis magnam? Numquam ducimus magni, impedit rerum laborum adipisci hic, assumenda, voluptatum sequi quibusdam molestiae similique soluta dolorem harum ratione accusantium delectus natus sed nihil officiis aliquam nobis aut ullam quod. Delectus officia et possimus voluptatibus adipisci rerum veniam ab, fugit quaerat reiciendis nobis illo sed esse. Tenetur dolorum, atque culpa obcaecati veritatis corporis quasi non vel veniam eum.</p>
        </div>
       </section>
      
      <Misson/>
      <br/>
        
    </>
  )
}

export default About;
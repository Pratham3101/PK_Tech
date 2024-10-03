import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({ fullname: '', email: '', mobile: '', doc: null, message: ''});

  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [doc, setDoc] = useState(null);
  const [message, setMessage] = useState('');

  const GetFullName = (e) => {
    setFullName(e.target.value);
  };

  const SaveForm = (e) => {
    e.preventDefault();

        alert('Congrats, you have successfully submitted your data!');

       setData({ fullname: fullname, email: email, mobile:mobile, doc: doc, message: message});


        setFullName('');
        setEmail('');
        setMobile('');
        setDoc(null);
        setMessage('');

        e.target.reset();
     
  };

  console.log(data);

  return (
    <>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 my-auto">
              <center>
                <h4>Contact Us</h4>
              </center>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">


                <div className="col-md-6">

                  <form onSubmit={(e) => SaveForm(e)}>

                    <h6 className="main-heading">Contact Form</h6>
                    <hr />
                    <div className="form-group">
                      <label className="mb-1">Full Name:</label>
                      <input type="text" value={fullname} onChange={(e) => GetFullName(e)} className="form-control" placeholder="Enter full name"/>
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Email:</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Mobile Number:</label>
                      <input type="text"
                        value={mobile} onChange={(e) => setMobile(e.target.value)} className="form-control" placeholder="Enter mobile number"/>
                    </div>
                    <div className="form-group py-3">
                      <label className="mb-1">Upload Your Resume:</label>
                      <br />
                      <input type="file" onChange={(e) => setDoc(e.target.files[0].name)} className="form control"/>
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Message:</label>
                      <textarea rows="3" value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" placeholder="Type your message..."></textarea>
                    </div>
                    <div className="form-group py-3 text-center">
                      <button type="submit" className="btn btn-danger">Submit form</button>
                    </div>
                  </form>
                </div>

                <div className="col-md-6 border-start">
                  <h5 className="main-heading">Address</h5>
                  <div className="underline"></div>
                  <h5>India Office</h5>
                  <p>#XXX, Hinjwadi-Phase-2, Pune Maharashtra - 456789, India</p>
                  <p>Phone: +91 7845128956</p>
                  <p>Phone: +91 8956237845</p>
                  <p>Email: pktech07@gmail.com</p>

                  <br />
                  <h4>UAE Office</h4>
                  <p>Block C, Handan Award Complex Plot No.388, P.O.Box - 7998</p>
                  <p>Phone: +971-45-1234567</p>
                  <p>Email: pktech45@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

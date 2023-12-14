import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleFormData=(e)=>{
    e.preventDefault();
    if(email.length == 0){
      alert("email cant be null or empty");
    }
    const items = {firstName, lastName, email, subject, message}
    console.log("items : " +JSON.stringify(items));
  }
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row mb-5'>
          <div className='col-md-1' />
          <div className='col-md-5'>
            <div className='row'>
              <div>
                <h3>Contact</h3>
              </div>
              <div>
                Looking forward to hearing from you
              </div>
            </div>
            <div className='row'>
              <div>
                <p><strong>Phone</strong></p>
              </div>
              <div>
                123-123-45678
              </div>
            </div>
            <div className='row'>
              <div>
                <strong>Email</strong>
              </div>
              <div>
                Info@gmail.com
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <form onSubmit={handleFormData}>
              <div className="row mb-2">
                <div className="col-md-4 me-3">
                  <div>First Name</div>
                </div>
                <div className="col-md-4">
                  <div>Last Name</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 me-3">
                  <input type="text" onChange={(e)=>setFirstName(e.target.value)} className='forminput' id="fname"/>
                </div>
                <div className="col-md-5">
                  <input type="text" onChange={(e)=>setLastName(e.target.value)} className='forminput' id="lname"/>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-5 me-3">
                  <div>Email*</div>
                </div>
                <div className="col-md-5">
                  <div>Subject</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 me-3">
                  <input type="text" onChange={(e)=>setEmail(e.target.value)} className='forminput' id="email"/>
                </div>
                <div className="col-md-5">
                  <input type="text" onChange={(e)=>setSubject(e.target.value)} className='forminput' id="subject"/>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-5 me-3">
                  <div>Message</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 me-3">
                  <textarea type="text" onChange={(e)=>setMessage(e.target.value)} id="message"/>
                </div>
                <div className="col-md-5">
                  <button className='formbutton'>submit</button> 
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

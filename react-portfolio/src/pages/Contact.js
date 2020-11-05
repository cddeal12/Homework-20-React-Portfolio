import React from "react";

const Contact = () => (
  <div>
    <div className="container">
        <div className="row no-gutters">
            <main className="col-sm-8 my-5 mr-5 ml-5 bg-light" id="mainbox">

                <h1 className="header ml-3 my-3">Contact</h1>

                <hr />

                <form className="m-4">
                    <div className="form-group">
                        <label htmlFor="name-input">Name</label>
                        <input type="name" className="form-control" id="name-input" aria-describedby="emailHelp" placeholder="Enter Name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email-input">Email Address</label>
                        <input type="email" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>

                    <div className="form-group" >
                        <label htmlFor="message-input">Message</label>
                        <textarea className="form-control" id="message-input" rows="4"></textarea>
                    </div>

                    <button type="submit" className="btn submitbtn">Submit</button>
                </form>
            </main>
        </div>

    </div>
  </div>
);

export default Contact;

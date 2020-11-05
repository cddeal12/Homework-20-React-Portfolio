import React from "react";
import itMe from "../assets/itme.jpg";

const Home = () => (
  <div>
    
    <div className="container">
        <div className="row no-gutters">
            <main className="col-sm-8 my-5 mr-5 ml-5 bg-light main-box" id="mainbox">
                <div className="header">
                    <h1 className="ml-3 my-3">About Me</h1>
                </div>

                <hr />

                <div className="row">
                    <content className="col-sm-12">
                        <div className="float-left">
                            <img src={itMe} alt="Caleb Deal" className="mx-auto p-1" />
                        </div>
                        
                        <article className="maintext px-2">
                            My name is Caleb Deal. I am currently a student in the Georgia Tech Full-Time Coding Bootcamp.
                            I was born in Statesboro Georgia where I lived and attended high-school. I became very interested 
                            in medical biology and attended Georgia Tech for two years working towards the degree, however I am 
                            currently taking time away to develop new skills and seek employment. Today I live with my partner in 
                            Tacoma, Washington, where I attend my bootcamp classes remotely.
                        </article>
                        <br />
                        <article className="maintext px-2">
                            I am hard at work learning more about web development and improving my skills. You can follow my progress and see my latest projects at my 
                            <a href="https://github.com/cddeal12" target="_blank" rel="noreferrer"> Github profile</a>.
                        </article>
                        <br />
                        <article className="maintext px-2">
                            I am also available on <a href="https://www.linkedin.com/in/caleb-deal-624862174/">Linkedin</a>.
                            <br />
                            My resume is available <a href="https://drive.google.com/file/d/11IGt4YPwGTszwzHxWqfiy-nq_dNaHecJ/view?usp=sharing">Here</a>.
                        </article>
                    </content>
                </div>
            </main>
        </div>
    </div>
  </div>
);

export default Home;

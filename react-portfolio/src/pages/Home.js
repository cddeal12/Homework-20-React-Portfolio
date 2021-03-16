import React from "react";
import itMe from "../assets/itme.jpg";

const Home = () => (
  <div>
    
    <div className="container">
        <div className="row no-gutters">
            <main className="col-sm-12 my-5 mr-5 ml-5 bg-light main-box" id="mainbox">
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
                            My name is Caleb Deal. I am a full-stack web developer currently living in Tacoma, Washington. I was born in Statesboro Georgia where I grew up and attended high school.
                            There I became very interested in medical biology and and attended Georgia Tech for two years while working towards a biomedical engineering degree. Now, however, I am 
                            developing new skills as a web developer and working towards a new career in this field. I attended Georgia Tech once again as a bootcamp student and am now cerified as a 
                            full-stack developer.
                        </article>
                        <br />
                        <article className="maintext px-2">
                            I am hard at work learning new technologies and sharpening my skills. You can follow my progress here on my portfolio or at any of the links in my contact page.
                        </article>
                        <br />
                    </content>
                </div>
            </main>
        </div>
    </div>
  </div>
);

export default Home;

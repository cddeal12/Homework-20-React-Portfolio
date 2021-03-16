import React from "react";
import eataburger from "../assets/Eat-a-Burger.PNG";
import datemate from "../assets/DateMateThumb.PNG";
import andnowtheweather from "../assets/AndNowTheWeatherThumb.PNG";
import dayplanner from "../assets/DayPlannerThumb.PNG";
import trashworld from "../assets/RubbishWrld.png";

const Portfolio = () => (
    <div>
        <div className="container">
        
            <div className="row no-gutters">

                <main className="col-sm-12 my-5 mr-5 ml-5" id="mainbox">

                    <h1 className="header ml-3 my-3">Portfolio</h1>

                    <hr />

                    <div className="row">
                        <content className="col-sm-12">
                            <section className="my-3 border-dark bg-light">
                                <img src={trashworld} alt="The splash page for Rubbish Rumble" className="m-4 p-2 portfolio-img" />
                                <p className="mx-3 my-3">
                                Rubbish rumble is a simple character creation and battle app with a unique theme. I was responsible for coding the battle engine 
                                and logic for the app, and did extensive work on its api routes. This app is deployed <a href="http://rubbishrumble.herokuapp.com/">Here</a>.
                                </p>
                            </section>
                            <section className="my-3 border-dark bg-light">
                                <img src={datemate} alt="DateMate splash page" className="m-4 p-2 portfolio-img" />
                                <p className="mx-3 my-3">
                                DateMate is a web app for users planning a dinner-date. It allows users to search and filter recipes by food allergies or
                                intolerances, and then get a movie reccomendation based on genre. In the end it will display the recipe, along with the cooking
                                instructions and a wine pairing, followed by the movie reccomendation and the platforms to stream it on. This app is deployed 
                                <a href="https://cddeal12.github.io/Project-1/">Here</a>.
                                </p>
                            </section>
                            <section className="my-3 border-dark bg-light">
                                <img src={andnowtheweather} alt="A weather app in chrome" className="m-4 p-2 portfolio-img" />
                                <p className="mx-3 my-3">
                                    And Now The Weather is a web app that uses the Open Weather api to check the current and forecasted weather at a chosen city. 
                                    The app saves cities the user searches for and keeps them in a sidebar for ease of use, and it saves the user's last checked 
                                    city for easy checking on each re-visit. This app is deployed <a href="https://cddeal12.github.io/Homework-06-Weather-App/">Here</a>.
                                </p>
                            </section>
                            <section className="my-3 border-dark bg-light">
                                <img src={dayplanner} alt="Day Planner page" className="m-4 p-2 portfolio-img" />
                                <p>
                                Day Planner is a web app that tracks the time of day and displays an hour by hour day planner for the current date. 
                                It uses the current time to display various blocks of time as different colors based on whether they are in the past, present, 
                                or future. It supports adding, editing, and removing tasks to be done throughout the workday, and it will always save changes 
                                made to the hour blocks. It is deployed <a href="https://cddeal12.github.io/Homework-05-Day-Planner/">Here</a>.
                                </p>
                            </section>
                            <section className="my-3 border-dark bg-light">
                                <img src={eataburger} alt="The splash page for Eat-A-Burger" className="m-4 p-2 portfolio-img" />
                                <p className="mx-3 my-3">
                                Eat-A-Burger is a site I built to practice MVC conventions. It stores a table of burgers and allows a user to add to it, or to set certain burgers as 
                                'devoured'. This app is deployed <a href="https://homework-13-burger-logger.herokuapp.com/">Here</a>.
                                </p>
                            </section>
                        </content>
                    </div>
                </main>
            </div>
        </div>
    </div>
);

export default Portfolio;

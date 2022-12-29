import React from "react";
import { Link } from "react-router-dom";

export default function About(prop) {
    return (
        <>
            

                <div className="cover-container d-flex w-100 h-100 p-4 mx-1 flex-column">

                    <main className="px-3">
                        <h1 className="text-center pt-4 pb-4">About Us</h1>
                        <p className="lead">
                            When it comes to text analyzers, there is a good bit for businesses to know. In this piece, we will peel back the layers to reveal what you should know and why you need to add a text analyzer to your daliy lifesytle!<br/><br/>

                        
                            facts says that around 80-90% of text data is unstructured, and the ability to capture and organize it quickly is key.
                            About 90% of all the data in the world we have created in the last 24 months — averaging 2.5 quintillion bytes per day.
                            Keeping pace with all of this manually is impossible. And this is where a text analyzer comes in.
                             <br/>
                             <br/>
                            we provide so many functionality to make your daliy life easy.you can convert your data into uppercase and lower LowerCase. you can find out how many word are in the data in one click.
                            <br/>
                            <br/>
                            Test out all of this functionality by cliking below button now!

                        </p>
                        <p className="lead text-center">
                            <Link to="/" className={`btn fw-bold btn-${prop.textTheme.color === 'black' ? 'success' : 'primary'}`}>Get Started</Link>
                        </p>
                    </main>

                </div>
        </>
    );
}
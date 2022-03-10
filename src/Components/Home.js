import React from 'react';
import '../App.css';



export default function Home() {
   
    return(
        <div className="HomePage">
            <h1 className="HomeTitle"><center>Explore The World One Bite At a Time</center></h1>
            
            <h4 className="introduction"><center>The world currently has 195 countries. 
            While each country has it's own culture, 
            did you know that many of those countries have differing cultures within? 
            Each with their own ways of life in expression, art, and most importantly food.
            Take a trip out to a different region of the world, 
            they'll have a different way of making pizza, pies, meat dishes and whatever else you can think of! 
            Come explore the world with us one bite at a time!</center></h4>
            <center><h2 className="slideshowTitle">Here are some bites we think you should try!</h2></center>
            <div className="slideshow">
                <img src="Images/Gyros.jpg" alt="1" />
                {/* <img src="Images/Birriatacos.jpg" alt="2" />
                <img src="Images/Greencurry.jpg" alt="3" /> */}
                <img src="Images/gulabjamun2.jpg" alt="4" />
                {/* <img src="Images/koreancorndogs.jpg" alt="5" /> */}
                {/* <img src="Images/pizza.jpg" alt="6" /> */}
                {/* <img src="Images/steak.jpg" alt="7" />
                <img src="Images/sushi.jpg" alt="8" /> */}
                {/* <img src="Images/koreanfriedchicken.jpg" alt="9" />
                <img src="Images/nachos.jpg" alt="10" />
                <img src="Images/lomein2.jpg" alt="11" />
                <img src="Images/chickentikkamasala.jpg" alt="12" /> */}
            </div>
        </div>
        
    )
    



}
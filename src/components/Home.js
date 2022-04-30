import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Home() {
  return (
    <div className="container">
        <div className="row">
            <div class="title">
               <h1>Welcome to Receipes corner</h1>
               <p>Go to All Receipes tab to explore and have fun</p>
            </div>
            <div className="slider-sec">
               <img src="https://www.yumcurry.com/wp-content/uploads/2017/08/honey-glazed-chilli-potato-recipe.jpg" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Home
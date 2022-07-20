import React, { useState, useEffect } from "react";
import video from "./video.mp4"
import './App.css';
function App() {
const [tips, setTips] = useState("");
const fetchTips = async () => {

const response = await fetch(

"http://www.boredapi.com/api/activity/"

);

const data = await response.json();

setTips(data.activity);

};
useEffect(() => {

fetchTips();

}, []);

return (

	<div className="App">
		<div className="container">	
		<video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
		</div>
		<div className="content">
		<h1>If you are bored, press the button and choose what to do...</h1>
		<button className="btn" onClick={fetchTips}>Click here</button>
		<p className="api"> {tips} </p>
		</div>
		
</div>
);

}



export default App;
import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  //Making state of our application
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState(" ");

  //logic

  let calcBmi = (e) => {
    e.preventDefault(); // stop broswer auto reloading

    // Convert weight and height to numbers, handling potential NaN
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (
      isNaN(weightValue) ||
      isNaN(heightValue) ||
      weightValue === 0 ||
      heightValue === 0
    ) {
      alert("Please enter valid weight and height values.");
     /* Swal.fire({
        title: "Error!",
        text: "Please enter a valid weight and height",
        icon: "error",
        background: "#f0ad4e", // Set the background color
      });*/
      setBmi(""); // Clear the BMI value
    } else {
      let bmi = (weightValue / (heightValue * heightValue)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are normal weight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are overweight");
      } else {
        setMessage("You are obese");
      }
    }
  };

  //reload

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form className="form" onSubmit={calcBmi}>
          <div>
            <label>Weight (ibs) </label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            ></input>
          </div>

          <div>
            <label>Height (in)</label>
            <input
              type="text"
              placeholder="Enter height value"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            ></input>
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is :{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
import React, { useState } from "react";
import data from "./data"
import Tours from "./components/Tours";

function App() {

  const [tours, setTour] = useState(data);
  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTour(newTours);
  }
  function AddTour(id) {
    const newTours = tours.filter((tour) => tour.id === id)
    setTour(newTours);
  }
  function clickhandler() {
    setTour(data);
  }
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={clickhandler}>Refresh</button>
      </div>
    )
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} AddTour={AddTour}></Tours>

    </div>
  )
};

export default App;

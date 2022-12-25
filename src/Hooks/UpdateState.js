//When state is updated, the entire state gets overwritten.

/* Because we need the current value of state, we pass a function into our setCar function. This function receives the previous value.

We then return an object, spreading the 'previousState' and overwriting only the color. */

import { useState } from "react";

function Vehicle() {
    const [car, setCar] = useState({
      brand: "Audi",
      model: "Audi A6",
      year: "2012",
      color: "blue"
    });
  
    //JavaScript spread operator(...)
    const updateColor = () => {
      setCar(previousState => {
        return { ...previousState, color: "green" }
      });
    }
  
    return (
      <>
        <h3>My {car.brand}</h3>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
        <button
          type="button"
          onClick={updateColor}
        >Green</button>
      </>
    )
  }

  export default Vehicle;
//Since we are now tracking a single object, we need to reference that object and then the property of that object when rendering the component. (Ex: car.brand)
//We could create multiple state Hooks to track individual values.

import { useState } from "react";

//Create a single Hook that holds an object:
function Car() {
    const [car, setCar] = useState({
      brand: "BMW",
      model: "Mustang",
      year: "2020",
      color: "red"
    });
  
    return (
      <>
        <h3>My {car.brand}</h3>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
      </>
    )
  }

  export default Car;
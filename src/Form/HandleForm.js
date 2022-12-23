import React, { useState } from "react";

function HandleForm() {
    //Use of state
  const [name, setName] = useState();
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState();

  function getFormData(e) {
    console.warn(name, interest, tnc);
    e.preventDefault(); //It prevent it from submitting a form
  }
  return (
    <div>
      <h4>Forms</h4>
      <form onSubmit={getFormData}>
      
      {/* "event.target" gives you the element that triggered the event.
      So, "event.target.value" retrieves the value of that element (an input field, in my example). */}

      {/* onChange={(e) => console.log(e)}. Inspect the log and you'll find a list of events in which one of them is target. Open target (if not already opened) and within target, you'll find value. In short, this is the target value that's being typed in your input, it's what the user is typing. */}

        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)} />
        <br />

        <select onChange={(e) => setInterest(e.target.value)}>
          <option>Select option</option>
          <option>Iron Man</option>
          <option>Hulk</option>
          <option>Ant Man</option>
        </select>
        <br />

        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>Accept Terms and Condition</span>
        <br />
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default HandleForm;

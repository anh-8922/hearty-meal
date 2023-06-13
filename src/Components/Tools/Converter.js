import React, { useState } from "react";

export default function Converter() {
  const initialState = {
    pounds: "",
    grams: "",
    kilograms: "",
    ounces: ""
  };

  const [state, setState] = useState(initialState);

  const handlePounds = e => {
    const pounds = e.target.value;

    setState({
      pounds,
      grams: pounds / 0.0022046,
      kilograms: pounds / 2.2046,
      ounces: pounds * 16
    });

    if (pounds === "") {
      setState(initialState);
    }
  };

  const handleGrams = e => {
    const grams = e.target.value;

    setState({
      grams,
      pounds: grams * 0.0022046,
      kilograms: grams / 1000,
      ounces: grams * 0.03527
    });

    if (grams === "") {
      setState(initialState);
    }
  };

  const handleKilograms = e => {
    const kilograms = e.target.value;

    setState({
      kilograms,
      pounds: kilograms * 2.2046,
      grams: kilograms * 1000,
      ounces: kilograms * 35.27
    });

    if (kilograms === "") {
      setState(initialState);
    }
  };
  
  const handleOunces = e => {
    const ounces = e.target.value;

    setState({
      ounces,
      pounds: ounces / 16,
      kilograms: ounces / 35.27,
      grams: ounces / 0.03527
    });

    if (ounces === "") {
      setState(initialState);
    }
  };
  
  const clearAll = () => {
    setState(initialState);
  };

  return(
    <>
      <div >
        <form
          onSubmit={e => e.preventDefault()}
          noValidate
          autoComplete="off"
        >
          <h1 className="title">Weight Converter</h1>
          <input
            id="standard-number"
            label="Enter pounds"
            value={state.pounds}
            onChange={handlePounds}
            type="number"
            margin="normal"
            className="input-field"
          />
          <input
            id="standard-number"
            label="Enter grams"
            value={state.grams}
            onChange={handleGrams}
            type="number"
            margin="normal"
            className="input-field"
          />
          <input
            id="standard-number"
            label="Enter kilograms"
            value={state.kilograms}
            onChange={handleKilograms}
            type="number"
            margin="normal"
            className="input-field"
          />
          <input
            id="standard-number"
            label="Enter ounces"
            value={state.ounces}
            onChange={handleOunces}
            type="number"
            margin="normal"
            className="input-field"
          />
          <button
            variant="contained"
            color="primary"
            onClick={clearAll}
            className="button"
          >
            Clear All
          </button>
        </form>
        
      </div>
      
    </>
  );
}

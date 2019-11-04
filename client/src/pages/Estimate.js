import React, { useState } from "react";

const Estimate = function Estimate() {
  const [custName, setCustName] = useState("");
  const [homeType, setHomeType] = useState("house");
  const [sqFoot, setSqFoot] = useState("");
  const [stairs, setStairs] = useState("");
  const [walk, setWalk] = useState("");
  const [guys, setGuys] = useState(2);

  const handleInputChange = event => {
    const { name, value, text } = event.target;
    switch (name) {
      case "custName":
        setCustName(value);
        break;
      case "homeType":
        setHomeType(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            name="custName"
            onChange={handleInputChange}
            placeholder="Customer Name"
          ></input>
        </div>
        <div>
          <select name="homeType" onChange={handleInputChange}>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
          </select>
        </div>
        <div>
          {homeType === "house" ? (
            <select name="sqFoot">
              <option>300-500 sqft</option>
              <option>600-800 sqft</option>
              <option>900-1200 sqft</option>
              <option>1200+</option>
            </select>
          ) : (
            <select>
              <option>Studio</option>
              <option>1 Bedroom</option>
              <option>2 Bedroom</option>
              <option>3 Bedroom</option>
            </select>
          )}
          <div></div>
        </div>
      </form>
      {/* summary box that will display once all types have been declared */}
      {homeType && custName != "" ? <p>{homeType}</p> : <p></p>}
    </div>
  );
};

export default Estimate;

import React, { useState } from "react";

const Estimate = function Estimate() {
  const [custName, setCustName] = useState("");
  const [homeType, setHomeType] = useState("house");
  const [sqFoot, setSqFoot] = useState("300-500 sqft");
  const [roomCount, setRoomCount] = useState("Studio");
  const [stairs, setStairs] = useState("1st");
  const [walk, setWalk] = useState("No");
  const [guys, setGuys] = useState(2);

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case "custName":
        setCustName(value);
        break;
      case "homeType":
        setHomeType(value);
        break;
      case "roomCount":
        setRoomCount(value);
        break;
      case "sqFoot":
        setSqFoot(value);
        break;
      case "guys":
        setGuys(value);
      case "stairs":
        setStairs(value);
        break;
      case "walk":
        setWalk(value);
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
        <div classnName="homeType">
          <label>House or Apartment</label>
          <select name="homeType" onChange={handleInputChange}>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
          </select>
        </div>
        <div className="size">
          <label>Size</label>
          {homeType === "house" ? (
            <select name="sqFoot" onChange={handleInputChange}>
              <option value="300-500 sqft">300-500 sqft</option>
              <option value="600-800 sqft">600-800 sqft</option>
              <option value="900-1200 sqft">900-1200 sqft</option>
              <option value="1200+">1200+</option>
            </select>
          ) : (
            <select name="roomCount" onChange={handleInputChange}>
              <option value="Studio">Studio</option>
              <option value="1 Bedroom">1 Bedroom</option>
              <option value="2 Bedroom">2 Bedroom</option>
              <option value="3 Bedroom">3 Bedroom</option>
            </select>
          )}
          <div className="stairs">
            <label>Floor</label>
            <select>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th +">4th</option>
              <option value="Highrise">Highrise</option>
            </select>
          </div>
          <div className="guys">
            <label>Number of Movers</label>
            <select name="guys" onChange={handleInputChange}>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
          <div className="walk">
            <label>Long Walk?</label>
            <select name="walk" onChange={handleInputChange}>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
        </div>
      </form>
      {/* summary box that will display once all types have been declared */}
      {homeType && custName && (roomCount || sqFoot) !== "" ? (
        <p>
          {custName}
          {homeType}
          {homeType === "house" ? sqFoot : roomCount}
          {guys}
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Estimate;

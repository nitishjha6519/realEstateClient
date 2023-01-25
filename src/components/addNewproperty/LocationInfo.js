import React from "react";

import "./PropertyInfo.css";

const LocationInfo = ({ formData, setFormData, errors, setErrors }) => {
  const handleChange = (event) => {
    // let key = event.target.name;
    // // console.log(key, error);
    // delete error[key];
    // setErrors(error);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form className="NewpropertyForms">
        <div className="grid">
          <div className="form-left">
            <div className="blockLabel">
              <label htmlFor="email">email </label>
            </div>
            <input
              className="NewPropertyInput"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="blockLabel">
              <label htmlFor="area">area </label>
            </div>
            <select
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
            >
              <option value="">Select area</option>

              <option value="10">10</option>
              <option value="20">20</option>
            </select>

            <div className="blockLabel">
              <label htmlFor="address">mobile </label>
            </div>
            <input
              className="NewPropertyInput"
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <div className="blockLabel">
              <label htmlFor="latitude">latitude </label>
            </div>
            <input
              className="NewPropertyInput"
              type="number"
              id="latitude"
              name="latitude"
              value={formData.latitude}
              onChange={handleChange}
            />
          </div>
          <div className="form-right">
            <div className="blockLabel">
              <label htmlFor="city">city </label>
            </div>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="">Select city</option>

              <option value="Delhi">Delhi</option>
              <option value="outside delhi">outside delhi</option>
            </select>
            <div className="blockLabel">
              <label htmlFor="pincode">pincode </label>
            </div>
            <select
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            >
              <option value="">Select pincode</option>

              <option value="111">111</option>
              <option value="222">222</option>
            </select>
            <div className="blockLabel">
              <label htmlFor="landmark">landmark </label>
            </div>
            <input
              className="NewPropertyInput"
              type="text"
              id="landmark"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
            />
            <div className="blockLabel">
              <label htmlFor="longitude">longitude </label>
            </div>
            <input
              className="NewPropertyInput"
              type="number"
              id="longitude"
              name="longitude"
              value={formData.longitude}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LocationInfo;

import React from "react";

import "./PropertyInfo.css";

const Property = ({ formData, setFormData, errors, setErrors }) => {
  const handleChange = (event) => {
    // let key = event.target.name;
    // console.log(key, error);
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
              <label htmlFor="length">Length </label>
            </div>
            <input
              className="NewPropertyInput"
              type="number"
              id="length"
              name="length"
              value={formData.length}
              onChange={handleChange}
            />
            <div className="blockLabel">
              <label htmlFor="totalarea">TotalArea </label>
            </div>
            <input
              className="NewPropertyInput"
              type="number"
              id="totalarea"
              name="totalarea"
              value={formData.totalarea}
              onChange={handleChange}
            />

            <div className="blockLabel">
              <label htmlFor="bhk">No Of BHK </label>
            </div>
            <select
              id="bhk"
              name="bhk"
              value={formData.bhk}
              onChange={handleChange}
            >
              <option value="">Select no of BHK</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

            <div className="blockLabel">
              <label htmlFor="attached">Attached </label>
            </div>
            <select
              id="attached"
              name="attached"
              value={formData.attached}
              onChange={handleChange}
            >
              <option value="">Select Attached</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="blockLabel">
              <label htmlFor="furnished">Furnished </label>
            </div>
            <select
              id="furnished"
              name="furnished"
              value={formData.furnished}
              onChange={handleChange}
            >
              <option value="">Select Furnished</option>

              <option value="Furnished">Furnished</option>
              <option value="Fully-Furnished">Fully-Furnished</option>
              <option value="Semi-Furnished">Semi-Furnished</option>
            </select>
            <div className="blockLabel">
              <label htmlFor="lift">Lift </label>
            </div>
            <select
              id="lift"
              name="lift"
              value={formData.lift}
              onChange={handleChange}
            >
              <option value="">Select Lift</option>

              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="blockLabel">
              <label htmlFor="facing">Facing </label>
            </div>
            <select
              id="facing"
              name="facing"
              value={formData.facing}
              onChange={handleChange}
            >
              <option value="">Select Facing</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="form-right">
            <div className="blockLabel">
              <label htmlFor="breath">Breath </label>
            </div>
            <input
              className="NewPropertyInput"
              type="number"
              id="breath"
              name="breath"
              value={formData.breath}
              onChange={handleChange}
            />
            <div className="blockLabel">
              <label htmlFor="areaunit">areaunit </label>
            </div>
            <input
              className="NewPropertyInput"
              type="text"
              id="areaunit"
              name="areaunit"
              value={formData.areaunit}
              onChange={handleChange}
            />

            <div className="blockLabel">
              <label htmlFor="floors">floors </label>
            </div>
            <select
              id="floors"
              name="floors"
              value={formData.floors}
              onChange={handleChange}
            >
              <option value="">Select floors</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

            <div className="blockLabel">
              <label htmlFor="westerntoilet">westerntoilet </label>
            </div>
            <select
              id="westerntoilet"
              name="westerntoilet"
              value={formData.westerntoilet}
              onChange={handleChange}
            >
              <option value="">Select westerntoilet</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <div className="blockLabel">
              <label htmlFor="carparking">carparking </label>
            </div>
            <select
              id="carparking"
              name="carparking"
              value={formData.carparking}
              onChange={handleChange}
            >
              <option value="">Select carparking</option>

              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <div className="blockLabel">
              <label htmlFor="electricity">electricity </label>
            </div>
            <select
              id="electricity"
              name="electricity"
              value={formData.electricity}
              onChange={handleChange}
            >
              <option value="">Select electricity</option>

              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="btns"></div>
        </div>
      </form>
    </div>
  );
};

export default Property;

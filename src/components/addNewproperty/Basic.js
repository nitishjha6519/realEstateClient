import React from "react";

import "./PropertyInfo.css";

const Basic = ({ formData, setFormData, errors, setErrors }) => {
  const handleChange = (event) => {
    // let key = event.target.name;
    // console.log(key, error);
    // if (error[key]) {
    // delete error[key];

    //}
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    // setErrors({ ...error, [event.target.name]: "" });
  };

  return (
    <div>
      <form className="NewpropertyForms">
        <div className="grid">
          <div className="form-left">
            <div className="blockLabel">
              <label htmlFor="propertytype">propertytype </label>
            </div>
            <select
              id="propertytype"
              name="propertytype"
              value={formData.propertytype}
              onChange={handleChange}
            >
              <option value="">Select propertytype</option>
              <option value="Plot">Plot</option>
              <option value="House">House</option>
              <option value="Flat">Flat</option>
            </select>

            <div className="blockLabel">
              <label htmlFor="price">price </label>
            </div>
            <input
              className="NewPropertyInput"
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />

            <div className="blockLabel">
              <label htmlFor="propertyage">propertyage </label>
            </div>
            <select
              id="propertyage"
              name="propertyage"
              value={formData.propertyage}
              onChange={handleChange}
            >
              <option value="">Select propertyage</option>

              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            <div className="blockLabel">
              <label htmlFor="propertydescription">price </label>
            </div>
            <input
              className="NewPropertyInput"
              type="text"
              id="propertydescription"
              name="propertydescription"
              value={formData.propertydescription}
              onChange={handleChange}
            />
          </div>

          <div className="form-right">
            <div className="blockLabel">
              <label htmlFor="propertydescription">price </label>
            </div>
            <select
              id="negotable"
              name="negotable"
              value={formData.negotable}
              onChange={handleChange}
            >
              <option value="">Select negotable</option>

              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="blockLabel">
              <label htmlFor="ownership">ownership </label>
            </div>
            <select
              id="ownership"
              name="ownership"
              value={formData.ownership}
              onChange={handleChange}
            >
              <option value="">Select ownership</option>

              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="blockLabel">
              <label htmlFor="propertyapproved">price </label>
            </div>
            <select
              id="propertyapproved"
              name="propertyapproved"
              value={formData.propertyapproved}
              onChange={handleChange}
            >
              <option value="">Select propertyapproved</option>

              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="blockLabel">
              <label htmlFor="bankloan">price </label>
            </div>
            <select
              id="bankloan"
              name="bankloan"
              value={formData.bankloan}
              onChange={handleChange}
            >
              <option value="">Select bankloan</option>

              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Basic;

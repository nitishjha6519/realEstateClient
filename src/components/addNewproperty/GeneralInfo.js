import React from "react";

import "./PropertyInfo.css";

const GeneralInfo = ({ formData, setFormData, errors, setErrors }) => {
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
              <label htmlFor="name">name </label>
            </div>
            <select
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            >
              <option value="">Select name</option>

              <option value="Owner">Plot</option>
              <option value="Not Owner">House</option>
            </select>

            <div className="blockLabel">
              <label htmlFor="postedby">postedby </label>
            </div>
            <select
              id="postedby"
              name="postedby"
              value={formData.postedby}
              onChange={handleChange}
            >
              <option value="">Select postedby</option>

              <option value="Owner">Plot</option>
              <option value="Not Owner">House</option>
            </select>

            <div className="blockLabel">
              <label htmlFor="featuredpackage">featuredpackage </label>
            </div>
            <select
              id="featuredpackage"
              name="featuredpackage"
              value={formData.featuredpackage}
              onChange={handleChange}
            >
              <option value="">Select featuredpackage</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="form-right">
            <div className="blockLabel">
              <label htmlFor="mobile">mobile </label>
            </div>
            <input
              className="NewPropertyInput"
              type="number"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />

            <div className="blockLabel">
              <label htmlFor="saletype">saletype </label>
            </div>
            <select
              id="saletype"
              name="saletype"
              value={formData.saletype}
              onChange={handleChange}
            >
              <option value="">Select saletype</option>

              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="blockLabel">
              <label htmlFor="ppdpackage">ppdpackage </label>
            </div>
            <select
              id="ppdpackage"
              name="ppdpackage"
              value={formData.ppdpackage}
              onChange={handleChange}
            >
              <option value="">Select ppdpackage</option>

              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;

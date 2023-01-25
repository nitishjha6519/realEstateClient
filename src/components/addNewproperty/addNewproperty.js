import React, { useState } from "react";
import Property from "./PropertyInfo";
import Basic from "./Basic";
import LocationInfo from "./LocationInfo";

import GeneralInfo from "./GeneralInfo";
import Sidebar from "../sidebar/sidebar";
import Header from "../Header/Header";
import "./addNewProperty.css";
import { useNavigate } from "react-router-dom";

// import axios from "axios";

function Form() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  // const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    propertytype: "",
    negotable: "",
    price: "",
    ownership: "",
    propertyage: "",
    propertyapproved: "",
    propertydescription: "",
    bankloan: "",
    name: "",
    mobile: "",
    postedby: "",
    saletype: "",
    featuredpackage: "",
    ppdpackage: "",
    email: "",
    city: "",
    area: "",
    pincode: "",
    address: "",
    landmark: "",
    latitude: "",
    longitude: "",
    length: "",
    breath: "",
    totalarea: "",
    areaunit: "",
    bhk: "",
    floors: "",
    attached: "",
    westerntoilet: "",
    furnished: "",
    carparking: "",
    lift: "",
    electricity: "",
    facing: "",
  });

  const [errors, setErrors] = useState({
    propertytype: "",
    negotable: "",
    price: "",
    ownership: "",
    propertyage: "",
    propertyapproved: "",
    propertydescription: "",
    bankloan: "",
    name: "",
    mobile: "",
    postedby: "",
    saletype: "",
    featuredpackage: "",
    ppdpackage: "",
    email: "",
    city: "",
    area: "",
    pincode: "",
    address: "",
    landmark: "",
    latitude: "",
    longitude: "",
    length: "",
    breath: "",
    totalarea: "",
    areaunit: "",
    bhk: "",
    floors: "",
    attached: "",
    westerntoilet: "",
    furnished: "",
    carparking: "",
    lift: "",
    electricity: "",
    facing: "",
  });

  const validation = () => {
    const fields = Object.keys(formData);
    let isValid = true;

    for (let i = 0; i < fields.length; i++) {
      let error = "";
      const field = fields[i];
      const value = formData[field];

      if (value === "") {
        error = "cannot be empty";
      }
      if (error) {
        isValid = false;
        setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
      }
    }
    return isValid;
  };

  function handleBackCancel() {
    if (page > 0) {
      setPage((currPage) => currPage - 1);
    } else {
      navigate("/dashboard");
    }
  }

  function handleSubmit() {
    //last page ,post data to db
    if (page === FormTitles.length - 1) {
      let res = validation();

      const token = window.localStorage.getItem("token");
      // console.log(token);
      const url = "http://127.0.0.1:5000/property/new";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
        body: JSON.stringify(formData),
      };

      if (res) {
        console.log("in");
        fetch(url, options)
          .then((res) => res.json())
          .then((data) => console.log(data));

        alert("FORM SUBMITTED");
        navigate("/dashboard");
      } else {
        alert("fields cannot be empty");
      }
    } else {
      setPage((currPage) => currPage + 1);
    }
  }

  const FormTitles = [
    "Basic Info",
    "Property Detail",
    "General Info",
    "Location Info",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <Basic
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      );
    } else if (page === 1) {
      return (
        <Property
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      );
    } else if (page === 2) {
      return (
        <GeneralInfo
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      );
    } else {
      return (
        <LocationInfo
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      );
    }
  };

  return (
    <div>
      <Sidebar />
      <Header />
      <div className="FormTitleBar">
        <div
          class="form-nav"
          id="0"
          onClick={(e) => {
            const pageId = Number(e.target.id);
            setPage(pageId);
          }}
          className={page === 0 ? "darkBlue" : "lightBlue"}
        >
          Basic Info
        </div>
        <div
          class="form-nav"
          id="1"
          onClick={(e) => {
            const pageId = Number(e.target.id);
            setPage(pageId);
          }}
          className={page === 1 ? "darkBlue" : "lightBlue"}
        >
          Property Detail
        </div>
        <div
          class="form-nav"
          id="2"
          onClick={(e) => {
            const pageId = Number(e.target.id);
            setPage(pageId);
          }}
          className={page === 2 ? "darkBlue" : "lightBlue"}
        >
          General Info
        </div>
        <div
          class="form-nav"
          id="3"
          onClick={(e) => {
            const pageId = Number(e.target.id);
            setPage(pageId);
          }}
          className={page === 3 ? "darkBlue" : "lightBlue"}
        >
          Location Info
        </div>
      </div>
      {/* <h1>{FormTitles[page]}</h1> */}

      <div className="allForms">{PageDisplay()}</div>

      <div className="btns">
        <button className="NewPropertyBtns" onClick={handleBackCancel}>
          {page > 0 ? "Back" : "Cancel"}
        </button>
        <button className="NewPropertyBtns" onClick={handleSubmit}>
          {page === FormTitles.length - 1 ? "Submit" : "Save and continue"}
        </button>
      </div>
    </div>
  );
}

export default Form;

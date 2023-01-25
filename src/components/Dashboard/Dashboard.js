import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/sidebar";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

import "../Search/Search.css";
import Table from "../Table/Table";
function Dashboard() {
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const token = window.localStorage.getItem("token");
  const [details, setDetails] = useState([]);

  useEffect(() => {
    let fetchData = setTimeout(() => {
      fetch("http://127.0.0.1:5000/property/propertydetails", {
        method: "GET",

        headers: {
          Authorization: `random ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "details");
          setDetails(data.allData);
        });
    }, 1000);

    return () => clearTimeout(fetchData);

    // eslint-disable-next-line
  }, [setDetails]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = details.filter((obj) => {
      let searchTerm = searchWord.toLowerCase();
      let ppd = obj.ppdid.toLowerCase();
      return ppd.includes(searchTerm);
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div>
      <Sidebar />
      <Header />
      {/* <SearchButton /> */}

      <div className="search-class">
        <div className="search-left">
          <div className="searchbar">
            <div className="searchbar-wrapper">
              <div className="searchbar-center">
                <div className="searchbar-input-spacer"></div>
                <input
                  value={wordEntered}
                  onChange={handleFilter}
                  type="text"
                  className="searchbar-input"
                  maxLength="2048"
                  name="q"
                  autoCapitalize="off"
                  autoComplete="off"
                  title="Search"
                  placeholder="Search PPD ID"
                />
              </div>

              <div className="searchbar-right">
                <div className="search-icon-wrapper">
                  <span className="search-icon searchbar-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {filteredData.length !== 0 && (
            <div className="filteredValues">
              {filteredData.slice(0, 5).map((obj) => {
                return (
                  <div className="item" key={obj.ppdid}>
                    {obj.ppdid}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div
          className="search-right NewPropertybutton"
          onClick={() => navigate("/addproperty")}
        >
          + Add New Property
        </div>
      </div>

      <Table filt={filteredData} />
    </div>
  );
}

export default Dashboard;

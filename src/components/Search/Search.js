import "./Search.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { details } from "../Table/Table";

function SearchButton() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  return (
    <div className="search-class">
      <div className="search-left">
        <div className="searchbar">
          <div className="searchbar-wrapper">
            <div class="searchbar-center">
              <div className="searchbar-input-spacer"></div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="searchbar-input"
                maxlength="2048"
                name="q"
                autocapitalize="off"
                autocomplete="off"
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
        {details
          .filter((obj) => {
            let searched = search.toLowerCase();
            let ppd = obj.ppdid.toLowerCase();

            return search && ppd.startsWith(searched) && ppd !== search;
          })
          .map((obj) => {
            return (
              <div key={obj.ppdid} onClick={(e) => setSearch(obj.ppdid)}>
                {obj.ppdid}
              </div>
            );
          })}
      </div>

      <div
        className="search-right NewPropertybutton"
        onClick={() => navigate("/addproperty")}
      >
        + Add New Property
      </div>
    </div>
  );
}

export default SearchButton;

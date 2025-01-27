import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams();

  searchParams.get('search')

  function searchStudent(e) {
    e.preventDefault();
    console.log(searchParams.get('search'));
  } 

  return (
    <>
      <div className="header">
        <div className="menu-icon">
          <span className="material-icons-outlined">menu</span>
        </div>
        {/* <form onSubmit={searchStudent} className="header-left"> */}
          <input
            ty
            className="search-bar"
            name="search"
            id="search"
            placeholder="Search"
          />
          <button type="submit" style={{ border: "none", background: "none" }}>
            <span className="material-icons-outlined">search</span>
          </button>
        {/* </form> */}
        <div className="header-right">
          <span className="material-icons-outlined">notifications</span>
          <span className="material-icons-outlined" style={{marginLeft:'15px'}}>email</span>
          {/* <span className="material-icons-outlined" style={{marginLeft:'15px'}}>account_circle</span> */}
        </div>
      </div>
    </>
  );
}

import React, { useContext, useState } from "react";
import images from "../context/imageContext";

const Navbar = () => {
  
  const [search, setSearch]= useState("")
  const context = useContext(images)

  const { searchImages } = context
  const onchange = e => setSearch(e.target.value)

  const handleSearch = async(e)=>{
    
    e.preventDefault()
    await searchImages(search)
    setSearch("")

    // const el = document.getElementById("heading")

    // History.window("#el")
    
  }
  

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="head">
              <button className="navbar-brand">
                Logo.Here
              </button>
              <div className="navbar-page">
                <p>Home</p>
              </div>
            </div>
          </div>
        </nav>

        <div className="banner">
          <div className="container">
            <h1 className="banner-title">Art Design Blog</h1>
            <p>everything that you want to know about art & design</p>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                className="search-input"
                id='search'
                value={search}
                onChange={onchange}
                placeholder="find your Interest . . ."
              />
              <button type="submit" className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </header>

    </>
  );
};

export default Navbar;

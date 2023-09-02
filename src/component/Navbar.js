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

    const el = document.getElementById("heading")

    History.window("#el")
    
  }
  

  return (
    <>
      <header>
        <nav class="navbar">
          <div class="container">
            <div className="head">
              <a href="index.html" class="navbar-brand">
                Logo.Here
              </a>
              <div class="navbar-page">
                <p>Home</p>
                <p>Blogs</p>
              </div>
            </div>
          </div>
        </nav>

        <div class="banner">
          <div class="container">
            <h1 class="banner-title">Art Design Blog</h1>
            <p>everything that you want to know about art & design</p>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                class="search-input"
                id='search'
                value={search}
                onChange={onchange}
                placeholder="find your Interest . . ."
              />
              <button type="submit" class="search-btn">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </header>

    </>
  );
};

export default Navbar;

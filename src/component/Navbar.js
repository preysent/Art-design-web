import React from "react";

const Navbar = () => {
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
            <form>
              <input
                type="text"
                class="search-input"
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

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

      <main>
        <div class="cards-container container flex" id="cards-container"></div>
      </main>

      <template id="template-news-card">
        <div class="card">
          <div class="card-header">
            <img
              src="https://via.placeholder.com/400x200"
              alt="news-image"
              id="news-img"
            />
          </div>
          <div class="card-content">
            <h3 id="news-title">This is the Title</h3>
            <h6 class="news-source" id="news-source">
              End Gadget 26/08/2023
            </h6>
            <p class="news-desc" id="news-desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae saepe quis voluptatum quisquam vitae doloremque facilis
              molestias quae ratione cumque!
            </p>
          </div>
        </div>
      </template>
    </>
  );
};

export default Navbar;

import React, { useContext } from "react";
import "../Bloggrid.css";
import images from '../context/imageContext'
import Image from "./Image";

const Bloggrid = () => {

  const res = useContext(images)
  const { img } = res

  return (
    <>


      <div id="heading" className="heading">
        <div className="container">
          <div className="title">
            <h2>Recent Arts & Designs</h2>
            <p>recent arts & designs on the blog</p>
          </div>
        </div>
      </div>


      <div className="blog-grid">
        {

         img && img.map(ele => <Image key={`${ele.id}`} img={ele} />)

        }
      </div>

      <div className="footer">
        <div className="footercontainer">
          <div className="socialicons">
            <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://plus.google.com/"><i className="fa-brands fa-google-plus"></i></a>
          </div>
          <div className="footernav">
            <ul>
              <li><button className="magnet">Home</button></li>
              <li><button className="magnet">About</button></li>
              <li><button className="magnet">Our Team</button></li>
              <li><button className="magnet">Contact Us</button></li>
              <li><button className="magnet">News</button></li>
            </ul>
          </div>
          <div className="footerbottom">
            <p>
              CopyRight &copy; 2023; Designed by
              <span className="designer">Rushikesh</span>
            </p>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Bloggrid;

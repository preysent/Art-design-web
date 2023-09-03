import React, { useContext } from "react";
import "../Bloggrid.css";
import images from '../context/imageContext'
import Image from "./Image";

const Bloggrid = () => {

  const res = useContext(images)
  const { img } = res
  console.log(img)

  return (
    <>


      <div id="heading" className="heading">
        <div class="container">
          <div class="title">
            <h2>Recent Arts & Designs</h2>
            <p>recent arts & designs on the blog</p>
          </div>
        </div>
      </div>


      <div class="blog-grid">
        {
         img && img.map(ele => <Image key={`${ele.id}`} img={ele} />)
        }
      </div>

      <div class="footer">
        <div class="footercontainer">
          <div class="socialicons">
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
            <a href=""><i class="fa-brands fa-linkedin"></i></a>
            <a href=""><i class="fa-brands fa-google-plus"></i></a>
          </div>
          <div class="footernav">
            <ul>
              <li><a href="" class="magnet">Home</a></li>
              <li><a href="" class="magnet">About</a></li>
              <li><a href="" class="magnet">Our Team</a></li>
              <li><a href="" class="magnet">Contact Us</a></li>
              <li><a href="" class="magnet">News</a></li>
            </ul>
          </div>
          <div class="footerbottom">
            <p>
              CopyRight &copy; 2023; Designed by
              <span class="designer">Rushikesh</span>
            </p>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Bloggrid;

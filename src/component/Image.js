import React from 'react'

const Image = (props) => {
    const ele = props.img
  return (
    <>
      <div class="blog-post">
          <img
            src={`${ele.urls.regular}`}
            alt="Blog Post 1"            
          />
          <div class="post-overlay">
            <h2>{ele.user.first_name}</h2>
            <p>{ele.alt_description}</p>
            <a href="/">Read More</a>
          </div>
        </div>
    </>
  )
}

export default Image

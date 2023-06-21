import React from "react";
import "./Blog.css";
import "typeface-montserrat";
import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";
import img4 from "./imgs/img4.png";
import img5 from "./imgs/img5.png";
import img6 from "./imgs/img6.png";

const Blog = () => {
  return (
    <div className="blog">
      <p className="blog__title">Blog</p>
      <div className="blog1">
        <img src={img1} alt="" className="blog__imgs b-img1" />
        <p className="blogs__text blog1__text">
          <p className="blogs__data blog1__data">25 May 2022</p>
          Reebok classic leather, always classic.
          <br />
          It’s all in the name: the reebok classic leather. &nbsp; BUMBLE SNEAK
          is part of Reebok’s ‘Always Classic’ campaign and to celebrate the
          history a...
          <br />
          <br />
          <a href="/" className="blog__links blog1__link">
            read more
          </a>
        </p>
      </div>
      <div className="blog2">
        <p className="blogs__text blog2__text">
          <p className="blogs__data blog2__data">25 May 2022</p>
          Reebok classic leather, always classic.
          <br />
          It’s all in the name: the reebok classic leather. &nbsp; BUMBLE SNEAK
          is part of Reebok’s ‘Always Classic’ campaign and to celebrate the
          history a...
          <br />
          <br />
          <a href="/" className="blog__links blog2__link">
            read more
          </a>
        </p>
        <img src={img2} alt="" className="blog__imgs b-img2" />
      </div>

      <div className="blog3">
        <div className="blog3__imgs">
          <img src={img3} alt="" className="blog__imgs b-img3" />
          <img src={img4} alt="" className="blog__imgs b-img4" />
        </div>

        <p className="blogs__text blog3__text">
          <p className="blogs__data blog3__data">25 May 2022</p>
          Reebok classic leather, always classic.
          <br />
          It’s all in the name: the reebok classic leather. &nbsp; BUMBLE SNEAK
          is part of Reebok’s ‘Always Classic’ campaign and to celebrate the
          history a...
          <br />
          <br />
          <a href="/" className="blog__links blog3__link">
            read more
          </a>
        </p>
      </div>

      <div className="blog4">
        <p className="blogs__text blog4__text">
          <p className="blogs__data blog4__data">25 May 2022</p>
          Reebok classic leather, always classic.
          <br />
          It’s all in the name: the reebok classic leather. &nbsp; BUMBLE SNEAK
          is part of Reebok’s ‘Always Classic’ campaign and to celebrate the
          history a...
          <br />
          <br />
          <a href="/" className="blog__links blog4__link">
            read more
          </a>
        </p>
        <img src={img5} alt="" className="blog__imgs b-img5" />
      </div>

      <div className="blog5">
        <img src={img6} alt="" className="blog__imgs b-img6" />

        <p className="blogs__text blog5__text">
          <p className="blogs__data blog5_data">25 May 2022</p>
          Reebok Classic Leather, always classic.
          <br />
          It’s all in the name: The Reebok Classic Leather. &nbsp; bumble sneak
          is part of Reebok’s ‘Always Classic’ campaign and to celebrate the
          history a...
          <br />
          <br />
          <a href="/" className="blog__links blog5__link">
            read more
          </a>
        </p>
      </div>
      <div className="blog__btn-div">
        <button className="blog__btn">Show more</button>
      </div>
    </div>
  );
};

export default Blog;

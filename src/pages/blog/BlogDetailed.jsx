import React from "react";
import "typeface-montserrat";
import "./BlogDetailed.css";
import BlogDetailedimg1 from "./imgs/blogDetailed img1.png";
import BlogDetailedimg2 from "./imgs/blogDetailed img2.png";
import BlogDetailedimg3 from "./imgs/blogDetailed img3.png";
import BlogDetailedimg4 from "./imgs/img6.png"

const BlogDetailed = () => {
  return (
    <div className="blogDetailed">
      <p className="blogDetailed__title">Blog</p>
      <div className="blogDetailed__container">
        <p className="blogDetailed__data">25 MAY 2022</p>
        <p className="blogDetailed__texts">
          <strong>Champion</strong>
          <br />
          Champion is a legend of American sportswear. This is a brand known as
          one of the first manufacturers of basic things such as hoodies,
          T-shirts and sweatpants. The Sneaker Encyclopedia of the Street Beat
          chain stores tells about the history and achievements of Champion,
          Reverse Weave technology and the influence of sports style on modern
          fashion.
        </p>
        <img
          src={BlogDetailedimg1}
          alt=""
          className="BlogDetailed_imgs bd-img1"
        />

        <p className="blogDetailed__texts">
          The history of the Champion brand began in 1919, when Simon Feinbloom
          and his two sons, Bill and Abe, founded the Knickerbocker Knitting
          Mills factory in Rochester, New York. The company was engaged in the
          production and wholesale of sweaters, but soon the Feinbloom brothers
          noticed a new and extremely promising niche of sporting goods. The
          fact is that in the XIX century, sports penetrated into the lives of
          ordinary people and there was a need for appropriate clothing. Back
          then, training clothes were almost no different from everyday ones —
          men wore the same jackets, except looser, and women wore dresses. With
          the widespread spread of cotton, American manufactories began to
          produce specialized clothing. Russell Manufacturing Company is
          considered a pioneer of the industry. This factory was the first in
          the USA to establish the production of heavy cotton cloth from which
          it subsequently created its products. Russell is the inventor of the
          classic sweatshirt. Cotton was cheaper and more practical than wool,
          so in the early years of the 1920s, Knickerbocker Knitting Mills
          changed the concept and presented products made of cotton lining. Now
          the Feinbloom factory produces sweatshirts and T-shirts designed for
          use before and during training.
        </p>
        <img
          src={BlogDetailedimg2}
          alt=""
          className="BlogDetailed_imgs bd-img2"
        />
        <p className="blogDetailed__texts">
          Practical clothing is gaining popularity among athletes and, in
          particular, students. In 1924, Knickerbocker Knitting Mills and the
          Wentworth Military Academy signed the first contract for the supply of
          sports uniforms for cadets. The factory produced a full range of
          equipment for the school. Cooperation with universities and schools
          turned out to be a profitable business. Thanks to the high quality of
          products, Champion managed to quickly earn a reputation and expand the
          customer base with camuses throughout America. The world's first
          hoodie and Reverse Weave technology Having completely finished with
          the production of woolen sweaters, at the dawn of the 1930s the
          factory changed its name to Champion Knitting Mills. Now sportswear is
          becoming a key direction in the company's activities. In 1934, the
          manufactory presented its debut collection for the University of
          Michigan. At the same time, hoodies for athletes and staff on the edge
          appeared for the first time in the brand's assortment. The date was
          also remembered by the fact that the items from the collection were
          decorated with applications with capital letters from the name of the
          college — Champion was the first company to launch the production of
          personalized equipment for teams.
        </p>
        <img
          src={BlogDetailedimg3}
          alt=""
          className="BlogDetailed_imgs bd-img3"
        />
        <p className="blogDetailed__texts">
          The dawn of sports style The iconic logo in the form of the letter "C"
          on the sleeve appears on Champion products in 1956. From this moment
          on, the decoration is an integral part of the brand's corporate
          identity. Sportswear is becoming widespread, and in 1960 the company
          entered into an agreement with the National Association of Student
          Sports. The collaboration allowed Champion to supply sports uniforms
          to hundreds of US educational institutions, which leads to the
          popularity of "university hoodies" among enthusiasts of the emerging
          preppy style. The decade of the 60s was remembered for the brand with
          the appearance of a number of innovative products, including mesh
          jersey and sconces. The latter was first presented under the auspices
          of a special collection for women called Lady Champion. In 1967, the
          company changed its name to Champion Products and became public. After
          winning university sports, Champion comes to professional sports and
          enters into partnership with the National Football Association of the
          USA. Thus, Champion sportswear enters the mainstream.
        </p>
        <img
          src={BlogDetailedimg4}
          alt=""
          className="BlogDetailed_imgs bd-img4"
        />
      </div>
    </div>
  );
};

export default BlogDetailed;

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import SlideShow from "./SlideShow";
import Banners from "./Banners";

import Home1 from "../../../assets/homepage/home1.webp";
import Home2 from "../../../assets/homepage/home2.webp";
import "./homepage.scss";

class HomePage extends React.Component {
  state = {
    sections: [
      {
        img: Home1,
        link: "/shop/men",
        name: "Men"
      },
      {
        img: Home2,
        link: "/shop/women",
        name: "Women"
      }
    ]
  };

  render() {
    return (
      <div className="homepage">
        <div className="container">
          <header className="heading">
            <h2>LITTLE TAGS</h2>
            <h4>Exclusive Wears for Men and Women</h4>
          </header>
          <SlideShow />
          {/* <div className="slideshow"></div> */}

          <Banners />
          <div className="homepage-sections">
            {this.state.sections.map((section, i) => (
              <div className="homepage-section" key={600 + i}>
                <img src={section.img} alt="sectionpic" />

                <div className="homepage-section-outer-box">
                  <div className="homepage-section-inner-box">
                    <div className="texta">
                      SHOP FOR {section.name.toUpperCase()}
                    </div>
                    <p className="textb">
                      Fill your closet with our top {section.name.toLowerCase()}
                      's collection, choose from variety of products.
                    </p>
                    <Link to={section.link} className="homepage-section-button">
                      SHOP
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sections: state.data.sections
});

export default connect(mapStateToProps)(HomePage);

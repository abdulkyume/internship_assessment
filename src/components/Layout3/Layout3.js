import React from "react";
import "./Layout3.css";
const Layout3 = () => {
  const headerfooterStyle = {
    height: "130px",
  };
  const bodyStyle = {
    height: "450px",
  };
  return (
    <section>
      <div className="container">
        <div className="row g-3">
          <div className="col-md-12 col-lg-12 col-12">
            <div className="commonDivStyle" style={headerfooterStyle}>
              Card 1
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-12">
            <div className="commonDivStyle" style={bodyStyle}>
              Card 2
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-12">
            <div className="commonDivStyle" style={bodyStyle}>
              Card 3
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-12">
            <div className="commonDivStyle" style={bodyStyle}>
              Card 5
            </div>
          </div>
          <div className="col-md-12 col-lg-12 col-12">
            <div className="commonDivStyle" style={headerfooterStyle}>
              Card 1
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout3;

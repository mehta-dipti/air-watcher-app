import React from "react";
function Footer() {
  return (
    <footer className="footer text-light container-fluid footer-custom">
      <div className="footer-large row">
        <div className="container">
          <div
            className="row px-5"
            style={{ paddingTop: "2em", marginBottom: "3rem" }}
          >
            <i
              className="fas fa-smog mr-3"
              style={{ color: "white", fontSize: "25px", paddingTop: "0.7em" }}
            ></i>
            <div className="component-title">Air Pollution App</div>
            {/* <div className="col-12 text-left">
                            <a href="/"><img src="images/nav-icon-1.png" alt="Logo" className="footer-logo"></a>
                        </div> */}
          </div>
          <div className="row pl-2">
            <div className="col-md-3 pt-3 px-0">
              <small>
                This application is developed using React by Team-F as the final
                capstone project for the frontend training.
                <br />
                <u>Team-F</u>: Adarsh U, Anugrah Mishra, Dipti Mehta
              </small>
            </div>
            <div className="col-md-3">
              <ul className="footer-list">
                <li className="display-5 footer-head">Site map</li>
                <li>
                  <a href="/" className="footer-link">
                    {" "}
                    Home{" "}
                  </a>{" "}
                </li>
                <li>
                  <a href="/" className="footer-link">
                    {" "}
                    About Us{" "}
                  </a>{" "}
                </li>
                <li>
                  <a href="/" className="footer-link">
                    {" "}
                    Contact Us{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="footer-list">
                <li className="display-5 footer-head">Meet our partners</li>
                <li>
                  <a href="/" className="footer-link">
                    {" "}
                    Stackroute{" "}
                  </a>{" "}
                </li>
                <li>
                  <a href="/" className="footer-link">
                    {" "}
                    NIIT{" "}
                  </a>{" "}
                </li>
                <li>
                  <a href="/" className="footer-link">
                    {" "}
                    Udemy{" "}
                  </a>{" "}
                </li>
                <li>
                  <a href="/" className="footer-link">
                    {" "}
                    IIT-M{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-5 p-0">
              {/* <!-- <p className="footer-head"> Let's connect! </p> --> */}
              <ul className="footer-list social-list">
                <li
                  className="display-5 footer-head"
                  style={{ display: "block", marginBottom: "1em" }}
                >
                  Let's connect
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-twitter social-link"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-facebook social-link"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-gitlab social-link"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-github-square social-link"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-linkedin social-link"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-google-plus-g social-link"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-strip row text-center">
        <span className="col-sm-12 py-2">
          Copyright
          <span className="copyright mx-1">&copy;</span>
          {/* <!-- <img src="images/copyright.png" alt="copyright" className="img-copyright">  --> */}
          2020-21 || Made with <i className="fas fa-heart mx-1"></i> by Team-F
        </span>
      </div>
    </footer>
  );
}
export default Footer;

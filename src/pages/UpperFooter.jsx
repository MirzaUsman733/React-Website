import React from "react";
import "./UpperFooter.css";
import { Link } from "react-router-dom";
export default function UpperFooter() {
  return (
    <footer
      className=" pb-0"
      style={{ backgroundColor: "#FFFFFF", marginBottom: 0, marginTop: 10 }}
    >
      <div className="container">
        <div className="row footerSection">
          <div className="col-12 col-lg-6 me-0 pe-0">
            <h1 id="header1">Get in touch</h1>
            <h4 className="">
              Nec tincidunt praesent semper feugiat nibh sed pulvinar. Drop us a
              line sed id semper risus in hendrerit gravida rutrum.
            </h4>
            <div id="sparrow">
              <ul className="lst">
                <li>
                  <Link to="/" className="over">
                    <span>Folkungagotan 83,Stockholm</span>
                  </Link>
                </li>
                <li>
                  <span>phone:</span>{" "}
                  <Link to="/" className="over">
                    + 725 214 456
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6" id="last">
            <div className="row dv">
              <div className="col-12 col-md-6 col-lg-6">
                <ul className="lst">
                  <li className="mb-2">
                    <Link
                      target="_blank"
                      to="https://www.instagram.com/"
                      className="over"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      target="_blank"
                      to="https://www.linkedin.com/"
                      className="over"
                    >
                      Linkedin
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      target="_blank"
                      to="https://www.youtube.com/"
                      className="over"
                    >
                      YouTube
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      target="_blank"
                      to="https://www.twitter.com/"
                      className="over"
                    >
                      Behance
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      target="_blank"
                      to="https://www.pinterest.com/"
                      className="over"
                    >
                      Pinterest
                    </Link>
                  </li>
                </ul>
                <div>
                  <ul className="lst">
                    <li>
                      <Link target="_blank" to="https://fagel.qodeinteractive.com/" className="over">
                        raven @example.com
                      </Link>
                    </li>
                    <li>
                      <Link target="_blank" to="https://fagel.qodeinteractive.com/" className="over">
                        fagel @example.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <ul className="lst">
                  <li className="mb-2">
                    <Link to="/" className="over">
                      Home
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/about" className="over">
                      About
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/contact us" className="over">
                      Contact
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/blog" className="over">
                      Blog
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/landing" className="over">
                      Landing
                    </Link>
                  </li>
                </ul>
                <div>
                  <ul className="lst">
                    <li>
                      <span>@2023</span>{" "}
                      <Link to="/" className="over">
                        Qode Interactive
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="over">
                        All Right Reserved
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

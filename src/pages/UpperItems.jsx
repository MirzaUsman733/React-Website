import React from "react";
import { Link } from "react-router-dom";
export default function UpperItems() {
  return (
    <div className="container mb-5 mx-0 px-0">
      <div className=" row mx-0 px-0 gap-5">
        <div className="col-12 col-md p-0">
          <div className="card blog">
            <img
              src="https://www.newspiner.com/wp-content/uploads/2023/05/Do-follow-profile-creation-Sites-List-1.jpg"
              width={300}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Bussiness</h5>
              <p className="card-text">
                Profile creation sites are online platforms or websites that
                allow users to create account for […]
              </p>
              <Link
                to="/user"
                className="btn text-white"
                style={{ backgroundColor: "#360E64" }}
              >
                Visit Website
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md p-0">
          <div className="card blog">
            <img
              src="https://www.newspiner.com/wp-content/uploads/2023/05/Teeth-Whitening-Insights-for-Business.jpg"
              width={300}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Teeth Whitener</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur modi fugiat eius ipsum at debitis!
              </p>
              <Link to="/user" className="btn btn-info text-white ">
                Visit website
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md p-0">
          <div className="card blog">
            <img
              src="https://www.newspiner.com/wp-content/uploads/2023/05/Modern-Home-Decor.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/" className="btn btn-warning text-white">
                Visit website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

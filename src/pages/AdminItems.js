import React from "react";
import "./AdminItems.css";
export default function AdminItems(props) {
  const { title, description, posts, ref = [] } = props;
  return (
    <>
      <h2 className="text-center my-3">{title}</h2>
      <p>{description}</p>
      <img src={ref} alt="" />
      <div>
        <ul>
          {posts.map((post, index) => (
            <li
              style={{ listStyleType: "none" }}
              key={index}
              className="container mt-4 py-3 blog"
            >
              <img
                src={post.url}
                alt=""
                width="300px"
                height="300px"
                className="col-4"
              />
              <div className="d-inline-block ms-3 col-7">
                <h3>{post.title}</h3>
                <h5>{post.message}</h5>
                <p>{post.txt}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

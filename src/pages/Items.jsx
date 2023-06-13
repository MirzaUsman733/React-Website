import React from "react";

export default function Items(props) {
  const { title, description, posts, ref = [] } = props;
  return (
    <>
      <h2 className="text-center my-3">{title}</h2>
      <p>{description}</p>
      <img src={ref} alt="" />
      <div className="container">
        <ul className="row">
          {posts.map((post, index) => {
            return (
              <li
                style={{ listStyleType: "none" }}
                key={index}
                className="col-12 col-md-4 col-lg-4 my-3"
              >
                <div className="card blog">
                  <img
                    src={post.url}
                    width={300}
                    height={300}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.message}</p>
                    <pre></pre>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

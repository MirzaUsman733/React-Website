import React, { useState } from "react";
import "./AdminItems.css";

export default function AdminItems(props) {
  const { title, description, posts, ref = [] } = props;
  const [editedPosts, setEditedPosts] = useState(posts);

  const handleUpdate = (index, updatedPost) => {
    const updatedPosts = [...editedPosts];
    updatedPosts[index] = updatedPost;
    setEditedPosts(updatedPosts);
  };

  const handleDelete = (index) => {
    const updatedPosts = [...editedPosts];
    updatedPosts.splice(index, 1);
    setEditedPosts(updatedPosts);
  };

  return (
    <>
      <h2 className="text-center my-3">{title}</h2>
      <p>{description}</p>
      <img src={ref} alt="" />
      <div>
        <ul>
          {editedPosts.map((post, index) => (
            <li
              style={{ listStyleType: "none" }}
              key={index}
              className="container mt-4 py-3 blog"
            >
              <pre>{post.date}</pre>
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
                <button onClick={() => handleUpdate(index, post)}>Update</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
    </div> 
    </>
  );
}

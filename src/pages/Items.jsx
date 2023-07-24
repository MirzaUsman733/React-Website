// import React from "react";

// export default function Items(props) {
//   const { title, description, posts, ref = [] } = props;
//   return (
//     <>
//       <h2 className="text-center my-3">{title}</h2>
//       <p>{description}</p>
//       <img src={ref} alt="" />
//       <div className="container">
//         <ul className="row">
//           {posts.map((post, index) => {
//             return (
//               <li
//                 style={{ listStyleType: "none" }}
//                 key={index}
//                 className="col-12 col-md-4 col-lg-4 my-3"
//               >
//                 <div className="card blog">
//                   <img
//                     src={post.url}
//                     width={300}
//                     height={300}
//                     className="card-img-top"
//                     alt="..."
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{post.title}</h5>
//                     <p className="card-text">{post.message}</p>
//                     <pre></pre>
//                   </div>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </>
//   );
// }


import React, { useState } from "react";

export default function Items(props) {
  const { title, description, posts, ref = [] } = props;
  const [editedPosts, setEditedPosts] = useState(posts);
  const [editIndex, setEditIndex] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedMessage, setUpdatedMessage] = useState("");

  const handleEdit = (index) => {
    const post = editedPosts[index];
    setUpdatedTitle(post.title);
    setUpdatedMessage(post.message);
    setEditIndex(index);
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updatedPosts = [...editedPosts];
      updatedPosts[editIndex].title = updatedTitle;
      updatedPosts[editIndex].message = updatedMessage;
      setEditedPosts(updatedPosts);
      handleClose();
    }
  };

  const handleClose = () => {
    setEditIndex(null);
    setUpdatedTitle("");
    setUpdatedMessage("");
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
      <div className="container">
        <ul className="row">
          {editedPosts.map((post, index) => {
            const { title, message, url } = post;
            return (
              <li
                style={{ listStyleType: "none" }}
                key={index}
                className="col-12 col-md-4 col-lg-4 my-3"
              >
                <div className="card blog">
                  <img
                    src={url}
                    width={300}
                    height={300}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{message}</p>
                    <div className="card-footer">
                      <button
                        className="btn btn-primary mr-2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Edit Post</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Title:</label>
                <input
                  type="text"
                  className="form-control"
                  value={updatedTitle}
                  onChange={(e) => setUpdatedTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Message:</label>
                <textarea
                  className="form-control"
                  value={updatedMessage}
                  onChange={(e) => setUpdatedMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSave}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import "./BlogItems.css";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import { firestore } from "../firebase";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import {
  AiFillStar,
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineLike,
  AiOutlineComment,
} from "react-icons/ai";
import Spinner from "./Spinner";
import { MdOutlineAddComment } from "react-icons/md";
export default function BlogItems({ posts, user }) {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [comments, setComments] = useState([]);
  const [isActive, setIsActive] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postRef = doc(firestore, "bloging", postId);
        const postDoc = await getDoc(postRef);
        if (postDoc.exists) {
          const postData = postDoc.data();
          setPost(postData);
          setIsLoading(false);
          setComments(postData.comments || []);
        } else {
          toast("Post does not exist", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, [postId]);

  useEffect(() => {
    if (user && user.likedPosts && posts) {
      const likedPosts = user.likedPosts || [];
      setIsActive(likedPosts.includes(postId));
    }
  }, [postId, posts, user]);

  const likeStyle = {
    border: "none",
    display: "inline-block",
    backgroundColor: "rgba(250, 250, 250, 0.116)",
    // opacity: 0.4,
    marginTop: 10,
  };

  const handleButton = async () => {
    if (!user) {
      toast("Please Sign In to like the post", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    try {
      if (isActive) {
        await updateDoc(doc(firestore, "bloging", postId), {
          likes: arrayRemove(user.uid),
        });
      } else {
        await updateDoc(doc(firestore, "bloging", postId), {
          likes: arrayUnion(user.uid),
        });
      }
      setIsActive((prevState) => !prevState);
      // setIsActive((prevState) => {
      //   let updatedState = [...prevState];
      //   updatedState = !prevState;
      //   return updatedState;
      // });
    } catch (error) {
      toast(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    if (posts && posts.length > 0) {
      const initialComments = posts.map((post) => post.comments || []);
      setComments(initialComments);
    }
  }, [posts]);

  const inputStyle = {
    backgroundColor: "rgba(167, 200, 373, 0.1)",
    width: 200,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    paddingLeft: 8,

    border: "1px solid rgba(146, 150, 173, 0.5)",
    borderRadius: 3,
    paddingTop: 6,
    paddingBottom: 7,
  };
  const handleKeyPress = async(event) => {
    if (event.key === 'Enter') {
      // Perform the desired action, e.g., submit data
     handleAddComment();
     toast('Congrats, You enter the comment', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };
    }
  
  const handleAddComment = async () => {
    const comment = commentValue.trim();
    if (!comment) {
      toast("Please write a comment in the comment box", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    if (!user || !user.uid) {
      toast("User is not available", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    try {
      const newComment = {
        authorId: user.uid,
        authorName: user.displayName,
        text: comment,
      };
      
      const updatedComments = [...comments, newComment];
      let updatedCommentsState = [...comments];
      updatedCommentsState = updatedComments;
      setComments(updatedCommentsState);

      await updateDoc(doc(firestore, "bloging", postId), {
        comments: arrayUnion(newComment),
      });
      toast('Congrats, You enter the comment', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      setCommentValue("");
      
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleDeleteComment = async (comment, postId) => {
    try {
      const updatedComments = comments.filter((c) => c !== comment);
      let updatedCommentsState = [...comments];
      updatedCommentsState = updatedComments;
      setComments(updatedCommentsState);

      await updateDoc(doc(firestore, "bloging", postId), {
        comments: arrayRemove(comment),
      });
    } catch (error) {
      toast(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleUpdateComment = async (comment, postId) => {
    const updatedCommentText = prompt(
      "Enter the updated comment:",
      comment.text
    );
    if (updatedCommentText === null || updatedCommentText.trim() === "") {
      return;
    }

    try {
      const updatedComment = {
        ...comment,
        text: updatedCommentText,
      };

      const updatedComments = comments.map((c) =>
        c === comment ? updatedComment : c
      );
      let updatedCommentsState = [...comments];
      updatedCommentsState = updatedComments;
      setComments(updatedCommentsState);

      await updateDoc(doc(firestore, "bloging", postId), {
        comments: arrayUnion(updatedComment),
      });
      await updateDoc(doc(firestore, "bloging", postId), {
        comments: arrayRemove(comment),
      });
    } catch (error) {
      toast(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const handleClick = () => {
    navigate("/user");
    toast('Back to User', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };

  return (
    <div className="">
      <div className="text-end me-3 mt-3">
        <button
          className="btn btn-danger"
          onClick={handleClick}
          style={{
            border: 1,
            borderRadius: 10,
          }}
        >
          Go Back
        </button>
      </div>
      <div className="container blgItem mb-5">
        {!isLoading && post ? (
          <div>
            <AiFillStar className="text-warning" />{" "}
            <p className="d-inline-block">Member only story</p>
            <h1 className="hd">
              <b>{post.message}</b>
            </h1>
            <p className="my-4">
              <b>Author: </b>
              <i>Mr.Muhammad Usman</i>
            </p>
            <button style={likeStyle}>
              <span
                style={{
                  color: isActive ? "#8b0000" : "black",
                  opacity: isActive ? 100 : 0.6,
                }}
                onClick={() => handleButton(post.id)}
              >
                <AiOutlineLike size={25} />
              </span>
              <span>
                {isActive
                  ? post.likes
                    ? post.likes.length + 1
                    : 0
                  : post.likes
                  ? post.likes.length
                  : 0}
              </span>
            </button>
            <button
              class="btn btn-light d-inline-block"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasResponsive"
              aria-controls="offcanvasResponsive"
            >
              <AiOutlineComment size={25} />
            </button>
            <div className="text-center mt-3">
              <img src={post.url} className="ig mb-3" alt={post.title} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.txt }} />
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasResponsive"
              aria-labelledby="offcanvasResponsiveLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">
                  Responses
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#offcanvasResponsive"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <div>
                  <div>
                    <input
                     onKeyPress={handleKeyPress}
                      className="rounded"
                      type="text"
                      value={commentValue}
                      onChange={(e) => setCommentValue(e.target.value)}
                      name="commentRef"
                      placeholder="Leave a Comment"
                      required
                      style={inputStyle}
                    />
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleAddComment(post.id)}
                    >
                      Add Comment <MdOutlineAddComment size={20}/>
                    </button>
                    <h3 className="mt-5 text-success-emphasis">
                      Most Recents...
                    </h3>
                    {comments && comments.length > 0 && (
                      <ul className="mt-3">
                        {comments.map((comment, commentIndex) => (
                          <li className="my-3"
                            style={{ listStyleType: "square" }}
                            key={commentIndex}
                          >
                            <span>{comment.authorName}: &nbsp;</span>
                            {comment.text}
                            {comment.authorId === user.uid && (
                              <>
                                <button
                                  style={{
                                    paddingTop: 2,
                                    paddingBottom: 2,
                                    paddingLeft: 8,
                                    paddingRight: 8,
                                  }}
                                  className="btn btn-success mx-2"
                                  onClick={() =>
                                    handleUpdateComment(comment, post.id)
                                  }
                                >
                                  <AiOutlineEdit />
                                </button>
                                <button
                                  className="btn btn-danger"
                                  style={{
                                    paddingTop: 2,
                                    paddingBottom: 2,
                                    paddingLeft: 8,
                                    paddingRight: 8,
                                  }}
                                  onClick={() =>
                                    handleDeleteComment(comment, post.id)
                                  }
                                >
                                  <AiOutlineDelete />
                                </button>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogPosts } from "./blogSlice";
export default function BlogView() {
  const blogPosts = useSelector((state) => state.blog.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, [dispatch]);
  return (
    <div>
      {blogPosts &&
        blogPosts.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.message}</p>

            <hr />
          </div>
        ))}
    </div>
  );
}

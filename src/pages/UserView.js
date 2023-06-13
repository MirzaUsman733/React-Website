import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogPosts } from './userSlice';

export default function UserView() {
  const blogPosts = useSelector((state) => state.blogPost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, [dispatch]);

  return (
    <div>
      <h2 className="mt-3">All Blogs...</h2>
      {blogPosts ? (
        <ul>
          {blogPosts.map((blogPost, index) => (
            <li style={{ listStyleType: 'decimal' }} key={index}>
              {blogPost.title}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

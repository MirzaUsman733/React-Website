import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { firestore } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import UserItem from "./UserItem";
import SecondItem from "./SecondItem";
import Spinner from "./Spinner";
import { getAuth} from "firebase/auth";
// import { useNavigate } from "react-router-dom";
import UpperItems from "./UpperItems";
import UpperFooter from "./UpperFooter";
import SocialPlugin from "./SocialPlugin";
import Iframe from "./Iframe";
import { useQuery } from "react-query";

export default function User() {
  const {data: blogPosts ,isLoading} = useQuery("blogPosts",fetchBlogPosts)
  // const navigate = useNavigate();
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);


  // const [isLoading, setIsLoading] = useState(false);
  // const [blogPosts, setBlogPosts] = useState([]);

  async function fetchBlogPosts() {
    // setIsLoading(true);
    const querySnapshot = await getDocs(collection(firestore, "bloging"));
    const posts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return posts
    // setBlogPosts(posts);
    // setIsLoading(false);
  }

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="container-fluid m-0 pb-0 px-0">
      <h1 className="text-center  my-4">Blog Posts Website</h1>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container">
          <UpperItems />
          <h1
            className="border-bottom border-start rounded "
            style={{ marginTop: 100 }}
          >
            <span className="bg-primary text-white rounded px-4">
              Blogs About Life
            </span>
          </h1>
          <div className="row">
            <div className="ms-0 ps-0 col-12 col-md-8">
              <UserItem posts={blogPosts} user={user} />
            </div>
            <div className="col-12 col-md-4 d-none d-md-block">
              <SocialPlugin />
              <Iframe />
              <SecondItem posts={blogPosts} />
            </div>
          </div>
          <UpperFooter />
        </div>
      )}
    </div>
  );
}

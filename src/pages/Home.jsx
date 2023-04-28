import React, { useRef, useState, useEffect } from 'react';
import { firestore } from "../firebase";
import { addDoc, collection, doc, getDoc , getDocs } from "@firebase/firestore";
import AdminItems from './AdminItems';
import Navbar from './Navbar';

export default function Home() {
  const contentRef = useRef();
  const messageRef = useRef();
  const messagesRef = collection(firestore, "bloging");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);
  const inputStyle = {
    width : 200,
    marginTop : 10, 
    marginBottom : 10 
  }
  async function readDocument() {
    const docRef = doc(firestore, "bloging", "blog1");
    const docSnap = await getDoc(docRef);
    console.log("Document data:", docSnap.data());
    setBlogTitle(docSnap.data().title);
    setBlogContent(docSnap.data().description);
  }

  async function fetchBlogPosts() {
    const querySnapshot = await getDocs(collection(firestore, "bloging"));
    const posts = querySnapshot.docs.map((doc) => doc.data());
    setBlogPosts(posts);
  }

  useEffect(() => {
    readDocument();
    fetchBlogPosts();
  }, []);
  const submithandler = async (e) => {
    e.preventDefault();
  // if(blogContent.length > 0 && blogTitle.length > 0){
    let data = {
      title: contentRef.current.value,
      message: messageRef.current.value,
    };

    try {
      await addDoc(messagesRef, data);
      messageRef.current.value = "";
      contentRef.current.value = "";
      fetchBlogPosts();
    } catch (e) {
      console.log(e);
    }
  // }else{
    // alert("please Write content in the input field")
  // }
}
  return (
    <div style={{backgroundColor : "rgb(255 255 255)"}}>
    <Navbar/>
    <h1 style={{textAlign : 'center'}}>Blog Posts Website</h1>
      <form style={{textAlign : 'center'}} onSubmit={submithandler}>
        <label>Enter Title: &emsp; &emsp; &emsp; &nbsp;</label>
        <input
          type="text"
          ref={contentRef}
          name="title"
          placeholder="Title"
          style={inputStyle}
        />
        <br />
        <label>Enter Description: &emsp;</label>
        <input
          type="text"
          ref={messageRef}
          name="description"
          placeholder="description"
          style={inputStyle}

        />
        <br />
        <button className='btn btn-success' type="submit">Submit</button>
      </form>
      {/* {blogTitle && <div>{blogTitle}</div>} */}
     <AdminItems title={blogTitle} description={blogContent} posts={blogPosts} style = {{marginTop : 1000 ,paddingTop : 1000,backgroundColor : "red"}} />
      
    </div>
  );
}

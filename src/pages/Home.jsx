// import React, { useRef, useState, useEffect } from 'react';
// import { firestore } from "../firebase";
// import { addDoc, collection, doc, getDoc } from "@firebase/firestore";
// import AdminItems from './AdminItems';

// export default function Home() {
//   const messageRef= useRef();
//   const contentRef= useRef();
//   const messagesRef = collection(firestore, "bloging");
//   const [blogTitle, setBlogTitle] = useState('');
//   const [blogContent, setBlogContent] = useState('');

//   async function readDocument() {
//     const docRef = doc(firestore, "bloging" , "blog1");
//     const docSnap = await getDoc(docRef);
//     console.log("Document data:", docSnap.data());
//     setBlogTitle(docSnap.data().title);
//     setBlogContent(docSnap.data().description);
//     // setBlogContent(docSnap.data.title)
//   }

//   useEffect(() => {
//     readDocument();
//   }, []);

//   const submithandler = async(e) => {
//     e.preventDefault();
//     console.log(messageRef.current.value);

//     let data = {
//       title : contentRef.current.value,
//       message: messageRef.current.value,
//     };
//     try {
//       await addDoc(messagesRef, data);
//       // await addDoc(contentRef , data);
//       messageRef.current.value = '';
//       contentRef.current.value = '';
//     } catch (e) {
//       console.log(e);
//     }
//   };
  
//   console.log("blogContent:", blogContent);

//   return (
//     <>
//       <form onSubmit={submithandler}>
//         <label>Enter message:</label>
//         <input type="text" ref={contentRef} name = 'title' placeholder='Title'/>
//         <input type="text" ref={messageRef} name='description' placeholder='description'/>
//         <button type='submit'>Submit</button>
//       </form>
//       {blogTitle && <div>{blogTitle}</div>}
//       <AdminItems title = {blogTitle} description = {blogContent}/>
//     </>
//   );
// }
import React, { useRef, useState, useEffect } from 'react';
import { firestore } from "../firebase";
import { addDoc, collection, doc, getDoc , getDocs } from "@firebase/firestore";
import AdminItems from './AdminItems';

export default function Home() {
  const contentRef = useRef();
  const messageRef = useRef();
  const messagesRef = collection(firestore, "bloging");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);

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
  };

  return (
    <>
      <form onSubmit={submithandler}>
        <label>Enter message:</label>
        <input
          type="text"
          ref={contentRef}
          name="title"
          placeholder="Title"
        />
        <input
          type="text"
          ref={messageRef}
          name="description"
          placeholder="description"
        />
        <button type="submit">Submit</button>
      </form>
      {/* {blogTitle && <div>{blogTitle}</div>} */}
      <AdminItems title={blogTitle} description={blogContent} posts={blogPosts} style = {{marginTop : 1000 ,paddingTop : 1000,backgroundColor : "red"}} />
      
    </>
  );
}

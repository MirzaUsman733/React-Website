import React from 'react'

export default function AdminItems(props) {
  const {title,description,posts = []} = props;
  return (
    <div className="card" style={{marginLeft : 100, marginTop : 100}}>
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  {/* <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div> */}
    <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {posts.map((post,index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.message}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

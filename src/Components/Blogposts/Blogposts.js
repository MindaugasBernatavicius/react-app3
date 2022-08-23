import React, { useEffect, useState } from "react";
import "./Blogposts.css";

const Blogposts = () => {
  const [posts, setPosts] = useState([]);

  function deletePost(id) {
    fetch(`http://localhost:7771/posts/${id}`, { method: "DELETE" }).then(
      (response) => {
        if (response.status === 200) {
          const remaining = posts.filter((p) => id !== p.id);
          setPosts(remaining);
        }
      }
    );
  }

  useEffect(() => {
    fetch("http://localhost:7771/posts")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPosts(res);
      });
  }, []);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Text</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.text}</td>
              <td>
                <button
                  onClick={(e) => deletePost(post.id)}
                  className="btn btn-dark"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Blogposts;

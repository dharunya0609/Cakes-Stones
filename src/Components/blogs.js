
// import { Card } from 'react-bootstrap'; // assuming you are using react-bootstrap

import './blog.css'

import React, { useState } from 'react';

function BlogForm() {
  const [blogData, setBlogData] = useState({
    title: '',
    date: '',
    image: null,
    content: ''
  });
  const [blogCards, setBlogCards] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setBlogCards(prevState => [...prevState, blogData]);
    setBlogData({ title: '', date: '',image: null, content: '' });
  };

  const handleImageChange = (event) => {
    setBlogData(prevState => ({ ...prevState, image: event.target.files[0] }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlogData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={blogData.title} onChange={handleChange} />
        </label>
        <label>
          Title:
          <input type="date" name="date" value={blogData.date} onChange={handleChange} />
        </label>
        <label>
          Image:
          <input type="file" name="image" onChange={handleImageChange} />
        </label>
        <label>
          Content:
          <textarea name="content" value={blogData.content} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {
      blogCards.map((blogCard, index) => 
      (
        
       
        <div key={index} className="blog-card">

          <h2>{blogCard.title}</h2>
          <h4 Style={{textAlign:"right"}}>{blogCard.date}</h4>
          <img src={URL.createObjectURL(blogCard.image)} alt={blogCard.title} />

          
          
          <p>{blogCard.content}</p>
        </div>
    
      )
      )}
    </div>
  );
}

export default BlogForm;


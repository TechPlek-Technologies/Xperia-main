import React from 'react'
import { useSearchParams } from 'react-router-dom';

const BlogDetail = () => {
    const blog = JSON.parse(localStorage.getItem('Blogs'));

    const [searchParams] = useSearchParams();
    const paramValue = searchParams.get("title");
    // Extract a specific query parameter
  
  
    const data = blog.filter((data) => data.slug === paramValue);
    console.log(data[0])
  return (
    <div>BlogDetail</div>
  )
}

export default BlogDetail
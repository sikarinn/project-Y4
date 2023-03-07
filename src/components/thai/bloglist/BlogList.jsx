import React from "react";
import BlogItem from "./blogitem/BlogItem";
import "./bloglist.css";

const BlogList = ({ blogs }, props) => {
  return (
    <div className="blogList-wrap">
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;

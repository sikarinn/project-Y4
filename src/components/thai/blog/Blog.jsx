import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { thaiData } from "../Data";
import { Link } from "react-router-dom";
import "../thai.css";
import TableOfContent from "../../Table Content/TableOfContent";
import Chip from "../common/Chip";
import EmptyList from "../EmptyList ";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = thaiData.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  return (
    <section className=" blog section" id="blog">
      <div>
        <Link className="blog__goBack" to="/thai">
          <span>
            <i class="uil uil-arrow-circle-left"></i> ย้อนกลับ
          </span>
        </Link>

        {blog ? (
          <div className="blog-wrap">
            <header>
              <div className="blog-subCategory">
                {blog.subCategory.map((category, i) => (
                  <div key={i}>
                    <Chip label={category} />
                  </div>
                ))}
              </div>
              <h1 className="section__title -mt-11 title mr-1 ml-1">{blog.title}</h1>
            </header>
            
            <img src={blog.cover} alt="cover" className="blog-img"/>
            <div className="wrapper">
              <TableOfContent />
              <p className="mb-7">{blog.content}</p>
            </div>
          </div>
        ) : (
          <EmptyList />
        )}

        <Link className="blog__goBack" to="/thai">
          <span>
            <i class="uil uil-arrow-circle-left"></i> ย้อนกลับ
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Blog;

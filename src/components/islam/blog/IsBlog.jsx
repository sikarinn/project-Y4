import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { islamData } from "../Data";
import { Link } from "react-router-dom";
import "../Islam.css";
import TableOfContent from "../../Table Content/TableOfContent";
import Chip from "../common/Chip";
import EmptyList from "../../thai/EmptyList ";

const IsBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = islamData.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  return (
    <section className=" blog section" id="blog">
      <div>
        <Link className="blog__goBack" to="/islam">
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

        <Link className="blog__goBack" to="/islam">
          <span>
            <i class="uil uil-arrow-circle-left"></i> ย้อนกลับ
          </span>
        </Link>
      </div>
    </section>
  );
};

export default IsBlog;

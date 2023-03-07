import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../common/Chip";
import "./blogitem.css";

const BlogItem = ({ blog: { cover, description, title, content, subCategory, id} }) => {
  return (
    <div className="blogItem-wrap">
      <img className='blogItem-cover' src={cover} alt='cover'/>
      <div className="blog_subCategory">
        {subCategory.map((subCategory, i) => (            
          <div key={i}>
            <Chip label={subCategory} />
          </div>
        ))}
      </div>

      <h3 className="">{title}</h3>
      <p className="blogItem-desc">
        {description}
      </p>
      <footer>
        <Link className="blogItem-link" to={`/thai/${id}`}>
          อ่านเพิ่มเติม
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;

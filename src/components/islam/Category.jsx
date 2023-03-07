import React from "react";
import './Islam.css'

const Category = ({filterCategory, tabsData}) => {
  return (
    <div>
      <div className="islam__filter">
        {tabsData.map((category, index) => {
          return (
            <button
              type="button"
              className="islam__item"
              onClick={() => filterCategory(category)}
              key={index}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Category;

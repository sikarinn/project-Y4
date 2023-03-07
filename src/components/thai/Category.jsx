import React from "react";
import './thai.css'

const Category = ({filterCategory, tabsData}) => {
  return (
    <div>
      <div className="thai__filter">
        {tabsData.map((category, index) => {
          return (
            <button
              type="button"
              className="thai__item"
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

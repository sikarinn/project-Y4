import React, { useState } from "react";
import { Helmet } from "react-helmet";
import BlogList from "./bloglist/BlogList";
import SearchBar from './SearchBar';
import { islamData } from "./Data";
import "./Islam.css";
import Category from "./Category";
import EmptyList from "./EmptyList";

const Home = () => {
  const TITLE = "กฎหมายมรดกอิสลาม - Islam Inheritance Law";
  const [blogs, setBlogs] = useState(islamData);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by title, description
  const handleSearchResults = () => {
    const allBlogs = islamData;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };
  
   // Clear search and show all blogs
   const handleClearSearch = () => {
    setBlogs(islamData);
    setSearchKey('');
  };

  // category
  const categoryData = islamData.map((value) => {
    return value.category;
  });
  const tabsData = ["ทั้งหมด", ...new Set(categoryData)];
  const filterCategory = (category) => {
    if(category==="ทั้งหมด"){
      setBlogs(islamData);
      return;
    }

    const filteredData = islamData.filter((value) => {
      return value.category === category;
    });
    setBlogs(filteredData);
  };

  return (
    <section className="container islam section" id="islam">
      <div>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>

        <h2 className="section__title mt-8">กฎหมายมรดกอิสลาม</h2>
        <span className="section__subtitle">
          ทรัพย์สินและการแบ่งจัดสรรเป็นส่วนรวมความละโมบของมวลมนุษย์ ดังนั้นกฎหมายมรดกอิสลามมีไว้เพื่อป้องกันไม่ให้มนุษย์ <br></br>คิดวิเคราะห์หรือแบ่งปันกันตามความรู้สึกของผู้ใดผู้หนึ่ง
          <br></br><br></br>-------------------------------------------------------------------------------------
          <br></br>
          <span className=" text-red-600">
          ประเทศไทยมีการยอมรับให้ผู้ที่นับถือศาสนาอิสลาม สามารถใช้กฎหมายอิสลามว่าด้วยครอบครัว และมรดกบังคับแทนบทบัญญัติประมวลกฎหมายแพ่งและพาณิชย์ได้ในกรณีที่ต้องวินิจฉัยชี้ขาดคดีแพ่งในพื้นที่จังหวัดสตูล ปัตตานี ยะลา และนราธิวาส
          </span>
        </span>

        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />

        <Category filterCategory={filterCategory} tabsData={tabsData} />
        {!blogs.length ? (
          <EmptyList />
        ) : (
          <BlogList blogs={blogs} key={blogs.id} />
        )}
      </div>
    </section>
  );
};

export default Home;
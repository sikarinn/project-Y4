import React from "react";
import ScrollDown from "./ScrollDown";
import "./about.css";
import ThaiLawImg from "../../assets/About-law-thai1.jpg";
import YTImg from "../../assets/yt3.png";
import { Helmet } from "react-helmet";
import Ebook from "../../assets/islam/Ebook.png"
import WebEgypt from "../../assets/islam/WebEgypt.png"
import IbnuAffan from "../../assets/islam/IbnuAffan.png"

const About = () => {
  const TITLE = "เกี่ยวกับเรา - About Us";

  return (
    <div className="container grid">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <h2 className="section__title mt-32">เกี่ยวกับเรา</h2>

      <section className="about section" id="about">
        <div className="-mt-12 grid">
          <span className="about_font">
            HeritageLaws เป็นเว็บไซต์ที่ให้ความรู้แก่ผู้ที่สนใจในกฎหมายมรดกทั่วไป
            หรือกฎหมายมรดกอิสลาม โดยสามารถนรองรับอุปกรณ์ได้ทั้ง Desktop, Ipad
            และ Smartphone นอกจากนี้เพื่อความสะดวกสบายในการใช้งานทางเราได้มีการ
            พัฒนาบน Line Official เป็น Line Bot ซึ่งเป็นส่วนหนึ่งของโครงงาน
            สาขาวิชาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยสงขลานครินทร์ ปีการศึกษา 2565
            ที่จัดทำโดยนักศึกษาชั้นปีที่ 4 จำนวน 2 คน คือ นางสาว ศิขรินทร์
            สามงามทอง และ นางสาว สะอาดะห์ ดายันตา โดยมีอาจารย์ที่ปรึกษาโครงงาน
            รศ.ดร. พิชญา ตัณฑัยย์ เป็นผู้ดูแลโครงงานฉบับนี้
            <br />
            <br />
            เนื่องจากทางผู้จัดทำไม่ได้มีความรู้ในด้านกฎหมายมรดกที่เพียงพอต่อการทำโครงงานฉบับนี้
            ทำให้ต้องศึกษาหาข้อมูลเพิ่มเติมและเข้าปรึกษาผู้เชี่ยวชาญหรือผู้ที่ชำนาญด้านกฎหมายมรดกอยู่เป็นประจำ
            ได้แก่ ศึกษาจากหนังสือกฎหมายมรดกผ่านทางออนไลน์ ศึกษาผ่านทาง Youtube
            Channel และได้มีโอกาสเข้าปรึกษาอาจารย์คณะนิติศาสตร์
            มหาวิทยาลัยสงขลานครินทร์ เป็นต้น โดยมีรายละเอียดดังนี้
          </span>
        </div>

        <ScrollDown />

        {/* อาจารย์ */}
        <div>
          <h1 className="about_title">
            อาจารย์ที่ปรึกษาโครงงาน และผู้เชี่ยวชาญ
          </h1>
          <div className="about__container1 grid">
            <p className="about_font text-center mb-10">
              อาจารย์ที่ปรึกษาโครงงาน
              <br /> ----------------------------
              <br /> รศ.ดร. พิชญา ตัณฑัยย์
              <br /> - อาจารย์คณะวิศวกรรมศาสตร์ -
              <br /> สาขาวิศวกรรมคอมพิวเตอร์
              <br /> - มหาวิทยาลัยสงขลานครินทร์ -
            </p>
            <p className="about_font text-center">
              ผู้เชี่ยวชาญ
              <br /> ----------------------------
              <br /> ดร.ภาณุพงศ์ เฉลิมสิน
              <br /> - อาจารย์คณะนิติศาสตร์ -
              <br /> - มหาวิทยาลัยสงขลานครินทร์ -
            </p>
          </div>
        </div>

        {/* ไทย */}
        <div>
          <h1 className="about_title">กฎหมายมรดกทั่วไป</h1>
          <span className="about_font">
            แหล่งข้อมูลที่ได้รวบรวมและนำมาศึกษาในกฎหมายมรดกทั่วไปมีดังนี้
          </span>

          <div className="about__container1 grid text-center">
            <img src={ThaiLawImg} alt="" className="about__img" />

            <p className="about_font">
              กฎหมายแพ่งและพาณิชย์ว่าด้วยมรดกทั้ง <br /> (Civil and Commercial
              Code : Succession)
              <br /> ----------------------------
              <br /> อ่านต่อที่ : {""}
              <a
                className="text-indigo-700 underline"
                href="http://old-book.ru.ac.th/e-book/inside/html/dlbook.asp?code=LW311"
              >
                หนังสือกฎหมายมรดกทั่วไป
              </a>
            </p>
          </div>

          <div className="about__container1 grid text-center">
            <img src={YTImg} alt="" className="YT__img" />
            <p className="about_font">
              ศึกษาผ่านทาง Youtube Channel
              <br /> ----------------------------
              <br /> ประวัติส่วนตัว : {""}
              <a
                className="text-indigo-700 underline"
                href="https://race.nstru.ac.th/home_ex/e-portfolio/index.php/search/personal/1976"
              >
                YATREE SOMLAM
              </a>
              <br /> Youtube Channel : {""}
              <a
                className="text-indigo-700 underline"
                href="https://www.youtube.com/channel/UCEQCn1dFIW51SbF3ss8gEyg"
              >
                YATREE SOMLAM
              </a>
            </p>
          </div>
        </div>

        {/* อิสลาม */}
        <div>
          <h1 className="about_title">กฎหมายมรดกอิสลาม</h1>
          <span className="about_font">
            แหล่งข้อมูลที่ได้รวบรวมและนำมาศึกษาในกฎหมายมรดกอิสลามมีดังนี้
          </span>

          <div className="about__container1 grid text-center">
              <img src={Ebook} alt="" className="about__img" />
              
                <p className="about_font">
                  เรียนรู้กฏหมายการแบ่งมรดกอิสลาม
                  <br /> ----------------------------
                  <br /> อ่านต่อที่ : {""} 
                  <a
                    className="text-indigo-700 underline"
                    href="https://anyflip.com/nhfy/olfs/basic"
                  >
                    เรียนรู้กฏหมายการแบ่งมรดกอิสลาม
                  </a>
                </p>
            </div>

            <div className="about__container1 grid text-center">
              <img src={WebEgypt} alt="" className="WEB__img" />
              
                <p className="about_font">
                  دارالإفتاء
                  <br /> ----------------------------
                  <br/>เว็บไซต์จากประเศอียิปต์
                  <br /> อ่านต่อที่ : {""} 
                  <a
                    className="text-indigo-700 underline"
                    href="https://www.aliftaa.jo/Default.aspx"
                  >
                    دارالإفتاء
                  </a>
                </p>
            </div>

            <div className="about__container1 grid text-center">
              <img src={IbnuAffan} alt="" className="WEB__img" />
              
                <p className="about_font">
                  อัล-ฟะรออิฎ บทว่าด้วยการแบ่งมรดก
                  <br /> ----------------------------
                  <br /> อ่านต่อที่ : {""} 
                  <a
                    className="text-indigo-700 underline"
                    href="https://ibnuauf.net/article_detail.php?articleID=13"
                  >
                    อัล-ฟะรออิฎ บทว่าด้วยการแ่บ่งมรดก
                  </a>
                </p>
            </div>
            
            <div className="about__container2 grid text-center">
              {/* <img src={IbnuAffan} alt="" className="WEB__img" /> */}
              
                <p className="about_font">
                  หลักการจัดการแบ่งมรดกให้แก่ทายาทตามกฎหมายอิสลาม
                  <br /> ----------------------------
                  <br /> อ่านต่อที่ : {""} 
                  <a
                    className="text-indigo-700 underline"
                    href="https://soreda.oas.psu.ac.th/files/680_file_Chapter3.pdf"
                  >
                    หลักการจัดการแบ่งมรดกให้แก่ทายาทตามกฎหมายอิสลาม
                  </a>
                </p>
            </div> 

            <div className="about__container2 grid text-center">
              {/* <img src={IbnuAffan} alt="" className="WEB__img" /> */}
              
                <p className="about_font">
                  เปรียบเทียบการทำพินัยกรรมระหว่างบทบัญญัติอิสลามและกฎหมายไทย

                  <br /> ----------------------------
                  <br /> อ่านต่อที่ : {""} 
                  <a
                    className="text-indigo-700 underline"
                    href="https://soreda.oas.psu.ac.th/files/680_file_Chapter3.pdf"
                  >
                    เปรียบเทียบการทำพินัยกรรมระหว่างบทบัญญัติอิสลามและกฎหมายไทย
                  </a>
                </p>
            </div>

            <div className="about__container2 grid text-center">
              {/* <img src={IbnuAffan} alt="" className="WEB__img" /> */}
              
                <p className="about_font">
                  การใช้กฎหมายอิสลาม ในพื้นที่จังหวัดชายแดนภาคใต้ (เฉพาะเรื่องครอบครัวและมรดก)

                  <br /> ----------------------------
                  <br /> อ่านต่อที่ : {""} 
                  <a
                    className="text-indigo-700 underline"
                    href="https://www.nsc.go.th/wp-content/uploads/Journal/article-00906.pdf"
                  >
                    การใช้กฎหมายอิสลาม ในพื้นที่จังหวัดชายแดนภาคใต้ (เฉพาะเรื่องครอบครัวและมรดก)
                  </a>
                </p>
            </div>                
        </div>
      </section>
    </div>
  );
};

export default About;

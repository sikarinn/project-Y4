import React from "react";
import { Helmet } from "react-helmet";
// import img1 from "../../../assets/islam/img-title/กฎหมายมรดก.png";
import "./posts-islam.css"
import img1 from "../posts-islam/Img_Islam/รูป1.png"
import img2 from "../posts-islam/Img_Islam/รูป2.png"
import img3 from "../posts-islam/Img_Islam/รูป3.png"
import img4 from "../posts-islam/Img_Islam/รูป4.png"
import img5 from "../posts-islam/Img_Islam/รูป5.png"
import img6 from "../posts-islam/Img_Islam/รูป6.png"

const อายัต= () => {
  const TITLE = "บทบัญญัติที่ถูกกล่าวถึงในกฎหมายมรดก";

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <div className="content">
        <br></br>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; บทบัญญัติที่ถูกกล่าวถึงในกฎหมายมรดกมีเป็นจำนวนมาก เนื่องจาก อัลลอฮฺ (ซ.บ.) ต้องการให้ความกระจ่างแก่มนุษย์ โดยมิปล่อยช่องว่างให้ผู้ใดผู้หนึ่งดำเนินการแบ่งมรดกด้วยตนเอง
        </p>

        <div>
          <h2 id="initial-header">1. กล่าวถึงสิทธิ์ของลูกชาย และลูกสาว</h2>
          <p>
            <img
                src={img1}
                alt="img1"
                className="w-11/12 block ml-auto mr-auto"
              />
          </p>

          <h2 id="second-header">2. กล่าวถึงสามี และภรรยา และพี่น้องชายหญิงร่วมมารดา</h2>
          <p>
          <img
                src={img2}
                alt="img2"
                className="w-11/12 block ml-auto mr-auto"
              />
          </p>

          <h2 id="third-heder">3. กล่าวถึงพี่น้องชายหญิงร่วมบิดามารดา และร่วมบิดา</h2>
          <p>
          <img
                src={img3}
                alt="img3"
                className="w-11/12 block ml-auto mr-auto"
              />
          </p>

          <h2 id="fourth-heder">4. กล่าวถึงหน้าที่ของมุสลิมที่มีต่อมรดก</h2>
          <p>
          <img
                src={img4}
                alt="img4"
                className="w-11/12 block ml-auto mr-auto"
          />
          <br></br>
          <img
                src={img5}
                alt="img5"
                className="w-11/12 block ml-auto mr-auto"
          />
          <br></br>
          <img
                src={img6}
                alt="img6"
                className="w-11/12 block ml-auto mr-auto"
          />
          </p>
        </div>
      </div>

      <div>
        <h1 className="ml-4">แนะนำสำหรับคุณ</h1>
        <ul className="list__post">
        <li>
            <a className="text-indigo-700 underline" href="/islam/1">
            ความรู้ทั่วไปของกฎหมายมรดกอิสลาม
            </a>
          </li>
          <li>
            <a className="text-indigo-700 underline" href="/islam/2">
              ทายาทที่มีสิทธิและเสียสิทธิรับมรดก
            </a>
          </li>
          <li>
            <a className="text-indigo-700 underline" href="/islam/3">
            วิธีการคำนวณมรดกอิสลาม
            </a>
          </li>
          <li>
            <a className="text-indigo-700 underline" href="/islam/4">
              การแบ่งมรดกกรณีพิเศษ
            </a>
          </li>
          <li>
            <a className="text-indigo-700 underline" href="/islam/6">
              พินัยกรรม
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default อายัต;

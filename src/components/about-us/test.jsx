import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './about.css'
import AboutImg from '../../assets/About-law-thai1.jpg'
import YoutubeImg from '../../assets/yt3.png'

const Test = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="about section" id="about">
      <div className="home__container container grid">
        <h2 className="section__title">เกี่ยวกับเรา</h2>
        <span className="section__subtitle about__font">
          เว็บไซต์ให้ความรู้และแชทบอทเกี่ยวกับกฎหมายมรดกทั่วไป และกฎหมายมรดกอิสลาม 
          เป็นส่วนหนึ่งของโครงงาน สาขาวิชาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยสงขลานครินทร์ 
          ซึ่งได้มีการจัดทำโดย <u> นางสาว ศิขรินทร์ สามงามทอง </u> และ 
          <u> นางสาวสะอาดะห์ ดายันตา </u> นักศึกษาชั้นปีที่ 4
          โดยมีอาจารย์ รศ.ดร. พิชญา ตัณฑัยย์ เป็นผู้ดูแลโครงงานนี้
          อีกทั้งได้มีการศึกษาผ่านแหล่งข้อมูลต่าง ๆ และเข้าปรึกษาผ่านผู้เชี่ยวชาญ
        </span>

        {/* thai */}
        <div className="about__container container grid">
          <div>
            <div className="about__content">
              <div>
                <i className="uil uil-books about__icon"></i>
                <h3 className="about__title">แหล่งข้อมูล <br /> กฎหมายมรดกทั่วไป</h3>
              </div>
              <span className="about__button" onClick={() => toggleTab(1)}>
                ดูรายละเอียดเพิ่มเติม <i className="uil uil-arrow-right about__button-icon"></i>
              </span>

              <div className={toggleState === 1 ? "about__modal active-model" : "about__modal"}>
                <div className="about__modal-content">
                  <i onClick={() => toggleTab(0)} className="uil uil-times about__modal-close"></i>

                  <Slider {...settings}>

                    {/* 1 */}
                    <div>
                      <h3 className="about__modal-title">หนังสือ E-book กฎหมายมรดกทั่วไป</h3>
                      <p className="about__modal-description">
                        ของมหาวิทยาลัยรามคำแหง
                      </p>
                      <div className="about__container1 container grid">
                        <img src={AboutImg} alt="" className="about__img"/>
                        <div className="about__data">
                          <p className="about__description">
                          กฎหมายแพ่งและพาณิชย์ว่าด้วยมรดก <br /> (Civil and Commercial Code : Succession)
                          <br /> ----------------------------
                          <br /> อ่านต่อที่ : {""} <br /> 
                          <a className="text-indigo-700" href="http://old-book.ru.ac.th/e-book/inside/html/dlbook.asp?code=LW311">
                            หนังสือกฎหมายมรดกทั่วไป
                          </a>
                          </p>
                        </div>
                      </div>
                    </div>


                    {/* 2 */}
                    <div>
                      <h3 className="about__modal-title">อาจารย์คณะนิติศาสตร์</h3>
                      <p className="about__modal-description">
                        มหาวิทยาลัยสงขลานครินทร์
                      </p>
                      <div className="container grid">
                        {/* <img src={AboutImg} alt="" className="about__img"/> */}
                        <div className="about__data">
                          <p className="text-center">
                          Dr.Panupong Chalermsin <br /> ดร.ภาณุพงศ์ เฉลิมสิน
                          <br /> ----------------------------
                          <br /> ได้มีโอกาสให้เข้าปรึกษาอาจารย์คณะนิติศาสตร์ <br /> ในเรื่องกฎหมายมรดก
                          จาก <br /> อาจารย์ รศ.ดร. พิชญา ตัณฑัยย์ <br /> ซึ่งเป็นผู้ดูแลโครงงานนี้ 
                          </p>
                        </div>
                      </div>
                    </div>


                    {/* 3 */}
                    <div>
                      <h3 className="about__modal-title">ศึกษาผ่าน Youtube Channel</h3>
                      <p className="about__modal-description">
                        ช่อง : "YATREE SOMLAM"
                      </p>
                      <div className="about__container1 container grid">
                        <img src={YoutubeImg} alt="" className="about__img"/>
                        <div className="about__data">
                          <p className="about__description">
                          กฎหมายแพ่งและพาณิชย์ว่าด้วยมรดก <br /> (Civil and Commercial Code : Succession)
                          <br /> ----------------------------
                          <br /> อ่านต่อที่ : {""} <br /> 
                          <a className="text-indigo-700" href="http://old-book.ru.ac.th/e-book/inside/html/dlbook.asp?code=LW311">
                            หนังสือกฎหมายมรดกทั่วไป
                          </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
          
    </section>
  );
};
export default Test;

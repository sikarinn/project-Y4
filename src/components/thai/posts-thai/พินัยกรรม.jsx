import React from "react";
import { Helmet } from "react-helmet";
import ธรรมดา1 from "./files/พินัยกรรม/word/ธรรมดา 1.doc";
import ธรรมดา2 from "./files/พินัยกรรม/word/ธรรมดา 2.doc";
import ธรรมดา3 from "./files/พินัยกรรม/word/ธรรมดา 3.doc";
import เขียนเอง1 from "./files/พินัยกรรม/word/เขียนเองทั้งฉบับ 1.doc";
import เขียนเอง2 from "./files/พินัยกรรม/word/เขียนเองทั้งฉบับ 2.doc";
import เขียนเอง3 from "./files/พินัยกรรม/word/เขียนเองทั้งฉบับ 3.doc";
import ฝ่ายเมือง from "./files/พินัยกรรม/word/ฝ่ายเมือง.doc";
import ลับ from "./files/พินัยกรรม/word/ลับ.doc";
import ลับพิเศษ from "./files/พินัยกรรม/word/ลับ (ใบ้ หูหนวก พูดไม่ได้).doc";
import วาจา from "./files/พินัยกรรม/word/วาจา.doc";

import pdfธรรมดา1 from "./files/พินัยกรรม/pdf/พินัยกรรมแบบธรรมดา แบบที่1.pdf";
import pdfธรรมดา2 from "./files/พินัยกรรม/pdf/พินัยกรรมแบบธรรมดา แบบที่2.pdf";
import pdfธรรมดา3 from "./files/พินัยกรรม/pdf/พินัยกรรมแบบธรรมดา แบบที่3.pdf";
import pdfเขียนเอง1 from "./files/พินัยกรรม/pdf/พินัยกรรมแบบเขียนเองทั้งฉบับ แบบที่1.pdf";
import pdfเขียนเอง2 from "./files/พินัยกรรม/pdf/พินัยกรรมแบบเขียนเองทั้งฉบับ แบบที่2.pdf";
import pdfเขียนเอง3 from "./files/พินัยกรรม/pdf/พินัยกรรมแบบเขียนเองทั้งฉบับ แบบที่3.pdf";
import pdfฝ่ายเมือง from "./files/พินัยกรรม/pdf/พินัยกรรมแบบเอกสารฝ่ายเมือง.pdf";
import pdfลับ from "./files/พินัยกรรม/pdf/พินัยกรรมแบบเอกสารลับ.pdf";
import pdfลับพิเศษ from "./files/พินัยกรรม/pdf/พินัยกรรมแบบเอกสารลับ (หูหนวก พูดไม่ได้ ใบ้).pdf";
import pdfวาจา from "./files/พินัยกรรม/pdf/พินัยกรรมแบบทำด้วยวาจา.pdf";

const พินัยกรรม = () => {
  const TITLE = "รูปแบบพินัยกรรม ใครสามารถทำพินัยกรรมได้บ้าง ?";

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <div className="content">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;พินัยกรรมต้องทำให้ถูกต้องตามแบบที่กฎหมายกำหนด
          ถ้าพินัยกรรมทำไม่ถูกต้องตามแบบใดแบบหนึ่ง พินัยกรรมจะตกเป็นโมฆะ
          ซึ่งแบบพินัยกรรมตามประมวลกฎหมายแพ่งและพาณิชย์ มี 5 แบบ คือ
          <ul className=" list-decimal ml-16 mt-3">
            <li>พินัยกรรมแบบธรรมดา</li>
            <li>พินัยกรรมแบบเขียนเองทั้งฉบับ</li>
            <li>พินัยกรรมแบบเอกสารฝ่ายเมือง</li>
            <li>พินัยกรรมแบบทำเป็นเอกสารลับ</li>
            <li>พินัยกรรมแบบทำด้วยวาจา</li>
          </ul>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ท่านสามารถดาวน์โหลดแบบฟอร์มตัวอย่างพินัยกรรมแต่ละแบบได้ด้านล่างนี้
          <table className=" w-full mt-3">
            <tr>
              <th>แบบพินัยกรรม</th>
              <th>เอกสาร word</th>
              <th>เอกสาร pdf</th>
            </tr>

            {/* 1 */}
            <tr>
              <td>พินัยกรรมแบบธรรมดา</td>
              <td>
                <a className="text-indigo-700 underline" href={ธรรมดา1}>
                  แบบธรรมดา แบบที่ 1.doc
                </a>
                <br />
                <a className="text-indigo-700 underline" href={ธรรมดา2}>
                  แบบธรรมดา แบบที่ 2.doc
                </a>
                <br />
                <a className="text-indigo-700 underline" href={ธรรมดา3}>
                  แบบธรรมดา แบบที่ 3.doc
                </a>
              </td>

              <td>
                <a
                  className="text-indigo-700 underline"
                  href={pdfธรรมดา1}
                  target="_blank"
                >
                  แบบธรรมดา แบบที่ 1.pdf
                </a>
                <br />
                <a
                  className="text-indigo-700 underline"
                  href={pdfธรรมดา2}
                  target="_blank"
                >
                  แบบธรรมดา แบบที่ 2.pdf
                </a>
                <br />
                <a
                  className="text-indigo-700 underline"
                  href={pdfธรรมดา3}
                  target="_blank"
                >
                  แบบธรรมดา แบบที่ 3.pdf
                </a>
                <br />
              </td>
            </tr>

            {/* 2 */}
            <tr>
              <td>พินัยกรรมแบบเขียนเองทั้งฉบับ</td>
              <td>
                <a className="text-indigo-700 underline" href={เขียนเอง1}>
                  แบบเขียนเองทั้งฉบับ แบบที่ 1.doc
                </a>
                <br />
                <a className="text-indigo-700 underline" href={เขียนเอง2}>
                  แบบเขียนเองทั้งฉบับ แบบที่ 2.doc
                </a>
                <br />
                <a className="text-indigo-700 underline" href={เขียนเอง3}>
                  แบบเขียนเองทั้งฉบับ แบบที่ 3.doc
                </a>
              </td>

              <td>
                <a
                  className="text-indigo-700 underline"
                  href={pdfเขียนเอง1}
                  target="_blank"
                >
                  แบบเขียนเองทั้งฉบับ แบบที่ 1.pdf
                </a>
                <br />
                <a
                  className="text-indigo-700 underline"
                  href={pdfเขียนเอง2}
                  target="_blank"
                >
                  แบบเขียนเองทั้งฉบับ แบบที่ 2.pdf
                </a>
                <br />
                <a
                  className="text-indigo-700 underline"
                  href={pdfเขียนเอง3}
                  target="_blank"
                >
                  แบบเขียนเองทั้งฉบับ แบบที่ 3.pdf
                </a>
                <br />
              </td>
            </tr>

            {/* 3 */}
            <tr>
              <td>พินัยกรรมแบบเอกสารฝ่ายเมือง</td>
              <td>
                <a className="text-indigo-700 underline" href={ฝ่ายเมือง}>
                  แบบเอกสารฝ่ายเมือง.doc
                </a>
              </td>

              <td>
                <a
                  className="text-indigo-700 underline"
                  href={pdfฝ่ายเมือง}
                  target="_blank"
                >
                  แบบเอกสารฝ่ายเมือง.pdf
                </a>
              </td>
            </tr>

            {/* 4 */}
            <tr>
              <td>พินัยกรรมแบบทำเป็นเอกสารลับ</td>
              <td>
                <a className="text-indigo-700 underline" href={ลับ}>
                  แบบทำเป็นเอกสารลับ.doc
                </a>
                <br />
                <a className="text-indigo-700 underline" href={ลับพิเศษ}>
                  แบบทำเป็นเอกสารลับ(หูหนวก ใบ้).doc
                </a>
              </td>

              <td>
                <a
                  className="text-indigo-700 underline"
                  href={pdfลับ}
                  target="_blank"
                >
                  แบบทำเป็นเอกสารลับ.pdf
                </a>
                <br />
                <a
                  className="text-indigo-700 underline"
                  href={pdfลับพิเศษ}
                  target="_blank"
                >
                  แบบทำเป็นเอกสารลับ(หูหนวก ใบ้).pdf
                </a>
              </td>
            </tr>

            {/* 5 */}
            <tr>
              <td>พินัยกรรมแบบทำด้วยวาจา</td>
              <td>
                <a className="text-indigo-700 underline" href={วาจา}>
                  แบบทำด้วยวาจา.doc
                </a>
              </td>

              <td>
                <a
                  className="text-indigo-700 underline"
                  href={pdfวาจา}
                  target="_blank"
                >
                  แบบทำด้วยวาจา.pdf
                </a>
              </td>
            </tr>
          </table>
        </p>

        {/* 1. พินัยกรรมแบบธรรมดา */}
        <div>
          <h2 id="initial-header">1. พินัยกรรมแบบธรรมดา</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;การทำพินัยกรรมแบบธรรมดามีหลักเกณฑ์
            ดังนี้
            <ul className=" list-disc ml-16 mt-3">
              <li>
                ต้อง
                <mark className=" bg-[#fee9b2] rounded-xl">
                  ลงวันที่ เดือน ปี ในขณะที่ทำ
                </mark>{" "}
                จะลงสถานที่ทำพินัยกรรมด้วยก็ได้ เพราะข้อความในพินัยกรรมนั้น
                ผู้ทำไม่ต้องเขียนหรือพิมพ์เอง
                อาจให้ผู้อื่นเขียนหรือให้ผู้อื่นพิมพ์
                ตามเจตนาของผู้ทำพินัยกรรมเองก็ได้
              </li>
              <li>
                ผู้ทำพินัยกรรมจะต้อง
                <mark className=" bg-[#fee9b2] rounded-xl">
                  ลงลายมือชื่อต่อหน้าพยานอย่างน้อย 2 คน
                </mark>{" "}
                อยู่พร้อมกัน ณ ที่นั้น และพยานทั้ง 2
                คนนั้นจะต้องลงลายมือชื่อรับรอง
              </li>
              <li>
                การขูด ลบ ข้อความพินัยกรรม
                ผู้ทำและเจ้าของพินัยกรรมจะต้องลงลายชื่อกำกับไว้ทุกแห่ง
              </li>
            </ul>
          </p>
        </div>

        {/* 2. พินัยกรรมแบบเขียนเองทั้งฉบับ */}
        <div>
          <h2 id="second-header">2. พินัยกรรมแบบเขียนเองทั้งฉบับ</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;การทำพินัยกรรมแบบเขียนเองทั้งฉบับมีหลักเกณฑ์
            ดังนี้
            <ul className=" list-disc ml-16 mt-3">
              <li>
                เป็นเอกสารที่ผู้ทำพินัยกรรมได้
                <mark className=" bg-[#fee9b2] rounded-xl">
                  เขียนด้วยลายมือของตนทั้งฉบับ
                </mark>
              </li>
              <li>ผู้ทำพินัยกรรมจะต้องลงวัน เดือน ปี ที่ทำพินัยกรรม</li>
              <li>เขียนพินัยกรรมของตนเองทั้งหมด ลงลายมือชื่อของตน</li>
              <li>
                <mark className=" bg-[#fee9b2] rounded-xl">
                  ไม่ต้องมีพยานรับรอง
                </mark>
              </li>
              <li>
                หากมีการขูด ลบ ตก เติม ผู้ทำพินัยกรรมต้องลงชื่อกำกับไว้ทุกแห่ง
              </li>
            </ul>
          </p>
        </div>

        {/* 3. พินัยกรรมแบบเอกสารฝ่ายเมือง */}
        <div>
          <h2 id="third-header">3. พินัยกรรมแบบเอกสารฝ่ายเมือง</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;การทำพินัยกรรมแบบเอกสารฝ่ายเมืองมีหลักเกณฑ์
            ดังนี้
            <ul className=" list-disc ml-16 mt-3">
              <li>
                ผู้ทำพินัยกรรมมีความ
                <mark className=" bg-[#fee9b2] rounded-xl">
                  ประสงค์จะให้เจ้าหน้าที่ของรัฐซึ่งเป็นคนรับรู้การทำพินัยกรรมของตน
                </mark>
              </li>
              <li>
                ผู้ประสงค์จะจัดทำพินัยกรรมจะ
                <mark className=" bg-[#fee9b2] rounded-xl">
                  ต้องไปแจ้งต่อเจ้าพนักงานของรัฐ ต่อหน้าพยาน 2 คน
                </mark>
              </li>
              <li>
                พินัยกรรมประเภทนี้จะไปทำนอกสถานที่ก็ได้
                หากเป็นความประสงค์ของผู้ทำพินัยกรรม
              </li>
              <li>
                การขูด ลบ ตกแต่ง เพิ่มเติมข้อมูล
                ผู้ที่เป็นพยานและเจ้าหน้าที่จะต้องลงลายมือชื่อกำกับไว้ทุกแห่ง
              </li>
            </ul>
          </p>
        </div>

        {/* 4. พินัยกรรมแบบทำเป็นเอกสารลับ */}
        <div>
          <h2 id="fourth-header">4. พินัยกรรมแบบทำเป็นเอกสารลับ</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;การทำพินัยกรรมแบบทำเป็นเอกสารลับมีหลักเกณฑ์
            ดังนี้
            <ul className=" list-disc ml-16 mt-3">
              <li>
                ต้องทำเป็นหนังสือ จะเขียนหรือพิมพ์เอง หรือให้ผู้อื่นทำให้ก็ได้
              </li>
              <li>ผู้ทำพินัยกรรมต้องลงลายมือชื่อในพินัยกรรม</li>
              <li>
                <mark className=" bg-[#fee9b2] rounded-xl">
                  ต้องปิดผนึกพินัยกรรมนั้น แล้วลงลายมือชื่อตามรอยผนึกนั้น
                </mark>
              </li>
              <li>
                <mark className=" bg-[#fee9b2] rounded-xl">
                  นำพินัยกรรมที่ผนึกนั้นไปแสดงต่อหน้าเจ้าพนักงานของรัฐและพยานอีกอย่างน้อย
                  2 คน
                </mark>{" "}
                และให้ถ้อยคำต่อบุคคลทั้งหมดเหล่านั้นว่าเป็นพินัยกรรมของตน
                ถ้าพินัยกรรมนั้นผู้ทำพินัยกรรมมิได้เขียนเองโดยตลอด
                ก็จะต้องแจ้งนาม และภูมิลำเนาของผู้เขียนให้ทราบด้วย
              </li>
              <li>
                เมื่อเจ้าพนักงานของรับจดถ้อยคำของผู้ทำพินัยกรรมและวันที่ เดือน
                ปีที่ทำพินัยกรรมมาแสดงไว้บนซองนั้น และประทับตราตำแหน่งแล้ว
                ให้เจ้าพนักงานของรัฐ ผู้ทำพินัยกรรม และพยานลงลายมือชื่อบนซองนั้น
                และประทับตราตำแหน่งแล้ว ให้เจ้าพนักงานของรัฐ ผู้ทำพินัยกรรม
                และพยานลงลายมือชื่อบนซอง
              </li>
              <li>
                ผู้ทำพินัยกรรมจะลงลายพิมพ์นิ้วมือ และมีพยานลงลายมือชื่อรับรอง 2
                คนแทนลงลายมือชื่อบนซอง
              </li>
            </ul>
          </p>
        </div>

        {/* 5. พินัยกรรมแบบทำด้วยวาจา */}
        <div>
          <h2 id="fifth-header">5. พินัยกรรมแบบทำด้วยวาจา</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;การทำพินัยกรรมแบบทำด้วยวาจามีหลักเกณฑ์
            ดังนี้
            <ul className=" list-disc ml-16 mt-3">
              <li>
                <mark className=" bg-[#fee9b2] rounded-xl">
                  ต้องมีพฤติการณ์พิเศษ
                  ซึ่งไม่สามารถจะทำพินัยกรรมตามแบบอื่นที่กำหนดไว้ได้
                </mark>{" "}
                เช่น ตกอยู่ในอันตราย ใกล้ความตาย หรือการมีโรคระบาด หรือสงคราม
                จึงจะทำพินัยกรรมด้วยวาจาได้
              </li>
              <li>
                <mark className=" bg-[#fee9b2] rounded-xl">
                  ผู้ทำพินัยกรรมต้องแสดงเจตนากำหนดข้อพินัยกรรมต่อหน้าพยานอย่างน้อย
                  2 คน
                </mark>{" "}
                ซึ่งอยู่พร้อมกัน ณ ที่นั้น
              </li>
              <li>
                <mark className=" bg-[#fee9b2] rounded-xl">
                  พยาน 2 คนนั้นต้องไปแสดงตนต่อหน้าเจ้าพนักงานของรัฐโดยเร็ว
                </mark>{" "}
                และแจ้งข้อความที่ผู้ทำพินัยกรรมสั่งไว้ด้วยวาจานั้น
                และต้องแจ้งวันที่ เดือน ปี สถานที่ทำพินัยกรรม
                และพฤติการณ์พิเศษนั้น
              </li>
              <li>
                เจ้าพนักงานของรัฐคนนั้นต้องจดแจ้งข้อความที่พยานได้แจ้งไว้
                และพยานทั้ง 2 คนนั้นต้องลงลายมือชื่อ หรือลงลายพิมพ์นิ้วมือ
                โดยมีพยานลงลายมือชื่อรับรอง 2 คน
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div>
        <h1 className="ml-4">แนะนำสำหรับคุณ</h1>
        <ul className="list__post">
          <li>
            <a className="text-indigo-700 underline" href="/thai/7">
              ความสามารถของผู้ทำพินัยกรรม
            </a>
          </li>
          <li>
            <a className="text-indigo-700 underline" href="/thai/8">
              ความสามารถของผู้รับพินัยกรรม
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default พินัยกรรม;

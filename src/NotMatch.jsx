import React from 'react'
import { Helmet } from "react-helmet";

const NotMatch = () => {
  const TITLE = "เกิดข้อผิดพลาด - Error";

  return (
    <section className="not_match section" id="not-match">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <div className='text-center'>
        <h2 className="text-[12rem]">404</h2>
        <span className="text-[2rem]">page not found</span>
      </div>

    </section>
  )
}

export default NotMatch
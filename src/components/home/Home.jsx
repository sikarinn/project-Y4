import React from 'react'
import Data from './Data'
import "./home.css"
import Banweb from './Banweb'

const Home = () => {
  return (
    <section className="home section" id='home'>
      <div className="home__container container grid">
        <div className="home__content grid ">
          <Banweb />

          <div className="home__img"></div>

          <Data />
        </div>
      </div>
    </section>
  )
}

export default Home

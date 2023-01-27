import React from 'react'
import portfolio from "../../../assets/portfolio.png"
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className='name'>Hello, I'm <span>Salvato Luis</span> </h3>
        <span className='job'>Web Developer Based in Nairobi</span>
        <span className='text'>Passionate<br /> about crafting cool stuff <br />  for the internet.</span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          contact me</motion.a>
        <div
          className="web"

        >
          Web Developer
        </div>
        <div
          className="ui"
        >
          Frontend Dev
        </div>
        <div
          className="freelance"
        >
          Freelancer
        </div>
      </div>
    </motion.div>
  )
}

export default Home
import React from 'react'
import "./Intro.css"
import statue from '../../Assets/simon-lee-hbFKxsIqclc-unsplash.png'
import statue2 from '../../Assets/Screenshot_2023-11-21_114034-removebg-preview.png'

const Intro = () => {
  return (
    <div className='Intro' id='about'>
      <div className='IntroContainer'>
        <div className='IntroLeft'>
          <div className='intro_left_header'>
            <div className='left_header1'>Hello i am ansuman</div>
            <div className='left_header2'>Ansuman Nayak</div>
          </div>
          <div className='intro_left_discription'>
          As a front-end developer and UI/UX designer, minimalist designs are my forte. I excel in responsive design, accessibility, and motion design, and have a keen interest in the psychology of user experience. In my free time, I enjoy cooking, watching anime, and indulging in art. 
          </div>
        </div>
        <div className='IntroRight'>
          <img src={statue2} alt="3d blender" />
        </div>
      </div>
    </div>
  )
}

export default Intro
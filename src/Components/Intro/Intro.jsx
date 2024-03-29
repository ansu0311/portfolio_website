import React from 'react'
import "./Intro.css"
import statue from '../../Assets/pink-helment-12.png'
import Marquee from "react-fast-marquee";
import SkillList from "../../Data/SkillList";

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
        {/* <div className='IntroRight'>
          <img src={statue2} alt="3d blender" />
        </div> */}
        <div className='IntroRight1'>
          <img src={statue} alt="3d blender" />
        </div>
      </div>
      <div className="logo_line">
        <Marquee gradientColor="#110e16" pauseOnHover="true" gradient="true" speed="100" gradientWidth="15rem">
          {SkillList.map((Skill,index)=>{
            return(<div className="logo_des"> 
            <img key={index} className="logo_size" src={Skill.logo} alt={Skill.name} />
          </div>)
          })}
          </Marquee>
        </div>
    </div>
  )
}

export default Intro
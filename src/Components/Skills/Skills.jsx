import React from 'react'
import "./Skills.css"
import hand from "../../Assets/simon-lee-hbFKxsIqclc-unsplash.png"

const Skills = () => {
  return (
    <div className='Skills'>
      <div className="SkillsContainer">
        <div className='SkillsLeft'>
          <div className='skills_left_header'>
            Tools at my disposal
          </div>
            <ul className='skills_left_list'>
            <li>html</li>
            <li>css</li>
            <li>bootstrap</li>
            <li>figma</li>
            <li>react.js</li>
            <li>adobe XD</li>
            <li>respomsive design</li>
            <li>illustrator</li>
            <li>text</li>
            </ul>
        </div>
        <div className='SkillsRight'>
          <img src={hand} alt="handmodel with mobiles" />
        </div>
      </div>
    </div>
  )
}

export default Skills
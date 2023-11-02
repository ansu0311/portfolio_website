import React from 'react'
import './Project.css'
import pure_css from '../../Assets/Projects/pure_css.png'
import Movie from '../../Assets/Projects/Movie.png'
import Ecom from '../../Assets/Projects/Ecom.png'
import Cookkie from '../../Assets/Projects/Cookkie.png'
import { Link } from 'react-router-dom'

const Project = () => {
  
  return (
    <div className='Project' id='work'>
      <div className="ProjectContainer">
        <p>Projects</p>
        <div className='ProjectSlab'>
        <div className='ProjectLeft'>
          <div className='project_header'>
            Ecommerce Website
          </div>
          <div className='project_work'>
            development
          </div>
        </div>
        <div className='ProjectRight'><Link to="https://ornate-custard-db69db.netlify.app/">
          <div className='pic_container'><img src={pure_css} alt="Project thumbnail" /></div>
        </Link></div>
        </div>
        <div className='ProjectSlab'>
        <div className='ProjectLeft_R'><Link to="https://movierecommendationwebsite.streamlit.app/">
        <div className='pic_container'><img src={Movie} alt="Project thumbnail" /></div>
          </Link></div>
        <div className='ProjectRight_R'>
          <div className='project_header'>
            Ecommerce Website
          </div>
          <div className='project_work'>
            development
          </div>
        </div>
        </div>
        <div className='ProjectSlab'>
        <div className='ProjectLeft'>
          <div className='project_header'>
            Ecommerce Website
          </div>
          <div className='project_work'>
            development
          </div>
        </div>
        <div className='ProjectRight'><Link to="https://e-com-website-eight.vercel.app/">
        <div className='pic_container'><img src={Ecom} alt="Project thumbnail" /></div>
        </Link></div>
        </div>
        <div className='ProjectSlab'>
        <div className='ProjectLeft_R'><Link to="https://cookie-site-omega.vercel.app/">
        <div className='pic_container'><img src={Cookkie} alt="Project thumbnail" /></div>
        </Link></div>
        <div className='ProjectRight_R'>
          <div className='project_header'>
            Ecommerce Website
          </div>
          <div className='project_work'>
            development
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Project
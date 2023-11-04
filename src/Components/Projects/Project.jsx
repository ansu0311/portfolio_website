import React from 'react'
import './Project.css'
import pure_css from '../../Assets/Projects/pure_css.png'
import Movie from '../../Assets/Projects/Movie.png'
import Ecom from '../../Assets/Projects/Ecom.png'
import Cookkie from '../../Assets/Projects/Cookkie.png'
import HTML_logo from '../../Assets/Skills/HTML_logo.png'
import CSS_logo from '../../Assets/Skills/CSS_logo.png'
import JavaScript_logo from '../../Assets/Skills/JavaScript_logo.png'
import Booystrap_logo from '../../Assets/Skills/Booystrap_logo.png'
import React_logo from '../../Assets/Skills/React_logo.png'
import Figma_logo from '../../Assets/Skills/Figma_logo.png'
import SQL_logo from '../../Assets/Skills/SQL_logo.png'
import Python_logo from '../../Assets/Skills/Python_logo.png'
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
        <div className='ProjectSlab_R'>
        <div className='ProjectLeft_R'><Link to="https://movierecommendationwebsite.streamlit.app/">
        <div className='pic_container'><img src={Movie} alt="Project thumbnail" /></div>
          </Link></div>
        <div className='ProjectRight_R'>
          <div className='project_header'>
            Movie Suggetion App
          </div>
          <div className='project_work'>
            Development
          </div>
        </div>
        </div>
        <div className='ProjectSlab'>
        <div className='ProjectLeft'>
          <div className='project_header'>
            Apperal Website
          </div>
          <div className='project_work'>
            Design & Development
          </div>
        </div>
        <div className='ProjectRight'><Link to="https://e-com-website-eight.vercel.app/">
        <div className='pic_container'><img src={Ecom} alt="Project thumbnail" /></div>
        </Link></div>
        </div>
        <div className='ProjectSlab_R'>
        <div className='ProjectLeft_R'><Link to="https://cookie-site-omega.vercel.app/">
        <div className='pic_container'><img src={Cookkie} alt="Project thumbnail" /></div>
        </Link></div>
        <div className='ProjectRight_R'>
          <div className='project_header'>
            Cookies Website
          </div>
          <div className='project_work'>
            design & development
          </div>
        </div>
        </div>
        <div className="logo_holder">
          <img className='logo_size' src={HTML_logo} alt="HTML" />
          <img className='logo_size' src={CSS_logo} alt="CSS" />
          <img className='logo_size' src={JavaScript_logo} alt="JavaScript" />
          <img className='logo_size' src={Booystrap_logo} alt="Booystrap" />
          <img className='logo_size' src={React_logo} alt="React.Js" />
          <img className='logo_size' src={Figma_logo} alt="Figma" />
          <img className='logo_size' src={SQL_logo} alt="SQL" />
          <img className='logo_size' src={Python_logo} alt="Python" />
        </div>
      </div>
    </div>
  )
}

export default Project
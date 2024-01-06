import pure_css from "../Assets/Projects/pure_css.png";
import Movie from "../Assets/Projects/Movie.png";
import Ecom from "../Assets/Projects/Ecom.png";
import Cookkie from "../Assets/Projects/Cookkie.png";
import pure_css_phone from "../Assets/Projects/HTML_phone.jpg";
import Movie_phone from "../Assets/Projects/Movie_phone.jpg";
import Ecom_phone from "../Assets/Projects/Apperal_phone.jpg";
import Cookkie_phone from "../Assets/Projects/Cookie_phone.jpg";

const Projects = [
  {
    id: 0,
    name: "Cookie Website",
    links: "https://cookie-site-omega.vercel.app/",
    design:"https://dribbble.com/shots/23007481-Doughful-Elevating-the-Online-Cookie-Experience",
    image: Cookkie,
    image_phone:Cookkie_phone,
    body:
      "Revamped Doughful's online store, prioritizing UX and conversion rates. Utilized a user-centric approach in Figma, implemented a responsive React.js layout for optimal performance, and enhanced aesthetics with loading animations and lazy loading. Deployed on Vercel for seamless collaboration and version control via GitHub.",
  },
  {
    id: 1,
    name: "Apperal Website",
    links: "https://e-com-website-eight.vercel.app/",
    design:"https://dribbble.com/shots/23018997-HueHarmony-Unveiling-Luxury-Clothing",
    image: Ecom,
    image_phone:Ecom_phone,
    body:"Designed a luxe apparel e-commerce site with React.js, emphasizing aesthetic appeal and color theory. Enabled efficient collaboration on GitHub and ensured a seamless user experience with Vercel deployment. Guided by a user persona, crafted a user-centric interface using Figma.",
  },
  {
    id: 2,
    name: "Movie Recommender",
    links: "https://movierecommendationwebsite.streamlit.app/",
    image: Movie,
    image_phone:Movie_phone,
    body:
      "Engineered a content-based recommender using Python on Jupyter Notebook, integrating TMDB datasets. Utilized Pandas, NumPy, and Matplotlib for efficient development. Implemented Cosine similarity for top 5 recommendations, transforming it into a Streamlit web app, hosted on GitHub for collaborative development.",
  },
  {
    id: 3,
    name: "E-commerce Website",
    links: "https://ornate-custard-db69db.netlify.app/",
    image: pure_css,
    image_phone:pure_css_phone,
    body:
      "Developed a responsive e-commerce site using pure CSS and HTML, featuring animations and effects for enhanced user engagement. Successfully deployed the website on Netlify for seamless accessibility and user interaction.",
  },
];

export default Projects;

import {useState, useEffect} from 'react'
import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from '../AnimatedLetters';
import projectData from '../../data/projects.json';

const Projects = () => {
const [letterClass, setLetterClass] = useState('text-animate');
console.log(projectData);

useEffect(()=>{
  setTimeout(()=>{
        setLetterClass('text-animate-hover');
    },3000);
},[]);

const renderProjects = (projects) => {
    const data = Array.from(projects.projects)
    return (
        <div className="images-container">
            {
                data.map((proj, idx) => 
                {
                    return (
                            
                                <div className="image-box" key={idx}>     
                                    <a href={proj.url} target="_blank" >  
                                        <img src={proj.cover} 
                                        className="project-image"
                                        alt="projects images"/>
                                        <div className="content">
                                            <p className="title">{proj.title}</p>
                                            <h4 className="description">{proj.description}</h4>
                                            <button className="btn"
                                            onClick={()=> window.open(proj.url)}>
                                                View
                                            </button>
                                        </div>
                                    </a>    
                                </div>
                           
                    );
                })
            }
        </div>
    );
}


    return(
        <>
        <div className="container project-page">
            <h1 className="page-title">
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Projects".split("")}
                    idx={15}
                />
            </h1>
            <div>{renderProjects(projectData)}</div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}
export default Projects
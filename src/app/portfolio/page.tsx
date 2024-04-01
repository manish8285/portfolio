"use client"
import type { NextPage } from "next";
import { PORTFOLIOS } from "@/constants/portfolio";
import { useState } from 'react';

const Portfolio: NextPage = () =>
{
  const [ projects, setProjects ] = useState(PORTFOLIOS);
  const [activeMenu,setActiveMenu]=useState("all")

  const menuClickHandler = (category:string) =>
  {
    if (category == "all")
    {
      setProjects(PORTFOLIOS);
    } else
    {
      const filteredProjects=PORTFOLIOS.filter((project)=>project.category==category)
      setProjects(filteredProjects);
      
    }
    setActiveMenu(category);
    
  }
  

  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              <button type="button" onClick={()=>menuClickHandler('all')} className={activeMenu=="all"?'active':''} data-filter="all">
                All
              </button>
              <button type="button" onClick={()=>menuClickHandler('mern')} className={activeMenu=="mern"?'active':''} data-filter="mern">
                MERN STACK
              </button>
              <button type="button" onClick={()=>menuClickHandler('reactjs')} className={activeMenu=="reactjs"?'active':''} data-filter="reactjs">
                ReactJS
              </button>
              <button type="button" onClick={()=>menuClickHandler('flask')} className={activeMenu=="flask"?'active':''} data-filter="flask">
                Flask
              </button>
              <button type="button" onClick={()=>menuClickHandler('nextjs')} className={activeMenu=="nextjs"?'active':''} data-filter="nextjs">
                NextJS
              </button>
              <button type="button" onClick={()=>menuClickHandler('spring')} className={activeMenu=="spring"?'active':''} data-filter="spring">
                Spring
              </button>
            </div>
          </div>
          <div className="row">
            {/* Portfolio Item */}

            {
              projects.map((project, index) => (
                <div className="portfolio-item padd-15" data-category={project.category} key={index}>
            <a href={project.href} target='_blank'>
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  
                  <img src={project.cover} alt="portfolio" />
                  
                </div>
                <div className="portfolio-info">
                  <h4>{project.tech}</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
                </div>
                </a>
            </div>
              ))
            }
            
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

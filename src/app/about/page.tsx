import { ABOUT_PARAGRAPH, DEGREES, PROFILE } from '@/constants/profile';
import { SKILLS } from '@/constants/skills'
import { EDUCATIONS } from '@/constants/education'
import {EXPERIANCES} from '@/constants/experiance'
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am {`${PROFILE.first_name} ${PROFILE.middle_name} ${PROFILE.last_name}`} a <span>{ PROFILE.profile} ({PROFILE.main_expertise})</span>
                  </h2>
                  <p >{ABOUT_PARAGRAPH}</p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>{PROFILE.website}</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>{PROFILE.email}</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>{DEGREES[0]}</span>, <span>{DEGREES[1]}</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+99 {PROFILE.mobile}</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>{PROFILE.city}</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>$10/Hr</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/docs/MANISH_FULLSTACK.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="/contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>


                {/* <div className="skills padd-15">
                  <div className="row">

                    {
                      SKILLS.map((skill, index) => (
                        <div className="skill-item padd-15" key={index}>
                          <h5>{skill.name}</h5>
                          <div className="progress">
                            <div className="progress-in" style={{ width: `${skill.percent}%` }} />
                            <div className="skill-percent">{skill.percent}%</div>
                          </div>
                        </div>
                        
                      ))
                    }


                    
                    
                
                  </div>
                </div> */}
              </div>

              <div className="row">
              <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        {
                          EXPERIANCES.map((experiance, index) => (
                            <div className="timeline-item" key={index}>
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> {experiance.start_date} to {experiance.end_date}
                          </h6>
                              <h4 className="timeline-title">{experiance.position}</h4>
                              <p className="timeline-text">
                            {experiance.city}, {experiance.company}
                          </p>
                          <p className="timeline-text">
                            {experiance.about}
                          </p>
                        </div>
                          ))
                        }

                      </div>
                    </div>
                  </div>
                </div>

              
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        {
                          EDUCATIONS.map((education, index) => (
                            <div className="timeline-item" key={index}>
                              <div className="circle-dot" />
                              <h6 className="timeline-date">
                                <i className="fa fa-calendar" /> {education.start_date} to {education.end_date}
                              </h6>
                              <h4 className="timeline-title">
                                {education.title}
                              </h4>
                              <p className="timeline-text">
                                {education.school} , {education.percent} %  ,<span> {education.city}</span>
                              </p>
                            </div>
                          ))
                        }
                        
                        {/* Timeline Item end */}
                       
                        
                        
                      </div>
                    </div>
                  </div>
                </div>

                <div className="skills padd-15">
                  <div className="row">

                    {
                      SKILLS.map((skill, index) => (
                        <div className="skill-item padd-15" key={index}>
                          <h5>{skill.name}</h5>
                          <div className="progress">
                            <div className="progress-in" style={{ width: `${skill.percent}%` }} />
                            <div className="skill-percent">{skill.percent}%</div>
                          </div>
                        </div>
                        
                      ))
                    }

                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

import React from 'react'
import './About.css'
import pic from '../assets/pic.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={pic} alt=""/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm Bhumika Sharma, a frontend developer with a year of experience in building responsive and visually engaging web interfaces. Skilled in HTML, CSS, and JavaScript, Reactjs, Github and Java.
            </p>
            <p> I’m passionate about creating user-friendly designs that bring functionality and aesthetics together.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "100%" }}></hr> </div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "80%" }}></hr> </div>
            <div className="about-skill"><p>ReactJs</p><hr style={{ width: "80%" }}></hr> </div>
            <div className="about-skill"><p>Github</p><hr style={{ width: "90%" }}></hr> </div>
            <div className="about-skill"><p>Boostrap</p><hr style={{ width: "100%" }}></hr> </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1</h1>
          <p>YEARS OF EXPERIENCE</p> </div>
        <hr />

        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS</p></div>
        <hr />

        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>

      </div>
    </div>
  )
}

export default About;

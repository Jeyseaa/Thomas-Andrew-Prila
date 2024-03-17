import React, { useState } from 'react';
import './About.css'; // Import your CSS file containing styles

function TeamMember(props) {
  const { name, role, desc, imgSrc, onClick } = props;
  return (
    <li>
      <div className="profile_container" onClick={() => onClick(name, role, desc, imgSrc)}>
        <img alt={name} className="profilepic" src={imgSrc} />
        <div className="bigimg-overlay">
          <div className="bigimg-text"><strong>{name}</strong><br/>{role}</div>
        </div>
      </div>
      <span className="hcontent job">{role}</span>
      <p className="hcontent desc">{desc}</p>
    </li>
  );
}

function AboutUs() {
  const [teamInfo, setTeamInfo] = useState({name: '', role: '', desc: '', imgSrc: ''});

  const handleClick = (name, role, desc, imgSrc) => {
    setTeamInfo({name, role, desc, imgSrc});
    window.scrollTo({top: document.querySelector('.team_box').offsetTop, behavior: 'smooth'});
  };

  return (
    <div id="wrapper_team">
      <div className="title_team">
        <h1>Meet the team</h1>
        <h5>Click on the photos for more information</h5>
        <p align="center">Welcome to TARA LETS, your premier destination for seamless travel <br /> 
          and accommodation services. Established by Group 1 in Web Engineering CPE 4-B,  <br /> 
          our team is dedicated to revolutionising the way you experience travel. <br /> 
          As part of our requirements for the course of Web Engineering at Bulacan State University <br /> 
          we present to you our website named TARA LETS!
          <br /> <br /> 
          At TARA LETS, we believe in the power of technology to enhance your journeys,<br /> 
          making them more convenient, enjoyable, and memorable. With a passion for innovation <br /> 
          and a commitment to excellence, our team works tirelessly to provide you with top-notch services tailored to your needs.
        </p>
      </div>
      <div className="team_box">
        <div id="teamcontent">
          <div className="container-left">
            <div className="bigimg" style={{backgroundImage: `url(${teamInfo.imgSrc})`}}>&nbsp;</div>
          </div>
          <div className="container-right" id="teamdetails">
            <h2 id="bigname">{teamInfo.name}</h2>
            <h3 id="bigjob">{teamInfo.role}</h3>
            <p id="bigdesc">{teamInfo.desc}</p>
          </div>
        </div>
      </div>
      <ul className="team clearfix">
        <TeamMember 
          name="Kimberly Mae Mayana" 
          role="UI/UX Designer" 
          desc="Kimberly Mae Mayana brings a creative flair to TARA LETS as our UI/UX Designer. With her eye for detail and passion for user experience, she designs intuitive interfaces that elevate the overall journey for our users." 
          imgSrc="https://i.ibb.co/VW2tFgX/Kimberly-Mae.jpg" 
          onClick={handleClick} 
        />
        <TeamMember 
          name="Mary Joyce Gonzales" 
          role="Developer" 
          desc="Mary Joyce Gonzales is a skilled developer who contributes her expertise to TARA LETS, ensuring that our systems operate seamlessly to meet the demands of our customers. Her dedication to excellence drives the continuous improvement of our services." 
          imgSrc="https://i.ibb.co/FKbFWjw/Mary-Joyce.jpg" 
          onClick={handleClick} 
        />
        <TeamMember 
          name="Thomas Andrew T. Prila" 
          role="Team Leader" 
          desc="As the visionary leader of TARA LETS, Thomas Andrew T. Prila brings years of experience in web engineering and a keen understanding of the travel industry. His leadership ensures that our team remains focused on delivering exceptional solutions to our customers." 
          imgSrc="https://i.ibb.co/vws4ML1/THOMAS-PICTURE.png" 
          onClick={handleClick} 
        />
        <TeamMember 
          name="Henri Loui Galang" 
          role="Developer" 
          desc="Henri Loui Galang is the driving force behind the technical development of TARA LETS. With expertise in web development, he crafts robust and user-friendly platforms that streamline the travel booking process for our clients." 
          imgSrc="https://i.ibb.co/wrW8C2Q/henri.jpg" 
          onClick={handleClick} 
        />
      </ul>
    </div>
  );
}

export default AboutUs;

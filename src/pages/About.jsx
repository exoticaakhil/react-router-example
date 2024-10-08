import React from 'react';

export default function About(props) {
  return (
    <div className="container">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, delectus consequatur? Rerum ipsum libero in et quasi, iste dolores dolor voluptatibus maxime asperiores labore aperiam at aliquid eius debitis excepturi?
      </div>
      <div className="content">
        <div className="user">
          <img src="male.jpg" alt="User" />
        </div>
        <div className="info">
          <div className="list-title">
            <h4>Personal Details</h4>
          </div>
          <div className="personal">
            <ul className="list">
              <li>
                <strong>Email:</strong>
                <span>akhilanilvly@gmail.com</span>
              </li>
              <li>
                <strong>Mobile:</strong>
                <span>9072477900</span>
              </li>
              <li>
                <strong>City:</strong>
                <span>Bangalore</span>
              </li>
            </ul>
            <ul className="list">
              <li>
                <strong>Website:</strong>
                <span>www.akhilanil.com</span>
              </li>
              <li>
                <strong>Degree:</strong>
                <span>Masters</span>
              </li>
              <li>
                <strong>Status:</strong>
                <span>Experienced</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* technical details */}
      <div className="info">
  <div className="info-title">
    <h4>Technologies</h4>
  </div>
  <div className="tech">
    
    <div className="column">
      <h5>Front-End</h5>
      <ul className="list">
        <li>
          <strong>HTML</strong>
          <div id="html"></div>
        </li>
        <li>
          <strong>CSS</strong>
          <div id="css"></div>
        </li>
        <li>
          <strong>JavaScript</strong>
          <div id="js"></div>
        </li>
        <li>
          <strong>React</strong>
          <div id="react"></div>
        </li>
      </ul>
    </div>
    
   
    <div className="column">
      <h5>Back-End</h5>
      <ul className="list">
        <li>
          <strong>Node.js</strong>
          <div id="node"></div>
        </li>
        <li>
          <strong>Express.js</strong>
          <div id="express"></div>
        </li>
        <li>
          <strong>MongoDB</strong>
          <div id="mongo"></div>
        </li>
        <li>
          <strong>MySQL</strong>
          <div id="sql"></div>
        </li>
      </ul>
    </div>
  </div>
</div>

    </div>
  );
}

import React from "react";

const Resume = () => {
  return (
    <div className="skills">
      <p>
        View and save my <a href="https://docs.google.com/document/d/1mIQHdymg4eJ4oo3xD04PcF70sxOc1taUDTVWmrWow70/edit?usp=sharing" target="_blank" rel="noreferrer">resume</a> on Google Drive
        <br/>
        View my <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      </p>
      <div className="row mt-5 d-flex">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center mb-5">
          <h3>Front-end Proficiencies</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">HTML</li>
            <li className="list-group-item">CSS</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">jQuery</li>
            <li className="list-group-item">responsive design</li>
            <li className="list-group-item">React</li>
            <li className="list-group-item">Bootstrap</li>
          </ul>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column align-items-center mb-5">
          <h3>Back-end Proficiencies</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">APIs</li>
            <li className="list-group-item">Node</li>
            <li className="list-group-item">Express</li>
            <li className="list-group-item">MySQL, Sequelize</li>
            <li className="list-group-item">MongoDB, Mongoose</li>
            <li className="list-group-item">REST</li>
            <li className="list-group-item">GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;

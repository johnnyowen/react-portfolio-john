import React from "react";
// ^ importing react

const Resume = () => {
  const frontend = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "responsiveDesign",
    "React",
    "Bootstrap",
  ];
  const backend = [
    "APIs",
    "Node",
    "Express",
    "MySQL, Sequelize",
    "MongoDB, Mongoose",
    "REST",
    "GraphQL",
  ];
  return (
    <div className="skills">
      {/* resume link  */}
      <p>
        View and save my{" "}
        <a
          href="https://docs.google.com/document/d/1mIQHdymg4eJ4oo3xD04PcF70sxOc1taUDTVWmrWow70/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          resume
        </a>{" "}
        from Google Drive
      </p>
      <div className="row mt-5 d-flex">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center mb-5">
          <h3 className="pro">Front-end Proficiencies</h3>
          <ul className="list-group list-group-flush">
            {/* using map to display frontend and backend profencies */}
            {frontend.map((item) => (
              <li className="list-group-item">{item}</li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column align-items-center mb-5">
          <h3 className="pro">Back-end Proficiencies</h3>
          <ul className="list-group list-group-flush">
            {backend.map((item) => (
              <li className="list-group-item">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;

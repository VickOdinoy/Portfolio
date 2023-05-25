import {
    DiHtml5,
    DiCss3,
    DiAndroid,
    DiReact,
  } from "react-icons/di";
  
  import "./styles/technologiescontainer.css";
  
  const technologies = [
    { id: "react", name: "React", icon: <DiReact className="react"/> }
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ReactContainer;
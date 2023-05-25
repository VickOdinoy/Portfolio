import {
    DiHtml5,
    DiCss3,
    DiAndroid,
    DiReact,
    DiMysql,
    DiJsBadge,
  } from "react-icons/di";
  
  import "./styles/technologiescontainer.css";
  
  const technologies = [
    { id: "html", name: "HTML5", description: "Tenho um nível intermediário de conhecimento de html." , icon: <DiHtml5 className="html"/> },
    { id: "css", name: "CSS3", description: "Tenho um nível intermediário de conhecimento sobre css." , icon: <DiCss3 className="css"/> },
    { id: "Ad", name: "Android", description: "Tenho um nível intermediário de conhecimento sobre android." , icon: <DiAndroid className="android"/> },
    { id: "react", name: "React", description: "Tenho um nível basico de conhecimento sobre react." , icon: <DiReact className="react"/> },
    { id: "mysql", name: "MySQL", description: "Tenho um nível basico de conhecimento sobre MySQL." , icon: <DiMysql className="my"/> },
    { id: "js", name: "JavaScript", description: "Tenho um nível basico de conhecimento sobre JavaScript." , icon: <DiJsBadge className="js"/> },
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
                 <p>{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;
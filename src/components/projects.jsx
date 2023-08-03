import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/projects.css";
import frontendMentor from "../images/frontendMentor.png";
import soon from "../images/soon.png";
import scriptLab from "../images/scriptLab.png";
import graph from "../images/graph.png";
import query from "../images/pquery.png";

const Projects = () => {
  const Card_project = ({ image, titulo, texto, footer, links, textLink }) => {
    return (
      <div className="col-xs-6 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 d-flex justify-content-between mt-4 mb-4 card-container">
        <div class="card">
          <img src={image} class="card-img-top" alt="..." />
          <div class="card-body mb-2">
            <h5 class="card-title mb-3">{titulo}</h5>
            <p class="card-text">{texto}</p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <small class="text-body-secondary">{footer}</small>
            <br />

            <a href={links} target="_blank">
              <small class="text-body-secondary">{textLink}</small>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="projects contain-content">
      <div className="title">
        <h1 className="h2">
          Proyectos
          <span class="h6 text-muted"> con solución a la medida</span>
        </h1>
      </div>
      <div className="row mb-4">
        {/* <Card_project
          image={soon}
          titulo={"Proyecto Ejemplo"}
          texto={"Plataforma para practicar con cualquier tecnología"}
          footer={"Last updated 3 mins ago"}
          textLink={"Link-view"}
          links={
            "aqui va la url"
          }
        /> */}
        <Card_project
          image={query}
          titulo={"Ingeniería de datos"}
          texto={"Proyecto donde se extraen los datos de SAP Hanna Studio, se limpian y transforman en Power Query para su consumo en reportes de Power BI."}
          footer={"Rebook"}
        /> 

        <Card_project
          image={graph}
          titulo={"Planner-Power BI (connection)"}
          texto={
            "Con el uso de Microsoft Graph (API) llevar la información de Planner a Power BI para construir un dashboard de altas y bajas en el área de RH."
          }
          footer={"Cygnus"}
        />

        <Card_project
          image={scriptLab}
          titulo={"Automatización DNC's"}
          texto={
            "Con el uso del complemento de Excel \"\Script lab\"\ se califican en automatico los examenes diagnóstico creando un reporte con el nivel sugerido de cada persona."
          }
          footer={"Edujam"}
          textLink={"Link-view"}
          links={
            "https://gist.github.com/eelernest/80cd2a4035400a5e01ae44ddddab2c44"
          }
        />
        <Card_project
          image={frontendMentor}
          titulo={"Frontend-Mentor"}
          texto={
            "Plataforma con proyectos dedicados al desarrollo Frontend. Cada ejercicio es muy distinto entre si y pone a prueba los conocimientos de diferentes tecnologias."
          }
          footer={"Samples"}
          textLink={"Link-view"}
          links={"https://www.frontendmentor.io/profile/eelernest/solutions"}
        />
        
      </div>
    </div>
  );
};

export default Projects;

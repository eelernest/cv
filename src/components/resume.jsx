import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/resume.css";
import imageProfile from '../images/profile.png';

const Resume = () => {

  return (
    <div className="resume contain-content ">
      <div className="title">
        <h1 className="h2">
            Resumen
            <span class="h6 text-muted mb-1"> Info, Habilidades e Intereses</span>
        </h1>
      </div>
      <div className="objetive mb-4">
        <div className="img-profile ">
          <img className="profile" src={imageProfile} alt="" />
        </div>
        <div className="p-4">
          <h3 class="subtitle">Objetivo</h3>
          <p className="objetive-subtitle">
            Desarrollar mi formación profesionalmente, destacando y
            contribuyendo con mis conocimientos en el lugar que me encuentre.
          </p>
        </div>
      </div>
      <div className="personal-info row mb-5">
        <div className="about col-xs-12 col-md-12 col-lg-5">
          <h5 class="h4 mb-4 pb-2">Información Personal</h5>
          <ul className="info-list">
            <li>
              <span class="i-title">Nombre:</span>
              <span class="text-muted">Espinosa López José Ernesto</span>
            </li>
            <li>
              <span class="i-title">Edad:</span>
              <span class="text-muted">28 años</span>
            </li>
            <li>
              <span class="i-title">Edo Civil:</span>
              <span class="text-muted">Casado</span>
            </li>
            <li>
              <span class="i-title">E-mail:</span>
              <span class="text-muted">eel.ernesto@outlook.es</span>
            </li>
            <li>
              <span class="i-title">Teléfono:</span>
              <span class="text-muted">55-19-18-61-07</span>
            </li>
            <li>
              <span class="i-title">Dirección:</span>
              <span class="text-muted">Cuajimalpa</span>
            </li>
          </ul>
        </div>


        <div className="skills col-xs-12 col-md-7">
          <h5 class="h4 pb-2">Web Tools</h5>
          <div className="skill-names p-2">

            <div className="webTool btn btn-danger">HTML/CSS</div>
            <div className="webTool btn btn-primary">Bootstrap/Tailwind</div>
            <div className="webTool btn btn-warning">Javascript</div>
            <div className="webTool btn btn-success">Microsoft Excel Avanzado</div>
            <div className="webTool btn btn-secondary">Power Query - Power BI</div>
            
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="abilities row">
        <h5 class="h4 mb-4 pb-2">Habilidades</h5>

        <div class="col-xs-12 col-md-6 col-lg-3 cardt p-3 mb-3">
            <div class="img-service d-flex justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-emoji-smile"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
              </svg>
            </div>
            <div class="card-body">
              <h4 class="service-title">Adaptatibilidad</h4>
              <p class="card-text">
                La represento como una visión para <strong>resolver</strong>{" "}
                situaciones de una forma diferente. Tomo el cambio para{" "}
                <strong>reforzar</strong> mi desempeño y para seguir
                aprendiendo, del contexto y de quienes me rodean.
              </p>
            </div>
        </div>

        <div class="col-xs-12 col-md-6 col-lg-3 cardt p-3 mb-4">
            <div class="img-service d-flex justify-content-center align-items-center">
              <i class="fas fa-laptop-code i-resume"></i>
            </div>
            <div class="card-body">
              <h4 class="service-title">Tecnología</h4>
              <p class="card-text">
                El uso constante me permitió desenvolverme en temas de{" "}
                <strong>soporte tecnico</strong>, en hardware y en algunos casos
                de software, sin olvidar mis conocimientos en{" "}
                <strong>desarrollo web</strong> con diferentes herramientas.
              </p>
            </div>
        </div>

        <div class="col-xs-12 col-md-6 col-lg-3 cardt p-3 mb-4">
            <div class="img-service d-flex justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </div>
            <div class="card-body">
              <h4 class="service-title">Autoregulación</h4>
              <p class="card-text">
                Genero <strong>compromiso</strong> por lo que hago, esto me
                permite <strong>identificar</strong> las necesidades de una forma
                precisa. Con base en ello puedo modificar mis circunstancias en
                el ambito laboral para ejercer con <strong>eficiencia.</strong>
              </p>
            </div>
        </div>

          <div class="col-xs-12 col-md-6 col-lg-3 cardt p-3">
            <div class="img-service d-flex justify-content-center align-items-center">
              <i class="far fa-comment-dots i-resume"></i>
            </div>
            <div class="card-body">
              <h4 class="service-title">Comunicación</h4>
              <p class="card-text">
                Saber escuchar es lo que resalto. Pienso que al{" "}
                <strong>comprender</strong> a la otra persona se puede potenciar
                la interacción entre ambos e <strong>intercambiar ideas</strong>{" "}
                con beneficio, repercutiendo así, con el{" "}
                <strong>trabajo en equipo.</strong>
              </p>
            </div>
          </div>
      </div>
      </div>
      
    </div>
  );
};

export default Resume;

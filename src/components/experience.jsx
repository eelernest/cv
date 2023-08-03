import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/experience.css";
import Left from "./Experience/left";
import Right from "./Experience/rigth";
import Cursos from "./Experience/cursos";

function Experience() {
  return (
    <div class="experience contain-content">
      <div class="title">
        <h1 class="h2">
          Formación
          <span class="h6 text-muted mb-2"> conocimientos y experiencia</span>
        </h1>
      </div>
      <div class="card-image">
        <img
          class="card-img"
          src="https://www.proceso.com.mx/u/fotografias/m/2021/8/9/f1280x720-140452_272127_4639.jpg"
          alt=""
        />
      </div>

      <div className="columns-cards row">
        {/* 
        ICONOS:
        Educacion: 'fa fa-book'
        Trabajo: 'fa fa-briefcase' 
        
        Componente:
        <Left
          icono={'fa fa-book'}
          identify={'ejemplo'}
          titulo='Nombre'
          subtitulo='Subtitulo'
          fecha='2022-2023'
          lista1={'primer nivel'}
          lista2={'segundo nivel'}
          lista5={'nivel 5'}
          ...hasta 10 elementos
        />
        */}

        <Left
          icono={"fa fa-book"}
          identify={"upn"}
          titulo="Universidad Pedagogica Nacional"
          subtitulo="Pedagogía (Educación Matemática)"
          fecha="2016 - 2021"
          lista1={"Procesos de Enseñanza-Aprendizaje."}
          lista2={"Didactica General."}
          lista3={"Paradigmas Educativos."}
          lista4={"Dinámicas de Aprendizaje."}
          lista5={"Investigación y Análisis de datos."}
          lista6={"Diseño de Evaluación Educativa."}
        />
        
        <Right
          icono={"fa fa-briefcase"}
          identify={"edujam"}
          titulo="Edujam"
          subtitulo="Instructor Microsoft"
          fecha="Actualmente"
          lista1={"Realizo infraestructura e ingeniería de datos a nivel gerencial, depurando, normalizando y transformando datos para asegurar la calidad y coherencia de la información."}
          lista2={"Desarrollo conexiones a través de API's, permitiendo la integración de datos en Excel o Power BI para la generación de reportes y análisis de la información en tiempo real."}
          lista3={"Imparto cursos de Excel a nivel básico, intermedio y avanzado, con el objetivo de mejorar las habilidades y competencias en el manejo de esta herramienta para la toma de decisiones informadas."}
          lista4={'Diseño planes de capacitación a partir del temario y la población objetivo de nuestros cursos, con el fin de brindar soluciones de aprendizaje adaptadas a las necesidades de los colaboradores de la empresa que nos contrata.'}
        />

        <Cursos/>
        

        <Right
          icono={"fa fa-briefcase"}
          identify={"glasser"}
          titulo="GLASSER, S.A. de C.V."
          subtitulo="Recursos Humanos"
          fecha="2021 - 2022"
          lista1={"Participé en el área de planeación estratégica. Colaborando en la elaboración de soluciones para mejorar el desempeño y la eficiencia de los procesos."}
          lista2={"Realicé investigaciones sobre las tendencias y mejores prácticas en el área de RH, con el fin de mantener actualizados los conocimientos y aportar al equipo."}
          lista3={"Realicé análisis de información de manera sistemática y detallada, identificando patrones y tendencias que permitieron tomar decisiones en gerencia y con el fin de mejorar la toma de decisiones en el departamento."}
          lista4={"Generé reportes a nivel gerencial, sintetizando la información recopilada y presentando resultados de manera clara y concisa para la toma de decisiones estratégicas."}
          lista5={"Colaboré en la creación de contenido audiovisual para la comunicación interna de la empresa, diseñando y produciendo videos corporativos y material gráfico."}
        />

        <Left
          icono={"fa fa-briefcase"}
          identify={"styfe"}
          titulo="Secretaría de Trabajo y Fomento al Empleo, Abriendo Espacios
          (Servicio Social)"
          subtitulo="Asesor Especializado de Empleo"
          fecha="2021"
          lista1={"Diseño e impartición de talleres de capacitación para consejería laboral y personas buscadoras de empleo."}
          lista2={"Sistematizar información de población participante en la estrategia Abriendo Espacios."}
          lista5={"Vinculación de perfiles en la plataforma SIISNE con vacantes ofertadas."}
          lista6={'Manejo de Diferentes Dinámicas de Aprendizaje.'}
          lista7={'Talleres para promover los servicios que ofrece la STyFE.'}
          lista8={'Interpretar resultados de Evaluación de Habilidades Laborales.'}
          lista9={'Entrevista laboral (Profunda).'}
          lista10={'Concertación Empresarial.'}
        />

        
      </div>
    </div>
  );
}

export default Experience;

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/experience.css";

const ListaCursos = ({ titulo, subtitulo, fecha }) => {
  return (
    <>
      <h4 class="exp-title ">{titulo}</h4>
      <h4 class="exp-subtitle text-muted ">{subtitulo}</h4>
      <h6 class="text-muted exp-subtitle ">{fecha}</h6>
      <br />
      <span class="circle circle-left left-1"></span>
    </>
  );
};

function Cursos() {
  return (
    <div class="col-md-12 col-lg-6 cards-left">
      <span className="left-ico"><i class="fa fa-book" aria-hidden="true"></i></span>

      <div class="col-left edu-exp">
      <ListaCursos
          titulo="Creación de Reportes con Power BI"
          subtitulo="Microsoft Learn"
          fecha="2023"
        />
        <ListaCursos
          titulo="Microsoft Office Specialist"
          subtitulo="Excel 2019 Expert"
          fecha="2022"
        />
        <ListaCursos
          titulo="Programación con Javascript"
          subtitulo="Fundación Telefónica Movisar"
          fecha="2022"
        />
        <ListaCursos
          titulo="Facilitador de Aprendizaje Digital"
          subtitulo="Fundación Carlos Slim"
          fecha="2021"
        />
        

      </div>
    </div>
  );
}

export default Cursos;

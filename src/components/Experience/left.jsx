import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/experience.css";

function Left({
  icono,
  identify,
  titulo,
  subtitulo,
  fecha,
  lista1,
  lista2,
  lista3,
  lista4,
  lista5,
  lista6,
  lista7,
  lista8,
  lista9,
  lista10,
}) {

  let count =0;
  const btnToggle=()=>{
    const listCollapse = document.getElementById(identify)
    if(count===0){
      listCollapse.classList.remove('collapse');
      count = 1;
    }else{
      listCollapse.classList.add('collapse');
      count = 0;
    }
}

  return (
    <div class="col-md-12 col-lg-6 cards-left">
      <span className="left-ico">
        <i class={icono} aria-hidden="true"></i>
      </span>
      <div class="col-left edu-exp">
        <div
          class="collapse-hover"
          type='button'
          onClick={()=>{btnToggle()}}
        >
          <h4 class="exp-title ">{titulo}</h4>
          <h4 class="exp-subtitle text-muted ">{subtitulo}</h4>
          <h6 class="text-muted exp-subtitle ">{fecha}</h6>
          <br />
          <span class="circle circle-left left-1"></span>
        </div>
        <div className="collapse" id={identify}>
          <p class="exp list-group-item">{lista1}</p>
          <p class="exp list-group-item">{lista2}</p>
          <p class="exp list-group-item">{lista3}</p>
          <p class="exp list-group-item">{lista4}</p>
          <p class="exp list-group-item">{lista5}</p>
          <p class="exp list-group-item">{lista6}</p>
          <p class="exp list-group-item">{lista7}</p>
          <p class="exp list-group-item">{lista8}</p>
          <p class="exp list-group-item">{lista9}</p>
          <p class="exp list-group-item">{lista10}</p>
        </div>
      </div>
    </div>
  );
}

export default Left;

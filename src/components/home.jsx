import React from 'react';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import '../styles/home.css'
const Home = () =>{
    const el = useRef(null);
        useEffect(()=>{
            const typed = new Typed(el.current, {
                strings: ["Dev Front-End","Lic. en Pedagogía"],
                typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
                startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
                backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
                backDelay: 2000, // Tiempo de espera despues de que termina de escribir una palabra.
                loop: true, // Repetir el array de strings
                loopCount: 2, // Cantidad de veces a repetir el array.  false = infinite
                showCursor: false, // Mostrar cursor palpitanto
        })
    })

    return(
        <div className="home mainn contain-content p-3">
            <div className='name-contain'>
                <div className='h1-name'>José Ernesto Espinosa López <br/><span ref={el} className="animate-text"></span></div>
            </div>
        </div>
    );
}


export default Home;
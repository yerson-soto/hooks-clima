import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';


function App() {

   const [ ciudad, setCiudad] = useState('');
   const [ pais, setPais ] = useState('');
   const [ error, setError ] = useState(false);
   const [ resultado, setResultado ] = useState({});

   useEffect(() => {
   
      //prevenir ejecucion
      if (ciudad === '') return;

      consultarAPI(ciudad, pais);
      
   }, [ciudad, pais])



   //Consultar la api
   const consultarAPI = async (ciudad, pais) => {

      const apiId = '28a91621a94f36d174209117b7a39c5a';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      setResultado(resultado);

   }

   //Traer datos del formulario
   const datosConsulta = (datos) => {
      //comprobar si hay errores
      if (datos.ciudad === '' || datos.pais === '') {
         //error
         setError(true);
         return;
      }

      //ambos existe, guardar en el state
      setCiudad(datos.ciudad);
      setPais(datos.pais);
      setError(false);

   }

   

   //Cargar componente condicionalmente
   let componente;
   if (error) {
      componente = <Error mensaje="Ambos campos son obligatorios!" />
   } else if(resultado.cod === '404') {
      componente = <Error mensaje={`${ciudad} no es una ciudad de este país`} />
   } else {
      componente = <Clima resultado={resultado} />
   }

   return (
      <div className="App">
         <Header 
            titulo="Clima con Hooks"
         />

         <div className="contenedor-form">
            <div className="container">
               <div className="row">
                  <div className="col s12 m6">
                     <Formulario 
                        datosConsulta={datosConsulta}
                     />
                  </div>

                  <div className="col s12 m6">
                     {componente}
                  </div>
               </div>
            </div>
         </div>
      </div>
   ) 
}

export default App;

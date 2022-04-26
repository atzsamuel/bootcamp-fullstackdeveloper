import React, { useState, useEffect } from "react";
import Conteo from "./Conteo";
import Boton from "./Boton";

const Saludo = () => {
  const [contador, setContador] = useState(0);
  const [par, setPar] = useState(true);
  const [pagina, setPagina] = useState("default");
  const [texto, setTexto] = useState("");

  useEffect(() => {
    console.log('hello world');
    if(contador >3){
     console.log('mayor que 3')
    }
  })


  //rules of dependencies, if the dependencies change, the function will be called []
  // if rule of dependencies is empty, the function will be called only once []
  useEffect(() => {
    setPar(contador % 2 === 0);

    //if you want to clean up after the effect, you can return a function
    /*return ()=>{
      console.log('adios mundo');
    }*/
  }, [contador]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${pagina}`)
    .then((response)=>response.json())
    .then((json)=>console.log(json));
  },[pagina])

  const sumarContador = () => {
    setContador(contador + 1);
  };

  const restarContador = () => {
    setContador(contador - 1);
  };

  const setNewPagina=(pag)=>{
    setPagina(pag)
  }

  const botones = [
    {
      tipo: "suma",
      operacion: sumarContador,
    },
    {
      tipo: "resta",
      operacion: restarContador,
    },
    {
      tipo: "Posts",
      operacion: ()=>{setNewPagina('posts')},
    },
    {
      tipo: "Users",
      operacion: ()=>{setNewPagina('users')},
    },
    {
      tipo: "Comments",
      operacion: ()=>{setNewPagina('comments')},
    },
  ];

  const handleInputChange = (event) => {
    setTexto(event.target.value);
  };

  return (
    <>
      <Conteo numero={contador} />
      {par && <p>Numero par!</p>}

      {botones.map((config, index) => {
        return <Boton key={`${index}-${config.tipo}`} config={config} />;
      })}
      <h2>{pagina}</h2>
      <input type="text" value={texto} onChange={handleInputChange}/>
      <h2>{texto}</h2>
     
  
 {/* <Boton config={{
        tipo: "suma",
        operacion: sumarContador
      }} />
       <Boton config={{
        tipo: "resta",
        operacion: restarContador
      }} />
  */}
    </>
  );
};
export default Saludo;

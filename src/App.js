import React , {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante ] = useState(0);
  const [mostrarPregunta, setmostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, addCrearGasto] = useState(false);

  //UseEfect que actualiza el restante 

  useEffect(() => {
    if(crearGasto){
      
      setGastos([
        ...gastos,
        gasto
      ]);

      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante); 

    } 

  }, [gasto]);

 
  return (
    <div className="container">
      <header>  
      <h1> Gasto Semanal </h1>
      <div className="contenido-principal contenido">
      { mostrarPregunta ? 
        (
          <Pregunta 
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
            setmostrarPregunta={setmostrarPregunta}
          />
        ) : 
        (
          <div className="row">
            <div className="one-half column">
              <Formulario
                setGasto={setGasto}
                addCrearGasto={addCrearGasto} 
              />
            </div>
            <div className="one-half column">
              <Listado
                gastos  ={gastos}
              />
              <ControlPresupuesto 
                presupuesto={presupuesto}
                restante={restante}
              />


            </div>
            
        </div>


        ) }
      </div>
      </header>
    </div>
  );
}

export default App;

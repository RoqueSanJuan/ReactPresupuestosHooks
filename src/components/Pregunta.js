import React, { Fragment , useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({setPresupuesto, setRestante, setmostrarPregunta}) => {
    
    //Defino States
    const [ presupuestoInicial, setPresupuestoInicial ] = useState(0);
    const [ error, guardarError ] = useState(false);


    //Funcion que lee el presupusto
    const definirPresupuesto = e => setPresupuestoInicial(parseInt(e.target.value),10);

    //submit para definir el presupuesto

    const asignoPresupuesto = e => {

        //Evito la carga de la pagina
        e.preventDefault();
        
        //Validar Presupuesto
        if(presupuestoInicial < 1 || isNaN(presupuestoInicial)){
            guardarError(true);
            return;
        }
        guardarError(false);
        setPresupuesto(presupuestoInicial);
        setRestante(presupuestoInicial);
        setmostrarPregunta(false);

    }

    return (
        <Fragment>
            <h2>
                Coloca tu presupuesto
            </h2>

            {error ? <Error mensaje="El presupuesto es incorrecto " /> : null }

            <form
                onSubmit={asignoPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>

        </Fragment>



    )
}

Pregunta.protoTypes = {
    setPresupuesto : PropTypes.func.isRequired,
    setRestante : PropTypes.func.isRequired,
    setmostrarPregunta : PropTypes.func.isRequired
}



export default Pregunta;

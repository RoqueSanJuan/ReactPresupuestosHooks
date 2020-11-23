import React , {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

import PropTypes from 'prop-types'

const Formulario = ({setGasto, addCrearGasto}) => {


    const [nombreGasto, setNombreGasto] = useState("");
    const [cantidadGasto, setCantidadGasto] = useState(0);
    const [error, setError] = useState(false);
    
    const addGasto = e => {
        e.preventDefault();

        if(cantidadGasto < 1 || isNaN(cantidadGasto ) || nombreGasto.trim === ''){
            setError(true);
            return;
        }
        setError(false);
        
        const Gasto = {
            nombre : nombreGasto,
            cantidad : cantidadGasto,
            id : shortid.generate()
        }

        setGasto(Gasto);
        addCrearGasto(true);

        setNombreGasto("");
        setCantidadGasto(0);
        
    }

    return(

        <form

            onSubmit={addGasto}
        >
            <h2>Agrega tus Gastos</h2>

            { error ? <Error mensaje="Presupuesto incorrecto"/> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombreGasto}
                    onChange = {e => setNombreGasto(e.target.value)}
                ></input>
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value = {cantidadGasto}
                    onChange = {e => setCantidadGasto(parseInt(e.target.value,10))}
                ></input>
            </div>
            <input
                type="submit"
                className="button-primary u-full-wight"
                value="Agregar Gasto"
            ></input>
        </form>

    )

}

Formulario.protoTypes = {
    setGasto : PropTypes.func.isRequired,
    addCrearGasto : PropTypes.func.isRequired,
}


export default Formulario;
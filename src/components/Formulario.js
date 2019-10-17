import React, { useState } from 'react';

function Formulario({datosConsulta}) {

    const [ busqueda, setBusqueda ] = useState({
        ciudad: "",
        pais: ""
    });

    const handleChange = (e) => {
        //cambiar el state
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const consultarClima = (e) => {
        e.preventDefault();

        datosConsulta(busqueda);
    }
    
    return (
        <form onSubmit={consultarClima}>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select 
                    name="pais"
                    onChange={handleChange}
                >
                    <option value="">--Elige un País</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="DO">Republica Dominicana</option>
                    <option value="ES">España</option>
                    <option value="CO">Colombia</option>
                    <option value="PE">Perú</option>
                    <option value="AR">España</option>
                    <option value="CR">Costa Rica</option>
                </select>
            </div>

            <div className="input-field col s12">
                <input 
                    type="submit"
                    className="waves-effect waves-light btn-large btn-large yellow accent-4"
                    value="Buscar Clima"
                />
            </div>
        </form>
    );
}

export default Formulario;
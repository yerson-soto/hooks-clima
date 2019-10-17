import React from 'react';

function Clima({resultado}) {
    //extraer lo valores
    const { name, main } = resultado;

    if (!name) return null;

    //Convertir de kelvin a celcius
    const kelvin = 273.15;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Clima de {name}</h2>
                <p className="temperatura">
                    {parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span>
                </p>

                <p>
                    Máx: ${parseInt(main.temp_max - kelvin, 10)} &#x2103;
                </p>
                <p>
                    Min: ${parseInt(main.temp_min - kelvin)} &#x2103;
                </p>
            </div>
        </div>
    )
}

export default Clima;
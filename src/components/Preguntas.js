"use client"

export const Preguntas = ({ preguntas, respuestas, guardarRespuestas }) => {

    const actualizarRespuestaConClave = (id, clave) => {
        // Creamos una copia del array de respuestas
        const nuevasRespuestas = [...respuestas];

        // Buscamos la respuesta con el ID proporcionado
        const respuestaIndex = nuevasRespuestas.findIndex(respuesta => respuesta.id === id);

        // Si encontramos una respuesta con el mismo ID, actualizamos la clave
        if (respuestaIndex !== -1) {
            nuevasRespuestas[respuestaIndex].clave = clave;
        } else {
            // Si no encontramos una respuesta con el mismo ID, agregamos una nueva respuesta
            nuevasRespuestas.push({ id, clave });
        }

        // Actualizamos el estado con las nuevas respuestas
        guardarRespuestas(nuevasRespuestas);
    };

    const obtenerRespuestas = (e) => {
        const id = parseInt(e.target.name);
        const clave = e.target.value;
        actualizarRespuestaConClave(id, clave);
    };

    return (
        <>
            {
                preguntas.map(pregunta => {
                    return (
                        <div key={pregunta.curso_id} id={pregunta.curso_id}>
                            <h2 className="curso">{pregunta.nombre}</h2>
                            <br />
                            {
                                pregunta.preguntas.map(pregunta => {
                                    return (
                                        <div key={pregunta.id}>
                                            <span>{pregunta.numero}) </span>
                                            <br />
                                            <img src={pregunta.pregunta_img} className="imagen" />
                                            <br />
                                            <div className="alternativas">
                                                <label>
                                                    <input type="radio" name={pregunta.id} value="a" onChange={obtenerRespuestas} />
                                                    A)
                                                </label>
                                                <label>
                                                    <input type="radio" name={pregunta.id} value="b" onChange={obtenerRespuestas} />
                                                    B)
                                                </label>
                                                <label>
                                                    <input type="radio" name={pregunta.id} value="c" onChange={obtenerRespuestas} />
                                                    C)
                                                </label>
                                                <label>
                                                    <input type="radio" name={pregunta.id} value="d" onChange={obtenerRespuestas} />
                                                    D)
                                                </label>
                                                <label>
                                                    <input type="radio" name={pregunta.id} value="e" onChange={obtenerRespuestas} />
                                                    E)
                                                </label>
                                            </div>
                                            <br />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </>
    );
}

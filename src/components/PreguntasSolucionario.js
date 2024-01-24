"use client"

export const PreguntasSolucionario = ({ preguntas }) => {
    return (
        <div>
            {
                preguntas.map(pregunta => {
                    return (
                        <div key={pregunta.id}>
                            {/*pregunta.correcta !== null ? (pregunta.correcta ? <p>Correcta</p> : <p>Incorrecta</p>) : <p>Blanco</p>*/}
                            <div>
                                <span>{pregunta.numero}) </span>
                                <br/>
                                <img className="imagen" src={pregunta.pregunta_img} />
                            </div>
                            <div className="alternativas">
                                <label>
                                    <input type="radio" name={pregunta.id} value="a" checked={pregunta.clave_enviada === "a"} />
                                    A)
                                </label>
                                <label>
                                    <input type="radio" name={pregunta.id} value="b" checked={pregunta.clave_enviada === "b"} />
                                    B)
                                </label>
                                <label>
                                    <input type="radio" name={pregunta.id} value="c" checked={pregunta.clave_enviada === "c"} />
                                    C)
                                </label>
                                <label>
                                    <input type="radio" name={pregunta.id} value="d" checked={pregunta.clave_enviada === "d"} />
                                    D)
                                </label>
                                <label>
                                    <input type="radio" name={pregunta.id} value="e" checked={pregunta.clave_enviada === "e"} />
                                    E) 
                                </label>
                            </div>
                            <br />
                            <div>
                                <p><b>Respesta Correcta: </b>{pregunta.clave_correcta}</p>
                                <br/>
                                <img className="imagen" src={pregunta.solucion_img}/>
                            </div>
                            <br />
                        </div>
                    )
                })
            }
        </div>
    );
}

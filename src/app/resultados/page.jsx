"use client"
import { useContext } from "react";
import UniversidadContext from "@/src/context/universidad/UniversidadContext";
import { PreguntasSolucionario } from "@/src/components/PreguntasSolucionario";

export default function ResultadosPage() {
    const { resultados } = useContext(UniversidadContext)

    if (!resultados) return null;
    return (
        <div>
            <h1 className="titulo">RESULTADOS</h1>
            <h2>{`Score: ${resultados.score}`}</h2>
            <br />
            {
                resultados.solucionario.map(curso => {
                    return (
                        <div key={curso.curso_id}>
                            <h2 className="curso">{curso.nombre}</h2>
                            <br />
                            <PreguntasSolucionario preguntas={curso.preguntas} />
                        </div>
                    )
                })
            }
        </div>
    );
}
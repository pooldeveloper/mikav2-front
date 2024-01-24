"use client"
import { useContext, useEffect, useState } from "react";
import UniversidadContext from "@/src/context/universidad/UniversidadContext";
import Link from "next/link";
import { Preguntas } from "@/src/components/Preguntas";

export default function SimulacroPage() {
    const examen_id = "ceprevi_23-1-24"

    const [respuestas, guardarRespuestas] = useState([]);
    const [tiempoRestante, setTiempoRestante] = useState(null); // Estado para el tiempo restante en segundos

    const { preguntas, obtenerPreguntas, enviarRespuestas, examen } = useContext(UniversidadContext);

    if(!examen) return null;
    
    useEffect(() => {
        obtenerPreguntas(examen_id);
        
        // Establecer el temporizador al cargar la página
        if (examen.minutos) {
            const tiempoTotal = examen.minutos * 60; // Convertir minutos a segundos
            setTiempoRestante(tiempoTotal);
        }
    }, [examen.minutos]);

    // Usar un efecto separado para actualizar el temporizador
    useEffect(() => {
        if (tiempoRestante === null) return;

        // Iniciar el temporizador con un retardo de 1000 ms (1 segundo)
        const temporizador = setInterval(() => {
            if (tiempoRestante > 0) {
                setTiempoRestante(tiempoRestante - 1);
            } else {
                // Cuando el tiempo se agote, ejecutar la función terminar
                clearInterval(temporizador);
                terminar();
                router.push(`/${universidad_id}/${año}/solucionario`)
            }
        }, 1000);

        // Limpiar el temporizador cuando se desmonte el componente
        return () => clearInterval(temporizador);
    }, [tiempoRestante]);

    const terminar = () => {
        enviarRespuestas({
            examen_id,
            respuestas
        });
    }

    return (
        <>
            <br/>
            {tiempoRestante !== null && (
                <h2 className="text-center">
                    {Math.max(0, Math.floor(tiempoRestante / 3600))}:{Math.max(0, Math.floor((tiempoRestante % 3600) / 60))}:{Math.max(0, Math.floor(tiempoRestante % 60))}
                </h2>
            )}
            <br/>
            <Preguntas preguntas={preguntas} respuestas={respuestas} guardarRespuestas={guardarRespuestas} />
            <br />
            <Link href="/resultados"><button className="boton" onClick={terminar}>TERMINAR</button></Link>
        </>
    );
}

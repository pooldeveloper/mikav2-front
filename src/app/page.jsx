"use client"
import { useContext, useEffect } from "react";
import UniversidadContext from "@/src/context/universidad/UniversidadContext";
import Link from 'next/link';

export default function ExamenPage() {
    const examen_id = "ceprevi_23-1-24"

    const { obtenerExamen, examen, registrarUsuario } = useContext(UniversidadContext)

    useEffect(() => {
        const solicitarNombre = () => {
            let nombreUsuario = prompt('Por favor, ingrese su nombre:');

            // Validar que el nombre no esté vacío
            while (!nombreUsuario || nombreUsuario.trim() === '') {
                nombreUsuario = prompt('Por favor, ingrese un nombre válido:');
            }

            registrarUsuario({nombre: nombreUsuario})
        };

        solicitarNombre();
    }, []);

    useEffect(() => {
        obtenerExamen(examen_id)
    }, [])

    if (!examen) return null
    return (
        <div className="inicio">
            <h1 className="titulo">{examen.nombre}</h1>
            <h2>Instrucciones:</h2>
            <p>{examen.instrucciones}</p>
            <Link href="/iniciando"><button className="boton">Iniciar</button></Link>
        </div>
    );
}
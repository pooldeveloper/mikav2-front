'use client';

import React, { useReducer } from 'react'
import clientAxios from "../../config/clientAxios"
import UniversidadContext from './UniversidadContext'
import UniversidadReducer from './UniversidadReducer'
import {
    OBTENER_UNIVERSIDADES,
    OBTENER_CURSOS,
    OBTENER_PREGUNTAS,
    ENVIAR_RESPUESTAS,
    OBTENER_EXAMENES,
    OBTENER_EXAMEN
} from '../../types'

const UniversidadState = ({ children }) => {

    const initialState ={
        universidades: null,
        cursos: null,
        preguntas: [],
        resultados: null,
        examenes: null,
        examen: null
    }

    const[state, dispatch] = useReducer(UniversidadReducer, initialState)

    const obtenerUniversidades = async () =>{
        try{
            const resultado = await clientAxios.get('/api/universidades')
            dispatch({
                type: OBTENER_UNIVERSIDADES,
                payload: resultado.data
            })
        }catch(error){
           console.log(error)
        }
    }

    const obtenerCursos = async examen_id =>{
        try{
            const resultado = await clientAxios.get(`/api/cursos/${examen_id}`)
            dispatch({
                type: OBTENER_CURSOS,
                payload: resultado.data
            })
        }catch(error){
           console.log(error)
        }
    }

    const obtenerPreguntas = async examen_id =>{
        try{
            const resultado = await clientAxios.get(`/api/preguntas/${examen_id}`)
            dispatch({
                type: OBTENER_PREGUNTAS,
                payload: resultado.data
            })
        }catch(error){
           console.log(error)
        }
    }

    const enviarRespuestas = async respuestas =>{
        try{
            const resultado = await clientAxios.post('/api/enviar-respuestas', respuestas)
            dispatch({
                type: ENVIAR_RESPUESTAS,
                payload: resultado.data
            })
        }catch(error){
           console.log(error)
        }
    }

    const obtenerExamenes = async id =>{
        try{
            const resultado = await clientAxios.get(`/api/examenes${id}`)
            dispatch({
                type: OBTENER_EXAMENES,
                payload: resultado.data
            })
        }catch(error){
           console.log(error)
        }
    }

    const obtenerExamen = async examen_id =>{
        try{
            const resultado = await clientAxios.get(`/api/examen/${examen_id}`)
            dispatch({
                type: OBTENER_EXAMEN,
                payload: resultado.data
            })
        }catch(error){
           console.log(error)
        }
    }

    const registrarUsuario = async nombre =>{
        try{
            await clientAxios.post('/api/usuario', nombre)
        }catch(error){
           console.log(error)
        }
    }


    return (
        <UniversidadContext.Provider 
            value={{
                universidades: state.universidades,
                cursos: state.cursos,
                preguntas: state.preguntas,
                resultados: state.resultados,
                examenes: state.examenes,
                examen: state.examen,
                obtenerUniversidades,
                obtenerCursos,
                obtenerPreguntas,
                enviarRespuestas,
                obtenerExamenes,
                obtenerExamen,
                registrarUsuario
            }}>
            {children}
        </UniversidadContext.Provider>
    )
};

export default UniversidadState
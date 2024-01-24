import {
    OBTENER_UNIVERSIDADES,
    OBTENER_CURSOS,
    OBTENER_PREGUNTAS,
    ENVIAR_RESPUESTAS,
    OBTENER_EXAMENES,
    OBTENER_EXAMEN
} from '../../types'

const UniversidadReducer = (state, action) => {
    switch (action.type) {
        case OBTENER_UNIVERSIDADES:
            return {
                ...state,
                universidades: action.payload,
            }
        case OBTENER_CURSOS:
            return {
                ...state,
                cursos: action.payload,
            }
        case OBTENER_PREGUNTAS:
            return {
                ...state,
                preguntas: action.payload,
            }
        case ENVIAR_RESPUESTAS:
            return {
                ...state,
                resultados: action.payload,
            }
        case OBTENER_EXAMENES:
            return {
                ...state,
                examenes: action.payload,
            }
        case OBTENER_EXAMEN:
            return {
                ...state,
                examen: action.payload,
            }
        default:
            return state;
    }
}

export default UniversidadReducer
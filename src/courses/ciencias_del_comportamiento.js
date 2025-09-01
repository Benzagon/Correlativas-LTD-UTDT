import React from 'react';
import { MarkerType } from 'react-flow-renderer';

export const year_labels = [{
    id: 'a1',
    type: 'year',
    data: {
        label: (
            <>1er Año</>
        ),
    },
    position: { x: 100, y: 0 },
},
{
    id: 'a2',
    type: 'year',
    data: {
        label: (
            <>2do Año</>
        ),
    },
    position: { x: 500, y: 0 },
},
{
    id: 'a3',
    type: 'year',
    data: {
        label: (
            <>3er Año</>
        ),
    },
    position: { x: 900, y: 0 },
},
{
    id: 'a4',
    type: 'year',
    data: {
        label: (
            <>4to Año</>
        ),
    },
    position: { x: 1300, y: 0 },
},
]

export const nodes = [{
    id: '1',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#FFF',
        background: '#037B1E',
        done: true,
        label: (
            <>Neurociencia y Psicología Experimental</>
        ),
    },
    position: { x: 0, y: 400 },
},
{
    id: '2',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#0D037B',
        done: true,
        label: (
            <>Matemática I</>
        ),
    },
    position: { x: 0, y: 200 },
},
{
    id: '3',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#B64A0D',
        done: true,
        label: (
            <>Economía I</>
        ),
    },
    position: { x: 0, y: 300 },
},
{
    id: '4',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#232323',
        done: true,
        label: (
            <>Historia de Occidente a partir de la Modernidad</>
        ),
    },
    position: { x: 0, y: 100 },
},
{
    id: '5',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#FFF',
        background: '#232323',
        done: true,
        label: (
            <>Comprensión de Textos y Escritura</>
        ),
    },
    position: { x: 0, y: 500 },
},
{
    id: '6',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#037B1E',
        done: true,
        label: (
            <>Estructura y Función del Sistema Nervioso</>
        ),
    },
    position: { x: 200, y: 300 },
},
{
    id: '7',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#0D037B',
        done: true,
        label: (
            <>Matemática II</>
        ),
    },
    position: { x: 200, y: 200 },
},
{
    id: '8',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#FFF',
        background: '#14532D',
        done: true,
        label: (
            <>Fundamentos de Psicología y Sociedad</>
        ),
    },
    position: { x: 200, y: 400 },
},
{
    id: '9',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a1',
        hasRight: false,
        hasLeft: false,
        foreground: '#000',
        background: '#D9B600',
        done: true,
        label: (
            <>Introducción a la Programación</>
        ),
    },
    position: { x: 200, y: 100 },
},
{
    id: '10',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#FFF',
        background: '#037B1E',
        done: true,
        label: (
            <>Técnicas de Medición en Psicología Experimental</>
        ),
    },
    position: { x: 400, y: 400 },
},
{
    id: '11',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#037B1E',
        done: true,
        label: (
            <>Neurociencia y Ética</>
        ),
    },
    position: { x: 400, y: 300 },
},
{
    id: '12',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#B64A0D',
        done: true,
        label: (
            <>Introducción a la Contabilidad y Finanzas</>
        ),
    },
    position: { x: 400, y: 100 },
},
{
    id: '13',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#0D037B',
        done: false,
        label: (
            <>Introducción a la Estadística</>
        ),
    },
    position: { x: 400, y: 200 },
},
{
    id: '14',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#FFF',
        background: '#14532D',
        done: false,
        label: (
            <>Personalidad y Diferencias Individuales</>
        ),
    },
    position: { x: 600, y: 400 },
},
{
    id: '15',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#0D037B',
        done: false,
        label: (
            <>Inferencia Estadística</>
        ),
    },
    position: { x: 600, y: 200 },
},
{
    id: '16',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#FFF',
        background: '#14532D',
        done: false,
        label: (
            <>Psicología de Masas</>
        ),
    },
    position: { x: 600, y: 300 },
},
{
    id: '17',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#7B035A',
        done: false,
        label: (
            <>Introducción al Diseño</>
        ),
    },
    position: { x: 600, y: 100 },
},
{
    id: '18',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#FFF',
        background: '#037B1E',
        done: false,
        label: (
            <>Neurociencia del Aprendizaje</>
        ),
    },
    position: { x: 800, y: 400 },
},
{
    id: '19',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#0D037B',
        done: false,
        label: (
            <>Métodos Estadísticos en Psicología Experimental</>
        ),
    },
    position: { x: 800, y: 200 },
},
{
    id: '20',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#B64A0D',
        done: false,
        label: (
            <>Teoría de las Decisiones</>
        ),
    },
    position: { x: 800, y: 300 },
},
{
    id: '21',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#7B035A',
        done: false,
        label: (
            <>Diseño Interactivo</>
        ),
    },
    position: { x: 800, y: 100 },
},
{
    id: '22',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#FFF',
        background: '#232323',
        done: false,
        label: (
            <>Expresión Oral y Escrita</>
        ),
    },
    position: { x: 800, y: 500 },
},
{
    id: '23',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#B64A0D',
        done: false,
        label: (
            <>Economía del Comportamiento</>
        ),
    },
    position: { x: 1000, y: 400 },
},
{
    id: '24',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#000',
        background: '#D9B600',
        done: false,
        label: (
            <>Inteligencia Artificial Aplicada</>
        ),
    },
    position: { x: 1000, y: 200 },
},
{
    id: '26',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#B64A0D',
        done: false,
        label: (
            <>Marketing</>
        ),
    },
    position: { x: 1000, y: 300 },
},
{
    id: '25',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a3',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#7B035A',
        done: false,
        label: (
            <>Visualización de Datos</>
        ),
    },
    position: { x: 1000, y: 100 },
},
{
    id: '27',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#FFF',
        background: '#B64A0D',
        done: false,
        label: (
            <>Comportamiento Organizacional y Gestión de Cambio</>
        ),
    },
    position: { x: 1200, y: 400 },
},
{
    id: '28',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#FFF',
        background: '#076449',
        done: false,
        label: (
            <>Datos y Neurociencia</>
        ),
    },
    position: { x: 1200, y: 300 },
},
{
    id: '29',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#504F51',
        done: false,
        label: (
            <>Curso de Campo Menor</>
        ),
    },
    position: { x: 1200, y: 200 },
},
{
    id: '30',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#504F51',
        done: false,
        label: (
            <>Curso de Campo Menor</>
        ),
    },
    position: { x: 1200, y: 100 },
},
{
    id: '31',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#FFF',
        background: '#076449',
        done: false,
        label: (
            <>Proyecto Final</>
        ),
    },
    position: { x: 1400, y: 400 },
},
{
    id: '32',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#FFF',
        background: '#076449',
        done: false,
        label: (
            <>Lenguaje y Cognición</>
        ),
    },
    position: { x: 1400, y: 300 },
},
{
    id: '33',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#504F51',
        done: false,
        label: (
            <>Curso de Campo Menor</>
        ),
    },
    position: { x: 1400, y: 200 },
},
{
    id: '34',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#fff',
        background: '#504F51',
        done: false,
        label: (
            <>Curso de Campo Menor</>
        ),
    },
    position: { x: 1400, y: 100 },
}]

export const edges = [
    { id: '2-7', source: '2', target: '7', markerEnd: { type: MarkerType.ArrowClosed, }}, // Mate 1 - Mate 2
    { id: '7-13', source: '7', target: '13', markerEnd: { type: MarkerType.ArrowClosed, }}, // Mate 2 - Intro. Estadistica
    { id: '13-15', source: '13', target: '15', markerEnd: { type: MarkerType.ArrowClosed, }}, // Intro. Estadistica - Inferencia
    { id: '1-10', source: '1', target: '10', markerEnd: { type: MarkerType.ArrowClosed, }}, // Neuro - Tecnicas
    { id: '1-11', source: '1', target: '11', markerEnd: { type: MarkerType.ArrowClosed, }}, // Neuro - Neuro y Etica
    { id: '1-18', source: '1', target: '18', markerEnd: { type: MarkerType.ArrowClosed, }}, // Neuro - Neuro del Aprendizaje
    { id: '8-14', source: '8', target: '14', markerEnd: { type: MarkerType.ArrowClosed, }}, // Fundamentos - Personalidad
    { id: '8-16', source: '8', target: '16', markerEnd: { type: MarkerType.ArrowClosed, }}, // Fundamentos - Personalidad
    { id: '9-19', source: '9', target: '19', markerEnd: { type: MarkerType.ArrowClosed, }}, // Programacion - Métodos
    { id: '15-19', source: '15', target: '19', markerEnd: { type: MarkerType.ArrowClosed, }}, // Inferencia - Métodos
    { id: '1-19', source: '1', target: '19', markerEnd: { type: MarkerType.ArrowClosed, }}, // Neuro - Métodos
    { id: '3-20', source: '3', target: '20', markerEnd: { type: MarkerType.ArrowClosed, }}, // Eco 1 - Teo. Decisiones
    { id: '13-20', source: '13', target: '20', markerEnd: { type: MarkerType.ArrowClosed, }}, // Intro. Estadistica - Teo. Decisiones
    { id: '9-25', source: '9', target: '25', markerEnd: { type: MarkerType.ArrowClosed, }}, // Programacion - Visualizacion
    { id: '17-25', source: '17', target: '25', markerEnd: { type: MarkerType.ArrowClosed, }}, // Diseño - Visualizacion
    { id: '17-21', source: '17', target: '21', markerEnd: { type: MarkerType.ArrowClosed, }}, // Diseño - Diseño Interactivo
    { id: '3-23', source: '3', target: '23', markerEnd: { type: MarkerType.ArrowClosed, }}, // Eco 1 - Eco Comportamiento
    { id: '9-24', source: '9', target: '24', markerEnd: { type: MarkerType.ArrowClosed, }}, // Programacion - IA Aplicada
    { id: '15-24', source: '15', target: '24', markerEnd: { type: MarkerType.ArrowClosed, }}, // Inferencia - IA Aplicada
    { id: '9-28', source: '9', target: '28', markerEnd: { type: MarkerType.ArrowClosed, }}, // Programacion - Datos
    { id: '15-28', source: '15', target: '28', markerEnd: { type: MarkerType.ArrowClosed, }}, // Inferencia - Datos
    { id: '10-28', source: '10', target: '28', markerEnd: { type: MarkerType.ArrowClosed, }}, // Tecnicas Medicion - Datos
    { id: '9-32', source: '9', target: '32', markerEnd: { type: MarkerType.ArrowClosed, }}, // Programacion - Lenguaje y Cogni
    { id: '15-32', source: '15', target: '32', markerEnd: { type: MarkerType.ArrowClosed, }}, // Inferencia - Lenguaje y Cogni
    { id: '1-32', source: '1', target: '32', markerEnd: { type: MarkerType.ArrowClosed, }}, // Neuro - Lenguaje y Cogni
    { id: '10-31', source: '10', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }}, // Medicion - Proyecto
    { id: '19-31', source: '19', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }}, // Métodos - Proyecto
]

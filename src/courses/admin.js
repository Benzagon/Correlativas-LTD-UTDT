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
        background: '#B64A0D',
        done: true,
        label: (
            <>Administración I</>
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
    position: { x: 0, y: 300 },
},
{
    id: '3',
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
            <>Economía I</>
        ),
    },
    position: { x: 0, y: 100 },
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
        background: '#B64A0D',
        done: true,
        label: (
            <>Introducción al Derecho</>
        ),
    },
    position: { x: 0, y: 200 },
},
{
    id: '5',
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
            <>Economía II</>
        ),
    },
    position: { x: 200, y: 100 },
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
        background: '#0D037B',
        done: true,
        label: (
            <>Matemática II</>
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
        background: '#B64A0D',
        done: true,
        label: (
            <>Contabilidad Básica</>
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
        foreground: '#fff',
        background: '#232323',
        done: true,
        label: (
            <>Historia de Occidente a partir de la Modernidad</>
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
        foreground: '#fff',
        background: '#232323',
        done: true,
        label: (
            <>Comprensión de Textos y Escritura</>
        ),
    },
    position: { x: 200, y: 500 },
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
        background: '#B64A0D',
        done: true,
        label: (
            <>Administración II</>
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
        background: '#B64A0D',
        done: true,
        label: (
            <>Información y Contabilidad Gerencial I</>
        ),
    },
    position: { x: 400, y: 200 },
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
        background: '#0D037B',
        done: true,
        label: (
            <>Introducción a la Estadística</>
        ),
    },
    position: { x: 400, y: 300 },
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
        background: '#B64A0D',
        done: false,
        label: (
            <>Microeconomía</>
        ),
    },
    position: { x: 400, y: 100 },
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
        background: '#B64A0D',
        done: false,
        label: (
            <>Instituciones Políticas y de Gobierno</>
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
            <>Análisis Estadístico</>
        ),
    },
    position: { x: 600, y: 300 },
},
{
    id: '16',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a2',
        hasRight: false,
        hasLeft: false,
        foreground: '#000',
        background: '#D9B600',
        done: false,
        label: (
            <>Historia Económica Internacional</>
        ),
    },
    position: { x: 600, y: 100 },
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
        background: '#B64A0D',
        done: false,
        label: (
            <>Información y Contabilidad Gerencial II</>
        ),
    },
    position: { x: 600, y: 200 },
},
{
    id: '18',
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
            <>Macroeconomía</>
        ),
    },
    position: { x: 800, y: 100 },
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
            <>Métodos Analíticos aplicados a los Negocios</>
        ),
    },
    position: { x: 800, y: 300 },
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
            <>Dirección de Operaciones y Tecnología I</>
        ),
    },
    position: { x: 800, y: 200 },
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
        background: '#B64A0D',
        done: false,
        label: (
            <>Equipos, Personas y Liderazgo</>
        ),
    },
    position: { x: 800, y: 400 },
},
{
    id: '22',
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
            <>Riesgo, Incertidumbre y Finanzas</>
        ),
    },
    position: { x: 1000, y: 100 },
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
            <>Dirección Estratégica</>
        ),
    },
    position: { x: 1000, y: 300 },
},
{
    id: '24',
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
    position: { x: 1000, y: 200 },
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
        background: '#B64A0D',
        done: false,
        label: (
            <>Aspectos Legales y Éticos de las Decisiones Empresariales</>
        ),
    },
    position: { x: 1000, y: 400 },
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
        background: '#232323',
        done: false,
        label: (
            <>Expresión Oral y Escrita</>
        ),
    },
    position: { x: 1000, y: 500 },
},
{
    id: '27',
    type: 'course',
    targetPosition: 'right',
    data: {
        year: 'a4',
        hasRight: false,
        hasLeft: false,
        foreground: '#000',
        background: '#D9B600',
        done: false,
        label: (
            <>Negocios y Estrategia Digital</>
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
        foreground: '#fff',
        background: '#B64A0D',
        done: false,
        label: (
            <>Finanzas de la Empresa</>
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
        background: '#B64A0D',
        done: false,
        label: (
            <>Marketing Digital</>
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
        foreground: '#000',
        background: '#D9B600',
        done: false,
        label: (
            <>Desarrollo de Nuevos Negocios</>
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
        foreground: '#fff',
        background: '#037B1E',
        done: false,
        label: (
            <>Sustentabilidad y Negocios</>
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
    { id: '2-6', source: '2', target: '6', markerEnd: { type: MarkerType.ArrowClosed, }}, // Mate 1 - Mate 2
    { id: '6-12', source: '6', target: '12', markerEnd: { type: MarkerType.ArrowClosed, }}, // Mate 2 - Intro. Estadistica
    { id: '12-15', source: '12', target: '15', markerEnd: { type: MarkerType.ArrowClosed, }}, // Intro. Estadistica - Analisis
    { id: '1-10', source: '1', target: '10', markerEnd: { type: MarkerType.ArrowClosed, }}, // Admin 1 - Admin 2
    { id: '3-13', source: '3', target: '13', markerEnd: { type: MarkerType.ArrowClosed, }}, // Eco 1 - Micro
    { id: '7-11', source: '7', target: '11', markerEnd: { type: MarkerType.ArrowClosed, }}, // Conta B - ICG 1
    { id: '11-17', source: '11', target: '17', markerEnd: { type: MarkerType.ArrowClosed, }}, // ICG 1 - ICG 2
    { id: '3-16', source: '3', target: '16', markerEnd: { type: MarkerType.ArrowClosed, }}, // Eco 1 - Hist. Eco
    { id: '5-16', source: '5', target: '16', markerEnd: { type: MarkerType.ArrowClosed, }}, // Eco 2 - Hist. Eco
    { id: '5-18', source: '5', target: '18', markerEnd: { type: MarkerType.ArrowClosed, }}, // Eco 2 - Macro
    { id: '13-22', source: '13', target: '22', markerEnd: { type: MarkerType.ArrowClosed, }}, // Micro - RIF
    { id: '13-23', source: '13', target: '23', markerEnd: { type: MarkerType.ArrowClosed, }}, // Micro - Dir. Est
    { id: '10-23', source: '10', target: '23', markerEnd: { type: MarkerType.ArrowClosed, }}, // Adm 2 - Dir. Est
    { id: '4-25', source: '4', target: '25', markerEnd: { type: MarkerType.ArrowClosed, }}, // Derecho - Aspectos
    { id: '22-28', source: '22', target: '28', markerEnd: { type: MarkerType.ArrowClosed, }}, // RIF - FdLE
    { id: '17-28', source: '17', target: '28', markerEnd: { type: MarkerType.ArrowClosed, }}, // ICG II - FdLE
    { id: '13-27', source: '13', target: '27', markerEnd: { type: MarkerType.ArrowClosed, }}, // Micro - Estrategia Digital
    { id: '24-29', source: '24', target: '29', markerEnd: { type: MarkerType.ArrowClosed, }}, // Marketing - Mark. Digital
    { id: '17-31', source: '17', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }}, // ICG II - DNN
    { id: '22-31', source: '22', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }}, // RIF - DNN
    { id: '1-31', source: '1', target: '31', markerEnd: { type: MarkerType.ArrowClosed, }}, // ADM 1 - DNN
    { id: '6-13', source: '6', target: '13', markerEnd: { type: MarkerType.ArrowClosed, }, animated: true, }, // Mate 2 - Micro
    { id: '6-18', source: '6', target: '18', markerEnd: { type: MarkerType.ArrowClosed, }, animated: true, }, // Mate 2 - Macro
]

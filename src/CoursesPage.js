import './App.css';
import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  addEdge,
  Controls,
  ControlButton,
  Background,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer';
import CourseNode from './CourseNode.js';
import YearNode from './YearNode.js';
import { toPng } from 'html-to-image';
import {
    // path,
    filterNodesByID,
    filterNodesByYear,
    course_by_id,
    // getFullEdges,
    generateCorrAmm,
    getNodeYear,
    enrichNodes
  } from './lib/utlis.js';
import AbsoluteButtons from './AbsoluteButtons.js';

  const nodeTypes = { course: CourseNode, year: YearNode };

  const onInit = (reactFlowInstance, setReactFlowInstance) => {
    setReactFlowInstance(reactFlowInstance);
    document.querySelector('.reactFlowBackgroundPattern').onclick = () => {
      console.log("background clicked");
    }
  };
  
  const screenshot = () => {
    toPng(document.querySelector('.react-flow'), {
      filter: (node) => {
        if (
          node?.classList?.contains('react-flow__minimap') ||
          node?.classList?.contains('react-flow__controls')
        ) {
          return false;
        }
        return true;
      },
    }).then((dataUrl) => {
      const a = document.createElement('a');
      a.setAttribute('download', 'Correlativas_LTD_UTDT.png');
      a.setAttribute('href', dataUrl);
      a.click();
    });
  };

  function CoursesPage({ initialNodes, initialEdges, years, url, title }) {
    const [nodes, setNodes, onNodesChange] = useNodesState(years.concat(enrichNodes(initialNodes, initialEdges)));
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
    // const [pathview, setPathview] = useState(true);
    const [label, setLabel] = useState("Clickea en una materia para ver todas sus correlativas");
    const [preLabel, setPreLabel] = useState("");
    const [clickedCourse, setClickedCourse] = useState(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
  
    const corrAmm = generateCorrAmm(initialNodes, initialEdges)
  
    const updateNodes = (id, reducedView) => {
    //   setPathview(reducedView);
      if (reducedView) {
        const visibleNodes = filterNodesByID(id, initialNodes, initialEdges);
        setNodes(enrichNodes(visibleNodes, initialEdges));
      } else {
        setNodes(years.concat(enrichNodes(initialNodes, initialEdges)));
    }
      setEdges(initialEdges);
    };
  
    const reset = () => {
      updateNodes(null, false);
      setLabel("Clickea en una materia para ver todas sus correlativas");
    };
  
    const nodeClick = (event, element) => {
      if (element.type === "course") {
        if (clickedCourse !== element.id) {
          setClickedCourse(element.id);
          updateNodes(element.id, true);
          setLabel("Clickea en cualquier materia para resetear vista");
        } else {
          reset();
          setClickedCourse(null);
        }
      } else if (element.type === "year") {
        setNodes(filterNodesByYear(element.id, initialNodes).concat(getNodeYear(years, element.id)));
        setEdges(initialEdges);
        setLabel("Clickea en cualquier materia para resetear vista");
      }
    };
  
    const mapClick = (e) => {
      if (e.target.className === "react-flow__pane react-flow__container") {
        reset();
      }
    };
  
    const nodeMouseEnter = (event, element) => {
      setPreLabel(label);
      if (element.id !== clickedCourse) {
        const course = course_by_id(element.id, initialNodes);
        const count = corrAmm[element.id];
        if (count > 1) setLabel(`Clickea en ${course.data.label.props.children} para ver sus ${count} correlativas`);
        else if (count === 1) setLabel(`Clickea en ${course.data.label.props.children} para ver su correlativa`);
        else setLabel(`${course.data.label.props.children} no tiene correlativas`);
      } else {
        const course = course_by_id(element.id, initialNodes);
        const count = corrAmm[element.id];
        if (count > 1) setLabel(`${course.data.label.props.children} tiene ${count} correlativas`);
        else if (count === 1) setLabel(`${course.data.label.props.children} tiene 1 correlativa`);
        else setLabel("Clickea en una materia para ver todas sus correlativas");
      }
    };
  
    const nodeMouseLeave = () => {
      setLabel("Clickea en una materia para ver todas sus correlativas");
    };
  
    useEffect(() => {
      if (reactFlowInstance) {
        reactFlowInstance.fitView({ duration: 800, padding: 0.1, center: true });
      }
    }, [nodes, reactFlowInstance]);

    useEffect(() => {
      document.title = title;
    }, [title]);
  
    return (
      <div className="App">
        {/* ... UI overlays and GitHub link (unchanged) ... */}
        <AbsoluteButtons label={label} url={url}/>
        <a
          href='/'
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            backgroundColor: 'transparent',
            color: '#aaa',
            padding: '10px 16px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            zIndex: 9999
          }}
        >
          Volver al inicio
        </a>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodesDraggable={true}
          nodesConnectable={false}
          onConnect={onConnect}
          onInit={(instance) => onInit(instance, setReactFlowInstance)}
          fitView
          attributionPosition="top-right"
          nodeTypes={nodeTypes}
          onClick={mapClick}
          onNodeClick={nodeClick}
          onNodeMouseEnter={nodeMouseEnter}
          onNodeMouseLeave={nodeMouseLeave}
        >
          <Controls
            style={{ color: '#4A4A4A', backgroundColor: '#181818', borderRadius: '2px', padding: '5px', zIndex: 100 }}
            showInteractive={false}
          >
            <ControlButton
              onClick={reset}
              onMouseEnter={() => {
                setPreLabel(label);
                setLabel("Resetear vista")
              }}
              onMouseLeave={() => setLabel(preLabel)}
            >
              <>⌘</>
            </ControlButton>
            <ControlButton
              onClick={screenshot}
              style={{ transform: 'rotate(180deg)' }}
              onMouseEnter={() => {
                setPreLabel(label);
                setLabel("Descargar imagen")
              }}
              onMouseLeave={() => setLabel(preLabel)}
            >
              <>⏏︎</>
            </ControlButton>
          </Controls>
          <Background color="#aaa" gap={16} className="reactFlowBackgroundPattern" />
        </ReactFlow>
      </div>
    );
  }
  
  export default CoursesPage;
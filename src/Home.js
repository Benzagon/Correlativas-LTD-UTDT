import React from 'react'
import "./Home.css"
import AbsoluteButtons from './AbsoluteButtons'
import CourseNode from './CourseNode'

const Home = () => {
  return (
    <div className='home'>
        <div className='titulo-carreras-wrapper'>
            <h1>Accedé a tu plan de estudios</h1>
            <div className='carreras-wrapper'>
                <a href='/tecnologia-digital'>
                    <CourseNode data={{
                        label: "Licenciatura en Tecnología Digital",
                        foreground: "#000",
                        background: "#D9B600",
                    }
                } /></a>
                <a href='/ciencias-del-comportamiento'>
                    <CourseNode data={{
                        label: "Licenciatura en Ciencias del Comportamiento",
                        foreground: "#FFF",
                        background: "#037B1E",
                    }
                } /></a>
            </div>
        </div>
        <AbsoluteButtons label="" url={"https://www.utdt.edu/"}/>
    </div>
  )
}

export default Home
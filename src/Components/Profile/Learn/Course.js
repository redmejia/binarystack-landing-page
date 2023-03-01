import {  useLocation } from "react-router-dom";
import './learing-styles.css';
import Card from "../../Card/Card";
import { useState } from "react";
import { bsLearning } from "../bslearnig";


const Course = () => {
    let { state } = useLocation()


    const [courseOpt, setCourseOpt] = useState({})
    const [isClicked, setClicked] = useState(false)

    const techs = state.map(tech => {
        return (
            <Card
                body={
                    <div className="row text-center">
                        <div className="col">
                            <button className="btn continue-btn"
                                onClick={() => {
                                    setClicked(true)
                                    setCourseOpt({ courseId: tech.courseId, lang: tech.optOne })
                                }}
                            > {tech.optOne}</button>
                        </div>
                        <div className="col">
                            <button className="btn continue-btn"
                                onClick={() => {
                                    setClicked(true)
                                    setCourseOpt({ courseId: tech.courseId, lang: tech.optTwo })
                                }}
                            >{tech.optTwo}</button>
                        </div>
                        <div className="col">
                            <button className="btn continue-btn"
                                onClick={() => {
                                    setClicked(true)
                                    setCourseOpt({ courseId: tech.courseId, lang: tech.optThree })
                                }}
                            >{tech.optThree}</button>
                        </div>
                        <div className="col">
                            <button className="btn continue-btn"
                                onClick={() => {
                                    setClicked(true)
                                    setCourseOpt({ courseId: tech.courseId, lang: tech.optFour })
                                }}
                            >{tech.optFour}</button>
                        </div>
                    </div>
                }
                styles={{ backgroundColor: '#F3F4F6' }}
            />
        )
    })


    const course = bsLearning.course.filter(c => c.courseId === courseOpt.courseId && c.lang === courseOpt.lang)

    return (
        <>
            <div className="container mb-5">
                <div className="my-5">{techs}</div>

                {
                    isClicked ?
                        <div className="container bg-light p-3 ">
                            {

                                course.map((course) => {
                                    return (
                                        <div className="container">
                                            <h1 style={{ color: '#35b6d6', textTransform : 'capitalize' }}>{course.topic}</h1>
                                            <p style={{ color: '#4E6D98', fontSize : 20 }}>{course.content}</p>
                                        </div>

                                    )
                                })
                            }
                        </div>
                        :
                        <div className="alert text-center" role="alert" style={{
                            background: 'linear-gradient(to right, #de7459, #e44d27)',
                            borderRadius: 15,
                            borderBlockColor: 'red',
                            color: '#ffff',
                            fontWeight: 'bold',
                        }}>
                            Start Learning, Select Any Language
                        </div>
                }
            </div>
        </>
    )
}

export default Course;
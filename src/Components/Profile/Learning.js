import { useLocation } from "react-router-dom";
// import { bsLearning } from "./bslearnig";
import './learing-styles.css';
import Card from "../Card/Card";


const Learning = () => {
    let { state } = useLocation()
    console.log(state);

    const techs = state.map(tech => {
        return (
            <Card
                body={
                    <div className="row text-center">
                        <div className="col">
                            <button className="btn continue-btn"> {tech.optOne}</button>
                        </div>
                        <div className="col">
                            <button className="btn continue-btn " >{tech.optTwo}</button>
                        </div>
                        <div className="col">
                            <button className="btn continue-btn" >{tech.optThree}</button>
                        </div>
                        <div className="col">
                            <button className="btn continue-btn" >{tech.optFour}</button>
                        </div>
                    </div>
                }
                styles={{ backgroundColor: '#F3F4F6' }}
            />
        )
    })

    return (
        <>
            <div className="container">
                <div className="my-5">{techs}</div>
            </div>
        </>
    )
}

export default Learning;
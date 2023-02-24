// import { useLocation } from "react-router-dom";
import Card from "../Card/Card";
import LeftNav from "./LeftNav";
import { useSelector } from "react-redux";

const Profile = () => {
    
    const { newStudent } = useSelector(state => state.join || {})


    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-sm-3">
                        <LeftNav />
                    </div>
                    <div className="col">
                        <div className="text-center">
                            <h1 className="mt-2" style={{ fontWeight: '300' }}>Welcome</h1>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col">
                                <Card
                                    title={<h3 className="text-center">{newStudent.plan.planType}</h3>}
                                    styles={{
                                        heigth: '100%',

                                        border: '2px solid #306CC7',


                                        borderBottomStyle: 'solid',
                                        borderBottomWidth: 'medium',

                                        borderTopRightRadius: '15px',
                                        borderTopLeftRadius: "15px",
                                        borderBottomRightRadius: '15px',
                                        borderBottomLeftRadius: "15px",
                                    }}
                                    body={
                                        <div>
                                            <button
                                                className="proceed-btn btn-lg btn-block"
                                                type="submit"
                                            >
                                                Continue Learning
                                            </button>
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
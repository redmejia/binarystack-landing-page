import { useSelector } from "react-redux";
import Card from "../Card/Card";
import LeftNav from "./LeftNav";
import { useNavigate } from "react-router-dom";


const BinaryStack = () => {



    // const { newStudent } = useSelector(state => state.join)
    const { plan } = useSelector(state => state.course || [])

    const bsCourses = plan.course.map((course, i) => {

        // let techList;


        // if (BinaryStackCourse[i].planId === course.planId && course.planType === BinaryStackCourse[i].planType) {
        //     techList = (
        //         <>
        //             <li>{BinaryStackCourse[i].technologies.optOne}</li>
        //             <li>{BinaryStackCourse[i].technologies.optTwo}</li>
        //             <li>{BinaryStackCourse[i].technologies.optThree}</li>
        //             <li>{BinaryStackCourse[i].technologies.optFour}</li>
        //         </>
        //     )
        // }

        return (
            <>
                <div className='col-12 col-md-4 col-lg-4 col-xl-6 my-2' key={course.planId}>
                    <Card
                        title={
                            <div
                                style={
                                    {
                                        background: 'linear-gradient(to right, #a8e7f7, #469bb1)',
                                        borderRadius: 15,
                                        color: '#ffff'
                                    }
                                }
                            >
                                <h1 className="p-2 text-center">{course.planType}</h1>
                            </div>
                        }
                        body={
                            <div className="col">
                                <p>{course.description}</p>
                                <div className="text-center">
                                    <h3 style={{ color: '#35b6d6' }}>{course.planPay}</h3>
                                    <h1 style={{ color: '#4E6D98' }}>{'$' + course.planPrice}</h1>
                                </div>
                                <ul>
                                    {/* {techList} */}
                                    {/* <li>{BinaryStackCourse[i].technologies.optOne}</li>
                                    <li>{BinaryStackCourse[i].technologies.optTwo}</li>
                                    <li>{BinaryStackCourse[i].technologies.optThree}</li>
                                    <li>{BinaryStackCourse[i].technologies.optFour}</li> */}
                                </ul>
                                <button
                                    className="signin-btn-submit btn-lg btn-block "
                                >
                                    owned
                                </button>
                            </div>
                        }
                        styles={course.styles}
                    />
                </div>
            </>
        )
    })

   

    const navigate = useNavigate()

    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-sm-3">
                        <LeftNav />
                    </div>
                    <div className="col">
                        <h1 className="mt-2 text-center" style={{ fontWeight: '300' }}>Bs Courses</h1>
                        <hr></hr>
                        {
                            plan.course.length === 3 ?

                                <div className="alert text-center" role="alert" style={{
                                    background: 'linear-gradient(to right, #de7459, #e44d27)',
                                    borderRadius: 15,
                                    borderBlockColor : 'red',
                                    color: '#ffff',
                                    fontWeight :'bold',
                                }}>
                                    You own all Binary Stack Courses!
                                </div>
                                : <></>
                        }
                        <div className="row">
                            {bsCourses}
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-4 col-lg-4 col-xl-6 my-2"></div>
                            <div className='col-12 col-md-4 col-lg-4 col-xl-6 my-2'>
                                {
                                    plan.course.length === 3 ? <></> :
                                        <button
                                            className="signin-btn-submit btn-lg btn-block"
                                            onClick={() => {
                                                navigate("/new/order", { state: { plan } })
                                            }}
                                        >
                                            add  course
                                        </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BinaryStack;

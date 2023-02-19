import { useSelector } from "react-redux";
import Card from "../Card/Card";
import LeftNav from "./LeftNav";
import { BinaryStackCourse } from "../../BsCourses/bscourses";


const BinaryStack = () => {
    const { newStudent } = useSelector(state => state.join)

    const bsCourses = BinaryStackCourse.map(course => {
        return (
            <div className='col-12 col-md-4 col-lg-4 col-xl-6 my-2' key={course.planId}>
                <Card
                    title={
                        <div
                            style={course.topTitleStyle}
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
                                <li>{course.technologies.optOne}</li>
                                <li>{course.technologies.optTwo}</li>
                                <li>{course.technologies.optThree}</li>
                                <li>{course.technologies.optFour}</li>
                            </ul>

                            <div>
                                {
                                    course.planId === newStudent.plan.planId ?
                                        <button
                                            className="signin-btn-submit btn-lg btn-block "
                                            onClick={() => { alert("You already own this course") }}
                                        >
                                            Owned
                                        </button> :
                                        <button
                                            className="signin-btn-submit btn-lg btn-block "
                                        // onClick={() => checkout({ plan: { planId: 0, planPay: 'Monthly', planType: 'Basics', planPrice: 15 } })}
                                        >
                                            start Now
                                        </button>
                                }
                            </div>
                        </div>
                    }
                    styles={course.styles}
                />
            </div>
        )
    })
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
                        <div className="row">
                            {bsCourses}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BinaryStack;

import { BinaryStackCourse } from '../../BsCourses/bscourses';
import Card from '../Card/Card';
import './join-style.css';
import { useNavigate } from "react-router-dom";

const JoinBs = () => {

    const bscourses = BinaryStackCourse.map(course => (
        <div className='col-12 col-md-4 col-lg-4 col-xl-4 my-2'>
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
                            <button
                                className="signin-btn-submit btn-lg btn-block "
                                onClick={() =>
                                    checkout({
                                        plan:
                                        {
                                            planId: course.planId,
                                            planPay: course.planPay,
                                            planType: course.planType,
                                            planPrice: course.planPrice,
                                        }
                                    })
                                }
                            >
                                start Now
                            </button>
                        </div>
                    </div>
                }
                styles={course.styles}
            />
        </div>

    ))

    let navigate = useNavigate()

    const checkout = (plan) => {
        navigate('/checkout', { state: plan })
    }
    return (
        <div className="col my-5">
            <div className="col text-center">
                <h1 className='join-text-xlg'>Start Your Full Stack Developemt Career With <span className='join-text-xlg-me'> Binary Stack </span></h1>
            </div>
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    {bscourses}
                </div>

            </div>
        </div>
    )
}
export default JoinBs;
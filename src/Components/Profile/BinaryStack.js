import { useSelector } from "react-redux";
import Card from "../Card/Card";
import LeftNav from "./LeftNav";

// BinaryStackCourse or plan
const BinaryStackCourse = [
    {
        planId: 0,
        planPay: 'Monthly',
        planType: 'Basics',
        planPrice: 15,
        topTitleStyle: {
            background: 'linear-gradient(to right, #a8e7f7, #469bb1)',
            borderRadius: 15,
            color: '#ffff'
        },
        description: "Start from basics. You have four programming languages options.",
        planStyle: {
            planPayColor: '#35b6d6',
            planPayTotal: '#4E6D98'
        },
        technologies: {
            optOne: 'Javascript',
            optTwo: 'Python',
            optThree: 'Go',
            optFour: 'Rust',
        },
        styles: {
            heigth: '100%',

            border: '2px solid #6BAD69',


            borderBottomStyle: 'solid',
            borderBottomWidth: 'medium',

            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: "15px",
        }

    },
    {
        planId: 1,
        planPay: 'Yearly',
        planType: 'Front-End',
        planPrice: 100,
        topTitleStyle: {
            background: 'linear-gradient(to right, #ffef81, #c6b645)',
            borderRadius: 15,
            color: '#ffff'
        },
        description: "You already know programing basics this is the next step.",
        planStyle: {
            planPayColor: '#35b6d6',
            planPayTotal: '#4E6D98'
        },
        technologies: {
            optOne: 'HTML / CSS',
            optTwo: 'Bootstrap',
            optThree: 'Reactjs',
            optFour: 'React Router',
        },
        styles: {
            heigth: '100px',

            border: '2px solid #E9C819',

            borderBottomStyle: 'solid',
            borderBottomWidth: 'medium',

            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: "15px",
        }

    },
    {
        planId: 2,
        planPay: 'Yearly',
        planType: 'Back-End',
        planPrice: 100,
        topTitleStyle: {
            background: 'linear-gradient(to right, #de7459, #e44d27)',
            borderRadius: 15,
            color: '#ffff'
        },
        description: "Create the logic that is behind of your front end.",
        planStyle: {
            planPayColor: '#35b6d6',
            planPayTotal: '#4E6D98'
        },
        technologies: {
            optOne: 'Node.js',
            optTwo: 'Go',
            optThree: 'Python',
            optFour: 'Postgres',
        },
        styles: {
            heigth: '100%',

            border: '2px solid #ED2222',

            borderBottomStyle: 'solid',
            borderBottomWidth: 'medium',

            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: "15px",
        }

    }
]




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
                                <h1 style={{ color: '#4E6D98' }}>{'$'+course.planPrice}</h1>
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
                                            onClick={() => {alert("You already own this course")}}
                                        >
                                            Own
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

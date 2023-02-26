import { useLocation, useNavigate } from "react-router-dom"
import LeftNav from "./LeftNav"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { addAndPurchaseCourse } from "../../redux/course/courseSlice"
import Card from "../Card/Card"
import { BinaryStackCourse } from "../../BsCourses/bscourses"

const NewOrder = () => {
    const navigate = useNavigate()
    const { state } = useLocation()

    const { newStudent } = useSelector(state => state.join || {}) // join slice will change newStudent object
    const dispatch = useDispatch()

    const [student, setStudentInfo] = useState(newStudent)
    const [isSelected, setSelected] = useState(false)
    const [course, setCourse] = useState({})


    let lastFourNum;
    if (student.cardNumber) {
        const lastFour = /\d{12}/i;

        lastFourNum = student.cardNumber.replace(lastFour, "****-****-****-")
    }



    const owned = state.plan.course.map(own => {
        return (
            <div className="col-12 col-md-4 col-lg-4 col-xl-6 my-2" key={own.planId}>
                <Card
                    title={
                        <div>
                            <h3 className="text-center">Plan Type <span style={{ fontWeight: 'bold', fontSize : 40 }}>{own.planType}</span></h3>
                        </div>
                    }
                    body={
                        <div>
                            <h3 className="text-center">Price: ${own.planPrice}</h3>
                            <h2 className="text-center"> <span style={{ fontWeight: 'bold', fontSize: 60 }}>OWNED</span></h2>
                        </div>
                    }

                    styles={{
                        background: 'linear-gradient(to right, #de7459, #e44d27)',
                        borderRadius: 15,
                        color: '#ffff'
                    }}
                />
            </div>
        )
    })

    const bsCourses = BinaryStackCourse.map(course => (
        <div className='col-12 col-md-4 col-lg-4 col-xl-6 my-4' key={course.planId}>

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
                            <li>{course.technologies[0].optOne}</li>
                            <li>{course.technologies[0].optTwo}</li>
                            <li>{course.technologies[0].optThree}</li>
                            <li>{course.technologies[0].optFour}</li>
                        </ul>
                        <div>
                            <button
                                className="signin-btn-submit btn-lg btn-block "
                                onClick={() => {
                                    setCourse({
                                        owned: true,
                                        courseTech: course.technologies,
                                        planId: course.planId,
                                        planPay: course.planPay,
                                        planType: course.planType,
                                        planPrice: course.planPrice,
                                    })
                                    setSelected(true)

                                }}
                            >
                                select
                            </button>
                        </div>
                    </div>
                }
                styles={course.styles}
            />
        </div>
    ))

    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-sm-3">
                        <LeftNav />
                    </div>
                    <div className="col" >
                        <div className="text-center">
                            <h1 className="mt-2" style={{ fontWeight: '300' }}>New Order</h1>
                        </div>
                        <hr></hr>
                        <div className="row">
                            {owned}
                        </div>
                        <hr></hr>
                        <div className="row">
                            {isSelected ? <></> : bsCourses}
                        </div>
                        {
                            isSelected ?
                                <div className="mt-3 mb-3 p-3 container bg-light">
                                    <div className='col d-flex  justify-content-center'>
                                        <div className="col-md-4 order-md-2 mb-4">
                                            <ul className="list-group mb-3">
                                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                                    <div>
                                                        <h6 className="my-0">Plan </h6>
                                                        <small className="text-muted font-weight-bold">{course.planPay}</small>
                                                    </div>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                                    <div>
                                                        <h6 className="my-0">Plan Type</h6>
                                                        <small className="text-muted font-weight-bold">{course.planType}</small>
                                                    </div>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between bg-light">
                                                    <div className="text-success">
                                                        <h6 className="my-0 font-weight-bold">Plan Price</h6>
                                                    </div>
                                                    <span className="text-success">${course.planPrice}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between">
                                                    <span className='font-weight-bold'>Total</span>
                                                    <strong>${course.planPrice}</strong>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <form>
                                        <h4 className="mt-4">Payment</h4>
                                        <div className="form-row">
                                            <div className="col-md-6 mb-3">
                                                <label >Email</label>
                                                <input type="email" className="form-lines form-control" name='email' defaultValue={student.email} onChange={e => setStudentInfo({ ...student, [e.target.name]: e.target.value })} aria-describedby="emailHelp" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label >Name on card</label>
                                                <input type="text" className="form-lines form-control" id="cc-name" placeholder="" name='cardName' defaultValue={student.cardName} onChange={e => setStudentInfo({ ...student, [e.target.name]: e.target.value })} required />
                                                <small className="text-muted">Full name as displayed on card</small>
                                                <div className="invalid-feedback">
                                                    Name on card is required
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label >Credit card number</label>
                                                <input type="text" className="form-lines form-control" id="cc-number" placeholder="" name='cardNumber' value={lastFourNum} onChange={e => setStudentInfo({ ...student, [e.target.name]: e.target.value })} required />
                                                <div className="invalid-feedback">
                                                    Credit card number is required
                                                </div>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label >CVV</label>
                                                <input type="text" className="form-lines form-control" id="cc-cvv" placeholder="" name='cardCvv' defaultValue={student.cardCvv} onChange={e => setStudentInfo({ ...student, [e.target.name]: e.target.value })} required />
                                                <div className="invalid-feedback">
                                                    Security code required
                                                </div>
                                            </div>

                                        </div>
                                        <button
                                            className="proceed-btn btn-lg btn-block"
                                            type="submit"
                                            onClick={() => {
                                                dispatch(addAndPurchaseCourse(course)) // course
                                                navigate("/profile")
                                            }}
                                        >
                                            Place order
                                        </button>
                                    </form>
                                </div>

                                : null

                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default NewOrder
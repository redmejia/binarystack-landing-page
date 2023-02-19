import { useLocation, useNavigate } from 'react-router-dom';
import './checkout-style.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addnewStudent, changeAuthNewStudent } from '../../redux/auth/join/joinSlice';
import { signinCredential } from '../../redux/auth/signin/signinSlice';

const Checkout = () => {

    let { state } = useLocation()

    let navigate = useNavigate()

    const [student, setStudentInfo] = useState({})

    const dispatch = useDispatch()
    
    let lastFourNum;
    if (student.cardNumber) {
        const lastFour = /\d{12}/i;

        lastFourNum = student.cardNumber.replace(lastFour, "****-****-****-")
    }


    return (
        <div className="mt-3 mb-3 p-3 container bg-light">
            <h1>Your Future Start Here</h1>
            <div className='col d-flex  justify-content-center'>
                <div className="col-md-4 order-md-2 mb-4">
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Plan </h6>
                                <small className="text-muted font-weight-bold">{state.plan.planPay}</small>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Plan Type</h6>
                                <small className="text-muted font-weight-bold">{state.plan.planType}</small>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0 font-weight-bold">Plan Price</h6>
                            </div>
                            <span className="text-success">${state.plan.planPrice}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className='font-weight-bold'>Total</span>
                            <strong>${state.plan.planPrice}</strong>
                        </li>
                    </ul>
                </div>
            </div>

            <form>
                <h4 className="mt-2">Create Account</h4>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label>First name</label>
                        {/* add value={firstName} on each input tag*/}
                        <input type="text" className="form-lines  form-control" name='firstName' onChange={e => setStudentInfo({ ...student, [e.target.name]: e.target.value })} required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label >Last name</label>
                        <input type="text" className="form-lines  form-control" name='lastName' onChange={e => setStudentInfo({ ...student, [e.target.name]: e.target.value })} required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label >Email</label>
                        <input type="email" className="form-lines form-control" name='email' onChange={e => setStudentInfo({ ...student, [e.target.name]: e.target.value })} aria-describedby="emailHelp" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label >Password</label>
                        <input type="password" className="form-lines form-control" name='password' onChange={e => setStudentInfo({ ...student, [e.target.name]: e.target.value })} autoComplete='on' />
                    </div>
                </div>
                <h4 className="mt-4">Payment</h4>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label >Name on card</label>
                        <input type="text" className="form-lines form-control" id="cc-name" placeholder="" name='cardName' onChange={e => setStudentInfo({ ...student, [e.target.name]: e.target.value })} required />
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
                        <input type="text" className="form-lines form-control" id="cc-cvv" placeholder="" name='cardCvv' onChange={e => setStudentInfo({ ...student, [e.target.name]: e.target.value })} required />
                        <div className="invalid-feedback">
                            Security code required
                        </div>
                    </div>
                </div>
                <button
                    className="proceed-btn btn-lg btn-block"
                    type="submit"
                    onClick={() => {
                        const newStudent = { ...state, student }
                        dispatch(addnewStudent(newStudent))
                        dispatch(changeAuthNewStudent({isRegister : true}))
                        dispatch(signinCredential({email : student.email, password : student.password}))
                        navigate("/profile")

                    }}
                >
                    Place order
                </button>
            </form>
        </div>

    );
}

export default Checkout;
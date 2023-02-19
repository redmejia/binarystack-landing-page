import { useState } from 'react';
import './signin-style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeSigninAuthStatus } from '../../redux/auth/signin/signinSlice';

const Modal = ({ modalBtn }) => {

    const [student, setStudentInfo] = useState({})

    const { studentSignin } = useSelector(state => state.signin || {})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <>
            {modalBtn}
            <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content p-2">

                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label >Email</label>
                                    <input
                                        type="email"
                                        className="form-lines form-control"
                                        name='email'
                                        onChange={e => setStudentInfo({ ...student, [e.target.name]: e.target.value })}
                                        aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <input
                                        type="password"
                                        className="form-lines form-control"
                                        name='password'
                                        onChange={e => setStudentInfo({ ...student, [e.target.name]: e.target.value })}
                                        autoComplete='on' />
                                </div>
                            </form>
                        </div>
                        <div className="p-1 col text-right">
                            <a className="mt-1 nav-link text-success" href="#/">Join Binary Stack</a>
                        </div>
                        <div className="p-1 col d-flex justify-content-center">
                            <button
                                type="submit"
                                className="signin-btn-submit btn-lg btn-block "
                                data-dismiss="modal"
                                onClick={() => {
                                    console.log(studentSignin);
                                    if (student.email === studentSignin.email && student.password === studentSignin.password) {
                                        dispatch(changeSigninAuthStatus({ isSignin: true }))
                                        navigate("/profile")
                                    } else {

                                        alert('Error : bad email or password')
                                    }
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

const Signin = ({ childBtn }) => {
    return (
        <Modal
            modalBtn={childBtn}
        />
    )
}

export default Signin;
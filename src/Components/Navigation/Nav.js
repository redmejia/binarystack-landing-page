import { Link, useNavigate } from 'react-router-dom';
import Signin from '../Signin/Signin';
import mainLogo from './logo-01.svg';
import './nav-style.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeAuthNewStudent } from '../../redux/auth/join/joinSlice';
import { changeSigninAuthStatus } from '../../redux/auth/signin/signinSlice';

const SignoutNav = ({ authStatus }) => {

    let navigate = useNavigate()
    let dispatch = useDispatch()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark tutorial-menu-bg ">
            <div className="container-xl">
                <Link to="/profile" className='navbar-brand mt-1' ><img className='nav-logo' src={mainLogo} alt="bs01" /></Link>
                {/* <a className="navbar-brand mt-1" href="#/">
            <img className='nav-logo' src={mainLogo} alt="bs01" />
        </a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample07XL">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                        <li className="nav-item active">
                            <button
                                type="button"
                                className="signin-btn   btn mr-2 mt-1 nav-link "
                                data-toggle="modal"
                                data-target="#myModal"
                                onClick={() => {
                                    if (authStatus.type === 'join') {
                                        dispatch(changeAuthNewStudent({ isRegister: false }))
                                        navigate('/')
                                    }else {
                                        dispatch(changeSigninAuthStatus({ isSignin: false }))
                                        navigate('/')
                                    }
                                  
                                }}
                            >
                                Sign out
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const MainNav = () => (
    <nav className="navbar navbar-expand-lg navbar-dark tutorial-menu-bg ">
        <div className="container-xl">
            <Link to="/" className='navbar-brand mt-1' ><img className='nav-logo' src={mainLogo} alt="bs01" /></Link>
            {/* <a className="navbar-brand mt-1" href="#/">
                <img className='nav-logo' src={mainLogo} alt="bs01" />
            </a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample07XL">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item dropdown dropleft">
                        <a className="tutorials nav-link mr-2 mt-1 dropdown-toggle" href="#/" data-toggle="dropdown" aria-expanded="false">Tutorials</a>
                        <div className="tutorial-menu dropdown-menu">
                            <div className='col'>Beginner/Basics</div>
                            <div className='row'>
                                <div className='col'><a className="dropdown-item" href="#/">Javascript</a></div>
                                <div className='col'><a className="dropdown-item" href="#/">Python</a></div>
                                <div className='col'><a className="dropdown-item" href="#/">Go</a></div>
                                <div className='col'><a className="dropdown-item" href="#/">Rust</a></div>
                                <div className='col'><a className="dropdown-item" href="#/">Linux</a></div>
                            </div>
                            <div className='col'>Front End/Client Side</div>
                            <div className='row'>
                                <div className='col'><a className="dropdown-item" href="#/">HTML</a></div>
                                <div className='col'><a className="dropdown-item" href="#/">CSS</a></div>
                                <div className='col'><a className="dropdown-item" href="#/">ReactJs</a></div>
                                <div className='col'><a className="dropdown-item" href="#/">React Native</a></div>
                            </div>
                            <div className='col'>Back End/Server side</div>
                            <div className='row'>
                                <div className='col'><a className="dropdown-item" href="#/">NodeJs/ExpressJs</a></div>
                                <div className='col'><a className="dropdown-item" href="#/">Go</a></div>
                                <div className='col'><a className="dropdown-item" href="#/">Postgres</a></div>
                                <div className='col'><a className="dropdown-item" href="#/">MongoDB</a></div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item active">

                        <Signin
                            childBtn={<button type="button" className="signin-btn  btn mr-2 mt-1 nav-link " data-toggle="modal" data-target="#myModal">
                                Sign in
                            </button>}
                        />
                    </li>
                    <li className="nav-item">
                        <Link className="join-btn mt-1 nav-link" to="join" >Join</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

const Nav = () => {

    const { isRegister } = useSelector(state => state.join || false)
    const { isSignin } = useSelector(state => state.signin || false)

    let status = {}
    
    if (isRegister) {
        status["type"] = 'join'
        return <SignoutNav authStatus={status} />;
    }

    if (isSignin) {
        status["type"] = 'signin' // not used
        return <SignoutNav authStatus={isSignin} />;
    }
    
    return <MainNav />;
}


export default Nav;

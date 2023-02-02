import Signin from '../Signin/Signin';
import mainLogo from './logo-01.svg';
import './nav-style.css'

const Nav = () => (
    <nav class="navbar navbar-expand-lg navbar-dark tutorial-menu-bg ">
        <div class="container-xl">
            <a class="navbar-brand mt-1" href="#/">
                <img className='nav-logo' src={mainLogo} alt="bs01" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExample07XL">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item dropdown dropleft">
                        <a className="tutorials nav-link mr-2 mt-1 dropdown-toggle" href="#/" data-toggle="dropdown" aria-expanded="false">Tutorials</a>
                        <div className="tutorial-menu dropdown-menu">
                            <div className='col'>Beginner/Basics</div>
                            <div className='row'>
                                <div className='col'><a class="dropdown-item" href="#/">Javascript</a></div>
                                <div className='col'><a class="dropdown-item" href="#/">Python</a></div>
                                <div className='col'><a class="dropdown-item" href="#/">Go</a></div>
                                <div className='col'><a class="dropdown-item" href="#/">Rust</a></div>
                                <div className='col'><a class="dropdown-item" href="#/">Linux</a></div>
                            </div>
                            <div className='col'>Front End/Client Side</div>
                            <div className='row'>
                                <div className='col'><a class="dropdown-item" href="#/">HTML</a></div>
                                <div className='col'><a class="dropdown-item" href="#/">CSS</a></div>
                                <div className='col'><a class="dropdown-item" href="#/">ReactJs</a></div>
                                <div className='col'><a class="dropdown-item" href="#/">React Native</a></div>
                            </div>
                            <div className='col'>Back End/Server side</div>
                            <div className='row'>
                                <div className='col'><a class="dropdown-item" href="#/">NodeJs/ExpressJs</a></div>
                                <div className='col'><a class="dropdown-item" href="#/">Go</a></div>
                                <div className='col'><a class="dropdown-item" href="#/">Postgres</a></div>
                                <div className='col'><a class="dropdown-item" href="#/">MongoDB</a></div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item active">

                        <Signin
                            childBtn={<button type="button" className="signin-btn  btn mr-2 mt-1 nav-link " data-toggle="modal" data-target="#myModal">
                                Sign in
                            </button>}
                        />
                    </li>
                    <li className="nav-item">
                        <a className="join-btn mt-1 nav-link" href="#/">Join</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Nav;

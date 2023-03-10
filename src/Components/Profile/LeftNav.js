import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

import order from './order.svg'
import profile from './profile.svg'
import bs from './binary_stack.svg'



const LeftNav = () => {

    const { newStudent } = useSelector(state => state.join || {}) // student
    
    return (

        <div className='container mt-4'>
            <nav id="sidebarMenu" className="col  col-md-2 col-lg-12 d-md-block sidebar">
                <div className="position-sticky pt-3 sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/profile"} >
                                <img src={profile} alt='order' style={{ width: 24, height: 24 }} />{" "}
                                {'@' + newStudent.firstName}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/bs"}>
                                <img src={bs} alt='order' style={{ width: 30, height: 30 }} />{" "}
                                Binary Stack
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/order"} >
                                <img src={order} alt='order' style={{ width: 24, height: 24 }} />{" "}
                                Orders
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default LeftNav;
import './body-style.css';
import Nav from "../Navigation/Nav";
import learnBuild from './learn-build.svg'
import { Route, Routes } from 'react-router';
import JoinBs from '../JoinBs/JoinBs';
import LandingPage from '../BsPage/BsPage';
import Checkout from '../Checkout/Checkout';


const Main = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path='/' element={<LandingPage learnBuild={learnBuild}/>} />
                <Route path='join' element={<JoinBs />} />
                <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </div>
    );
}

export default Main;
import './body-style.css';
import Nav from "../Navigation/Nav";
import learnBuild from './learn-build.svg'
import { Route, Routes } from 'react-router';
import JoinBs from '../JoinBs/JoinBs';
import LandingPage from '../BsPage/BsPage';


const Main = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path='/' element={<LandingPage learnBuild={learnBuild}/>} />
                <Route path='join' element={<JoinBs />} />
            </Routes>
        </div>
    );
}

export default Main;
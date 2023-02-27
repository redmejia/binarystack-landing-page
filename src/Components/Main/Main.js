import './body-style.css';
import Nav from "../Navigation/Nav";
import learnBuild from './learn-build.svg'
import { Route, Routes } from 'react-router';
import JoinBs from '../JoinBs/JoinBs';
import BsPage from '../BsPage/BsPage';
import Checkout from '../Checkout/Checkout';
import Profile from '../Profile/Profile';
import Orders from '../Profile/Orders';
import BinaryStack from '../Profile/BinaryStack';
import NewOrder from '../Profile/NewOrder';
import Learning from '../Profile/Learning';


const Main = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path='/' element={<BsPage learnBuild={learnBuild}/>} />
                <Route path='/join' element={<JoinBs />} />
                <Route path='/checkout' element={<Checkout />} />

                <Route path='/profile' element={<Profile />} />
                <Route path='/order' element={<Orders />} />
                <Route path='/new/order' element={<NewOrder />} />
                <Route path='/bs' element={<BinaryStack />} />
                <Route path='/learning' element={<Learning />} />
                
            </Routes>
        </div>
    );
}

export default Main;
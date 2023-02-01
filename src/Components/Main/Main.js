import './body-style.css';
import Header from "../Header/Header";
import Nav from "../Navigation/Nav";
import RenderOptionsCard from '../Options/RenderOptionsCard';
import Technologies from '../Technologies/Technologies';
import Footer from '../Footer/Footer';
import learnBuild from './learn-build.svg'
import Collage from '../Collage/Collage';

const Main = () => {
    return (
        <div>
            <Nav />
            <Header />
            <div>
                <div className='pt-5 col-sm d-flex justify-content-center'>
                    <div >
                        <h1 className='body-opt-text-lg'>Your career start here</h1>
                        <p>This is the place where you learn basic of programming and full stack developemt</p>
                        <button className='opt-btn-path'>View your options path</button>
                    </div>
                </div>
                <div className='body-opt-cards'>
                    <div className='p-5'>
                        <RenderOptionsCard />
                    </div>
                </div>
                <div>
                    <img className='img-fluid' src={learnBuild} alt="learn" />
                </div>
                <div>
                    <Technologies childrenBtn={<button className='opt-btn-explore'>start now</button>} />
                </div>
                <div>
                    <Collage />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Main;
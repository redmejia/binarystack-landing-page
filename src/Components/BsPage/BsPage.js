import RenderOptionsCard from '../Options/RenderOptionsCard';
import Technologies from '../Technologies/Technologies';
import Footer from '../Footer/Footer';
import Collage from '../Collage/Collage';
import Header from '../Header/Header';

// Home binary stack page
const BsPage = ({ learnBuild }) => (
    <div>
        <Header />
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
)
export default BsPage;

import './collage-style.css';
import group from './public/01.png';
import work from './public/02.png';
import dream from './public/03.png';

const Collage = () => (
    <div className='collage-bg'>
        <div className="p-5">
            <div className='col text-center'>
                <h1 className='text-xlg'>You Can't Stop</h1>
            </div>
            <div className="row p-2">
                <div className="col-12 col-sm-6 col-md-6 d-flex align-items-center bg-grient">
                    <div>
                        <h1 className='text-lg'>Connect</h1>
                        <p className='text-md'>We are here to help you. Let's work together.</p>
                    </div>
                </div>
                <div className="col col-sm-6 col-md-6 d-flex align-items-center">
                    <img src={group} className='box-img d-none d-sm-block' alt='01' />
                </div>
            </div>
            <div className="row p-2">
                <div className="col col-sm-6 col-md-6 d-flex align-items-center">
                    <img src={work} className='box-img d-none d-sm-block' alt='01' />
                </div>
                <div className="col-12 col-sm-6 col-md-6 d-flex align-items-center bg-grient">
                    <div>
                        <h1 className='text-lg'>Learn on your own</h1>
                        <p className='text-md'>Learn from anywhere, anytime.</p>
                    </div>
                </div>
            </div>
            <div className="row p-2">
                <div className="col-12 col-sm-6 col-md-6 d-flex align-items-center bg-grient">
                    <div>
                        <h1 className='text-lg'>Goals</h1>
                        <p className='text-md'>Expand your mind and achieve your goals. Shape the future with education.</p>
                    </div>
                </div>
                <div className="col col-sm-6 col-md-6 d-flex align-items-center">
                    <img src={dream} className='box-img d-none d-sm-block' alt='01' />
                </div>
            </div>
        </div>
    </div>
)

export default Collage;
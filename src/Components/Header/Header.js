import './header-style.css';
import stack from './stack.svg'

const Header = () => {
    return (
        <div className="header-background col">
            <div className='container'>
                <div className='row pb-5'>
                    <div className='mt-5 col d-flex justify-content-center'>
                        <div>
                            <h5 className='header-text-lg' >You want to become full stack developer</h5>
                            <h6 className='header-text-sm'>Learn and build start you career with Binary Stack</h6>
                            <p className='header-text-xs'>You want to learn how to code, start from the basic and step by step build you future. We have full stack developemt path for you
                            </p>
                            <button className='go-tutorials'>view our tutorials</button> 
                        </div>
                    </div>
                    <div className='col-12  col-sm-6 col-md-6 d-none d-sm-block d-flex justify-content-center'>
                        <img className='tech-img' src={stack} alt='tech'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
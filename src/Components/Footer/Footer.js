import './footer-styles.css';
import lin from './LinkedIn.svg';
import git from './github.svg';
import logo from './logo-01.svg';

const Footer = () => (
    <div className='bg-dark'>
        <div class="container">
            <footer class="py-5">
                {/* <div className='row text-center'>
                    <div className='col'></div>
                    <div className='col'> <a href='/#'><img className='m-1' src={logo} style={{ width: '30%' }} alt='in' /></a></div>
                </div> */}
                <div class="row text-center">
                    <div class="col-6 col-md-2 mb-3">
                        <h5 className='text-md'>Binary Stack</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="/#" class="nav-link p-0 text-muted">Tutorials</a></li>
                            <li class="nav-item mb-2"><a href="/#" class="nav-link p-0 text-muted">Features</a></li>
                            <li class="nav-item mb-2"><a href="/#" class="nav-link p-0 text-muted">Pricing</a></li>
                            <li class="nav-item mb-2"><a href="/#" class="nav-link p-0 text-muted">FAQs</a></li>
                            <li class="nav-item mb-2"><a href="/#" class="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>


                    <div class="col-6 col-md-2 mb-3">
                        <h5 className='text-md'>Links</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="/#" class="nav-link p-0 text-muted">Blog</a></li>
                            <li class="nav-item mb-2"><a href="/#" class="nav-link p-0 text-muted">Cheat Sheets</a></li>
                            <li class="nav-item mb-2"><a href="/#" class="nav-link p-0 text-muted">FAQs</a></li>
                            <li class="nav-item mb-2"><a href="/#" class="nav-link p-0 text-muted">Comunity</a></li>
                        </ul>
                    </div>
                    <div className='col'> <a href='/#'><img className='m-1' src={logo} style={{ width: '25%' }} alt='in' /></a></div>


                </div>
                <div class="text-center py-4 my-4 border-top">
                    <div className='row'>
                        <div className='col d-flex align-items-center'>
                            <p className='text-sm-m'>&copy; 2023 Binary Stack</p>
                        </div>
                        <div className='col'>
                            <a href='/#'><img className='m-1' src={lin} style={{ width: '10%' }} alt='in' /></a>
                            <a href='/#'><img className='m-1' src={git} style={{ width: '10%' }} alt='in' /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>

)


export default Footer;
import './join-style.css';
import { useNavigate } from "react-router-dom";

const JoinCard = ({ title, body, styles }) => (
    <div className="card" style={{ backgroundColor: '#ffff', height: '100%', ...styles }}>
        <div class="card-body">
            {title}
            {body}
        </div>
    </div>
)

const JoinBs = () => {

    let navigate = useNavigate()

    const checkout = (plan) => {
        navigate('/', { state: plan })
    }
    return (
        <div className="col my-5">
            <div className="col text-center">
                <h1 className='join-text-xlg'>Start Your Full Stack Developemt Career With <span className='join-text-xlg-me'> Binary Stack </span></h1>
            </div>
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className='col-12 col-md-4 col-lg-4 col-xl-4 my-2'>
                        <JoinCard
                            title={
                                <div
                                    style={{
                                        background: 'linear-gradient(to right, #a8e7f7, #469bb1)',
                                        borderRadius: 15,
                                        color: '#ffff'
                                    }}
                                >
                                    <h1 className="p-2 text-center">Basics</h1>
                                </div>
                            }
                            body={
                                <div className="col">
                                    <p>Start from basics. You have four programming languages options.</p>
                                    <div className="text-center">
                                        <h3 style={{ color: '#35b6d6' }}>Monthly</h3>
                                        <h1 style={{ color: '#4E6D98' }}>$15</h1>
                                    </div>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>Python</li>
                                        <li>Go</li>
                                        <li>Rust</li>
                                    </ul>

                                    <div>
                                        <button
                                            className="signin-btn-submit btn-lg btn-block "
                                            onClick={() => checkout({ plan: { planPay: 'monthly', planType: 'basics', planPrice: 15 } })}
                                        >
                                            start Now
                                        </button>
                                    </div>
                                </div>
                            }
                            styles={
                                {
                                    heigth: '100%',

                                    border: '2px solid #6BAD69',


                                    borderBottomStyle: 'solid',
                                    borderBottomWidth: 'medium',

                                    borderTopRightRadius: '15px',
                                    borderTopLeftRadius: "15px",
                                    borderBottomRightRadius: '15px',
                                    borderBottomLeftRadius: "15px",

                                }
                            }
                        />
                    </div>
                    <div className='col-12 col-md-4 col-lg-4 col-xl-4 my-2'>
                        <JoinCard
                            title={
                                <div
                                    style={{
                                        background: 'linear-gradient(to right, #ffef81, #c6b645)',
                                        borderRadius: 15,
                                        color: '#ffff'
                                    }}
                                >
                                    <h1 className="p-2 text-center">Front End</h1>
                                </div>
                            }
                            body={
                                <div className="col">
                                    <p className="card-text">You already know programing basics this is the next step.</p>
                                    <div className="text-center">
                                        <h3 style={{ color: '#35b6d6' }}>Yearly</h3>
                                        <h1 style={{ color: '#4E6D98' }}>$100</h1>
                                    </div>
                                    <ul>
                                        <li>HTML / CSS</li>
                                        <li>Bootstrap</li>
                                        <li>Reactjs</li>
                                        <li>React Router</li>
                                    </ul>
                                    <div>
                                        <button
                                            className="signin-btn-submit btn-lg btn-block "
                                            onClick={() => checkout({ plan: { planPay: 'yearly', planType: 'front end', planPrice: 100 } })}>
                                            start Now
                                        </button>
                                    </div>
                                </div>
                            }
                            styles={
                                {
                                    heigth: '100px',

                                    border: '2px solid #E9C819',

                                    borderBottomStyle: 'solid',
                                    borderBottomWidth: 'medium',

                                    borderTopRightRadius: '15px',
                                    borderTopLeftRadius: "15px",
                                    borderBottomRightRadius: '15px',
                                    borderBottomLeftRadius: "15px",
                                }
                            }

                        />
                    </div>
                    <div className='col-12 col-md-4 col-lg-4 col-xl-4 my-2'>
                        <JoinCard
                            title={
                                <div
                                    style={{
                                        background: 'linear-gradient(to right, #de7459, #e44d27)',
                                        borderRadius: 15,
                                        color: '#ffff'
                                    }}
                                >
                                    <h1 className="p-2 text-center">Back End</h1>
                                </div>
                            }
                            body={
                                <div className="col">
                                    <p className="card-text">Create the logic that is behind of your front end.</p>
                                    <div className="text-center">
                                        <h2 style={{ color: '#35b6d6' }}>Yearly</h2>
                                        <h1 style={{ color: '#4E6D98' }}>$100</h1>
                                    </div>
                                    <ul>
                                        <li>Node.js</li>
                                        <li>Go</li>
                                        <li>Python</li>
                                        <li>Postgres</li>
                                    </ul>
                                    <div>
                                        <button
                                            className="signin-btn-submit btn-lg btn-block "
                                            onClick={() => checkout({ plan: { planPay: 'yearly', planType: 'back end', planPrice: 100 } })}
                                        >
                                            start Now
                                        </button>
                                    </div>
                                </div>
                            }
                            styles={
                                {
                                    heigth: '100%',

                                    border: '2px solid #ED2222',

                                    borderBottomStyle: 'solid',
                                    borderBottomWidth: 'medium',

                                    borderTopRightRadius: '15px',
                                    borderTopLeftRadius: "15px",
                                    borderBottomRightRadius: '15px',
                                    borderBottomLeftRadius: "15px",
                                }
                            }
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default JoinBs;
import { useLocation } from 'react-router-dom';
import './checkout-style.css';

const Checkout = () => {

    let { state } = useLocation()

    return (
        <div className="mt-3 mb-3 p-3 container bg-light">
            <h1>Your Future Start Here</h1>
            <div className='col d-flex  justify-content-center'>
                <div className="col-md-4 order-md-2 mb-4">
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Plan </h6>
                                <small className="text-muted font-weight-bold">{state.plan.planPay}</small>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Plan Type</h6>
                                <small className="text-muted font-weight-bold">{state.plan.planType}</small>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0 font-weight-bold">Plan Price</h6>
                            </div>
                            <span className="text-success">${state.plan.planPrice}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className='font-weight-bold'>Total</span>
                            <strong>${state.plan.planPrice}</strong>
                        </li>
                    </ul>
                </div>
            </div>

            <form>
                <h4 className="mt-2">Create Account</h4>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="validationDefault01">First name</label>
                        {/* add value={firstName} on each input tag*/}
                        <input type="text" className="form-lines  form-control" id="validationDefault01" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="validationDefault02">Last name</label>
                        <input type="text" className="form-lines  form-control" id="validationDefault02" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" className="form-lines form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-lines form-control" id="exampleInputPassword1" autoComplete='on' />
                    </div>
                </div>
                <h4 className="mt-4">Payment</h4>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="cc-name">Name on card</label>
                        <input type="text" className="form-lines form-control" id="cc-name" placeholder="" required />
                        <small className="text-muted">Full name as displayed on card</small>
                        <div className="invalid-feedback">
                            Name on card is required
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="cc-number">Credit card number</label>
                        <input type="text" className="form-lines form-control" id="cc-number" placeholder="" required />
                        <div className="invalid-feedback">
                            Credit card number is required
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label for="cc-cvv">CVV</label>
                        <input type="text" className="form-lines form-control" id="cc-cvv" placeholder="" required />
                        <div className="invalid-feedback">
                            Security code required
                        </div>
                    </div>
                </div>
                <button className="proceed-btn btn-lg btn-block" type="submit">Place order</button>
            </form>
        </div>

    );
}

export default Checkout;
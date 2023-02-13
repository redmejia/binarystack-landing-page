import './signin-style.css';

const Modal = ({ modalBtn }) => (
    <>
        {modalBtn}
        <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content p-2">

                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label >Email</label>
                                <input type="email" className="form-lines form-control"   aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label >Password</label>
                                <input type="password" className="form-lines form-control"  autoComplete='on'/>
                            </div>
                        </form>
                    </div>
                    <div className="p-1 col text-right">
                        <a className="mt-1 nav-link text-success" href="#/">Join Binary Stack</a>
                    </div>
                    <div className="p-1 col d-flex justify-content-center">
                        <button type="submit" className="signin-btn-submit btn-lg btn-block ">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </>
)

const Signin = ({ childBtn }) => {
    return (
        <Modal
            modalBtn={childBtn}
        />
    )
}

export default Signin;
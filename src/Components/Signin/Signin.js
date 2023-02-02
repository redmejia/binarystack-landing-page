import './signin-style.css';

const Modal = ({ modalBtn }) => (
    <>
        {modalBtn}
        <div className="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content p-2">

                    <div className="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-lines form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-lines form-control" id="exampleInputPassword1" />
                            </div>
                        </form>
                    </div>
                    <div className="p-1 col text-right">
                        <a className="mt-1 nav-link text-success" href="#/">Create an account</a>
                    </div>
                    <div className="p-1 col d-flex justify-content-center">
                        <button type="submit" class="signin-btn-submit btn-lg btn-block ">Submit</button>
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
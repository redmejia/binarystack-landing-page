import { useSelector } from "react-redux";
import LeftNav from "./LeftNav";

const Orders = () => {
    const { newStudent } = useSelector(state => state.join || {})
    const { plan } = useSelector(state => state.course || [])

    const myOrderList = plan.course.map((plan, i) => {
  
        return (
            <tbody>
                <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{newStudent.email}</td>
                    <td>{plan.planPay}</td>
                    <td>{plan.planType}</td>
                    <td>{'$ ' + plan.planPrice}</td>
                    <td>{newStudent.cardNumber}</td>
                </tr>
            </tbody>
        )
    })

    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-sm-3">
                        <LeftNav />
                    </div>
                    <div className="col">
                        <h1 className="mt-2 text-center" style={{ fontWeight: '300' }}>My Orders</h1>
                        <hr></hr>
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Plan Pay</th>
                                            <th scope="col">Plan Type</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Card Number</th>
                                        </tr>
                                    </thead>
                                    {myOrderList}
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Orders;
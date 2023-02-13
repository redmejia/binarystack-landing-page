import { useSelector } from "react-redux";
import LeftNav from "./LeftNav";

const Orders = () => {
    const { newStudent } = useSelector(state => state.join || {})
    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-sm-3">
                        <LeftNav />
                    </div>
                    <div className="col">
                        <h1 className="mt-2 text-center" style={{ fontWeight: '300' }}>Order</h1>
                        <hr></hr>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Plan Pay</th>
                                    <th scope="col">Plan Type</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Card Num</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{newStudent.student.email}</td>
                                    <td>{newStudent.plan.planPay}</td>
                                    <td>{newStudent.plan.planType}</td>
                                    <td>{'$ ' + newStudent.plan.planPrice}</td>
                                    <td>{newStudent.student.card_number}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Orders;
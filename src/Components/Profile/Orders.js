import LeftNav from "./LeftNav";

const Orders = () => (
    <>
        <div className="container ">
            <div className="row">
                <div className="col-sm-4">
                    <LeftNav />
                </div>
                <div className="col">
                    <h1 className="mt-2 text-center" style={{ fontWeight: '300' }}>Order</h1>
                    <hr></hr>
                </div>
            </div>
        </div>
    </>
)

export default Orders;
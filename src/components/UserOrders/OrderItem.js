import './OrderItem.css'

const OrderItem=({name,qty,price,total_price,status,date,time})=>{
    const customDate=date.split("T");
    return(
        <div className="userorders">
        <div className="card">
                <div class="card-header b">
                {`${name} `}
                </div>
                <div class="card-body">
                    <div className="row">
                        <div className="col-6">
                            <p class="card-text">Quantity: {qty}</p>
                            
                            <p class="card-text">{`Ordered on : ${customDate[0]} at ${time} `}</p>
                        </div>
                        <div className="col-6">
                            
                            <p class="card-text">Status: {status}</p>
                            <h5 class="card-text b price">{`Total price : Rs. ${total_price}`}</h5>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )

}
export default OrderItem;
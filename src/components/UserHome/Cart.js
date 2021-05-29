import { Component } from 'react'
import CartItem from './CartItem'
import './Cart.css'
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: []
        }
    }
    componentDidMount() {
        fetch("https://api-shopstop.herokuapp.com/displayCart", {
            method: 'post',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({
                cust_id: this.props.cust_id
            })
        })
            .then(res => res.json())
            .then(cartItem => {
                console.log("inside", cartItem)
                this.setState({ item: cartItem })
            })
            .catch(console.log)

    }
    onBuy = () => {
        fetch("https://api-shopstop.herokuapp.com/buy", {
            method: 'post',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({
                cust_id: this.props.cust_id,

            })
        })
            .then(res => res.json())
            .then(curproducts => {
                console.log(curproducts)
            })
            .catch(console.log)
        this.setState({ item: [] })

    }
    render() {
        const { item } = this.state
        let grandTotal = 0;
        return (
            <div className="cart">
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-left">Product</th>
                                            <th scope="col" className="text-center">Quantity</th>
                                            <th scope="col" className="text-right" >Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {item.map((cur_item, ind) => {
                                            { grandTotal += cur_item.total_price }
                                            return <CartItem
                                                key={ind}
                                                name={cur_item.description}
                                                qty={cur_item.quantity_purchased}
                                                price={cur_item.price}
                                                total_price={cur_item.total_price}

                                            />
                                        })}
                                        <tr>
                                            <td></td>
                                            <td><strong className="grand">Grand Total</strong></td>
                                            <td className="text-right"> <strong>Rs. {`${grandTotal}`}</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="ttu bn pv3 ph4 f6 bg-orange white b br-pill pointer grow" onClick={this.onBuy}> Buy Now</button>
            </div>
        )
    }

}
export default Cart;
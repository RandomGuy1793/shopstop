import React, { Component } from "react";
import './ShopHome.css';
class ShopHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pid: "",
            qty: "",
            price: "",
            description: ""
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    onSubmitChange = (evt) => {
        evt.preventDefault();
        const { pid, qty, price, description } = this.state;
        console.log(this.props.shop.shopid);
        fetch("https://api-shopstop.herokuapp.com/addProduct", {
            method: 'post',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({
                pid: pid,
                shopid: this.props.shop.shopid,
                qty: qty,
                price: price,
                description: description
            })
        })
            .then(res => res.json())
            .then(product => {
                console.log(product)
                this.setState({ qty: "", price: "", description: "", pid: "" })
            })
            .catch(console.log)
    }

    render() {
        const { onRouteChange, clearState } = this.props;
        return (
            <div className="shophome">
                <div className="button-bar">
                    <nav className="f6 fw6 ttu v-mid tracked flex justify-end">
                        <button onClick={() => clearState()} className="buttons bn ttu ph3 f6 bg-orange white b br-pill pointer grow">Log Out</button>
                    </nav>
                </div>
                <h2 className="b">Add Products</h2>
                <form >
                    <div className="card">
                        <div className="card-body">
                            <div className="inputs">
                                <label htmlFor="pid">Product id</label>
                                <div className="input-group">
                                    <input
                                        className="form-control"
                                        name="pid"
                                        onChange={this.handleChange}
                                        value={this.state.pid}
                                    />
                                </div>
                            </div>
                            <div className="inputs">
                                <label htmlFor="qty">Quantity</label>
                                <div className="input-group">
                                    <input
                                        className="form-control"
                                        name="qty"
                                        onChange={this.handleChange}
                                        value={this.state.qty}
                                    />
                                </div>
                            </div>
                            <div className="inputs">
                                <label htmlFor="description">Description</label>
                                <div className="input-group">
                                    <input
                                        className="form-control"
                                        name="description"
                                        onChange={this.handleChange}
                                        value={this.state.description}
                                    />
                                </div>
                            </div>
                            <div className="inputs">
                                <label htmlFor="price">Price</label>
                                <div className="input-group">
                                    <input
                                        className="form-control"
                                        name="price"
                                        onChange={this.handleChange}
                                        value={this.state.price}
                                    />
                                </div>
                            </div>
                            <button
                                className="ttu bn ph4 pa3 f6 bg-orange white b br-pill pointer grow inputs"
                                onClick={this.onSubmitChange}
                            >Add product</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}
export default ShopHome;
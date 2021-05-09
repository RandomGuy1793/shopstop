import ShopProducts from './ShopProducts';
import './Shop.css'
import { Component } from 'react';
class Shop extends Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        console.log(this.props.shop.shopid)
        this.props.handleUserRouteChange("shopproduct", this.props.shop.shopid);

    }
    render() {
        const { name, pincode, address, category } = this.props;
        return (
            <div className="shopdisplay">
                <div onClick={this.handleClick} className="card grow">
                    <div class="card-header b">
                        <h3>{name}</h3>
                    </div>
                    <div class="card-body">
                        <h5 className="card-text">Address : {`${address}  ${pincode}`}</h5>
                        <h5 className="card-text">Category : {category}</h5>
                    </div>
                </div>
            </div>
        )
    }
}
export default Shop;
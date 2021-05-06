import ShopProducts from './ShopProducts';
import { Component } from 'react';
import './Shop.css'
class Shop extends Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        this.props.routeShopProducts(this.props.shop);
        // console.log(this.props.shop)
        // console.log(this.props.routeShopProducts)
    }
    render() {
        const { shop, name, pincode, address, category } = this.props;
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
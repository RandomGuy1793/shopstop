
import './Product.css'

const Product=({pid, description,price,qty})=>{
    return(
        <div className="proddisplay">
                <div className="card">
                    <div class="card-body">
                        <h4 className="card-text">{description}</h4>
                        <h5 className="card-text">Quantity left : {qty}</h5>
                        <h5 className="card-text">Price : {price}</h5>
                    </div>
                </div>
            </div>
    )
}
export default Product;
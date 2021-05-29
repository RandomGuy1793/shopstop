import { Component } from "react";
import './Product.css'
class Product extends Component{
    constructor(props){
        super(props);
        this.state={
            qty:this.props.qty,
            num:0
        }

    }
    onSubmitChange=()=>{
        fetch("https://api-shopstop.herokuapp.com/buy",{
            method:'post',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify({
          cust_id:this.props.cust_id,
            
            })
        })
            .then(res=>res.json())
                .then(curproducts=>{
                   console.log(curproducts)
                })
                .catch(console.log)

    }
    handlePlus=()=>{
        this.setState(preState=> ({num:preState.num+1}))
        // shopid,cust_id,pid,quantity_purchased,price
        fetch("https://api-shopstop.herokuapp.com/addCart",{
        method:'post',
        headers:{'Content-Type':"application/json"},
        body:JSON.stringify({
      shopid:this.props.shopid,
      cust_id:this.props.cust_id,
         pid:this.props.pid,
         quantity_purchased:1,
          price:this.props.price
        })
    })
        .then(res=>res.json())
            .then(curproducts=>{
                this.setState(preState=>({
                    qty:preState.qty-1
                }))
            })
            .catch(console.log)

    }
    handleMinus=()=>{
        this.setState(preState=> ({num:preState.num-1}))
        fetch("https://api-shopstop.herokuapp.com/removeProductCart",{
            method:'post',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify({
          shopid:this.props.shopid,
          cust_id:this.props.cust_id,
             pid:this.props.pid,
             quantity_removed:1,
              price:this.props.price
            })
        })
            .then(res=>res.json())
                .then(curproducts=>{
                    this.setState(preState=>({
                        qty:preState.qty+1
                    }))
                })
                .catch(console.log)

    }
   
    render(){
        const { description,price}=this.props
      return(
        <div className="proddisplay">
            <div className="card">
                <h4 className="card-header">{description}</h4>
                <div class="card-body">
                    <div className="container-fluid">
                        <h5 className="card-text">Quantity left : {this.state.qty}</h5>
                        <h5 className="card-text">Price : {price}</h5>
                        <h5 className="qty-select">quantity: <button name="-" onClick={this.handleMinus}
                            className="ph2 pv1 btn-qty btn btn-outline-danger">-</button> {this.state.num} <button name="+" onClick={this.handlePlus} 
                            className="ph2 pv1 btn-qty btn btn-outline-danger">+</button> </h5>
                    </div>
                </div>
            </div>
        </div>
    )   
    }
   


}
export default Product;
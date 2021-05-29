import {Component} from 'react'
import OrderItem from './OrderItem'
class UserOrder extends Component{
    constructor(props){
        super(props);
        this.state={
            item:[]
        }
    }
    componentDidMount(){
        // fetch("http://localhost:3001/displayOrder",{
            fetch("https://api-shopstop.herokuapp.com/displayOrder",{
            method:'post',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify({
             cust_id:this.props.cust_id
            })
        })
        .then(res=>res.json())
            .then(OrderItem=>{
                console.log("inside", OrderItem)
                 this.setState({item:OrderItem})   
            })
            .catch(console.log)

    }
  
    render(){
        const {item}=this.state
        return(
            <div className="userorders" >
                {
                    item.map((cur_item,ind)=>{
                      return  <OrderItem 
                        key={ind}
                        name={cur_item.description}
                        qty={cur_item.quantity_purchased}
                        price={cur_item.price}
                        total_price={cur_item.total_price}
                        date={cur_item.date}
                        time={cur_item.time}
                        status={cur_item.status}
                        />
                     

                    })
                }
            </div>
        )
    }

}
export default UserOrder;
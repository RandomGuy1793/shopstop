
import React, { Component } from 'react';
import './App.css';
import Construction from './construction.jpg'
import Navigation from './components/Navigation/Navigation';
import UserType from './components/UserType/UserType'
import SignInBuyer from './components/SignInBuyer/SignInBuyer'
import SignInShopkeeper from './components/SignInShopkeeper/SignInShopkeeper'
import RegisterBuyer from './components/RegisterBuyer/RegisterBuyer'
import RegisterShopkeeper from './components/RegisterShopkeeper/RegisterShopkeeper'
import UserHome from './components/UserHome/UserHome';
import UserOrders from './components/UserOrders/UserOrders';
import ShopHome from './components/ShopHome/ShopHome'

const intialState={
  route:'usertype',
  isSignedin:'false',
  user:{   
           cust_id:'',
           username:'',
            mail:'',
            password:'',
            phone:'',
            houseno:'',
            area:'',
            city:'',
            pincode:''

  },
  shop:{
    shopid:'',
    shop_email:'',
    shop_password:'',
    shop_name:'',
    phone:'',
    address:'',
    category:'',
    pincode:''

  }
  

}

class App extends Component {
  constructor() {
    super();
    this.state = {intialState }

  }

  loadUser=(user)=>{
    // console.log(user)
    console.log("inside",user.cust_id) 
    this.setState({user:{ 
      cust_id:user.cust_id,
      username:user.username,
      mail:user.mail,
      password:user.password,
      phone:user.phone,
      houseno:user.houseno,
      area:user.area,
      city:user.city,
      pincode:user.locality_pin_code }})
 
  }
  loadShop=(shop)=>{
    // console.log(user)
 
    this.setState({shop:{ 
      shopid:shop.shopid,
    shop_email:shop.shop_email,
    shop_password:shop.shop_password,
    shop_name:shop.shop_name,
    phone:shop.phone,
    address:shop.address,
    category:shop.category,
    pincode:shop.locality_pin_code}})
 
  }
 

  onRouteChange = (route) => {
    this.setState({route: route});
  }
 
  clearState=()=>{
    this.setState({shop:intialState.shop,user:intialState.user, route:'usertype'})
  }

  render() {
    const {route} = this.state;
    let now;
    if(route === 'usertype'){ now= <UserType onRouteChange={this.onRouteChange}/>}
    else if(route === 'signinbuyer'){now= <SignInBuyer onRouteChange={this.onRouteChange} loadUser={this.loadUser} />}
    else if(route === 'signinshopkeeper'){
      now= <SignInShopkeeper onRouteChange={this.onRouteChange} loadShop={this.loadShop}cd/>
    }
    else if(route === 'registerbuyer'){
      now= <RegisterBuyer onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
    }
    else if(route === 'registershopkeeper'){
      now=<RegisterShopkeeper onRouteChange={this.onRouteChange} loadShop={this.loadShop}/>
    }
    else if(route === 'userhome'){
      now= <UserHome 
      user={this.state.user}
      onRouteChange={this.onRouteChange} 
      clearState={this.clearState}
      />
    }
    else if(route==='userorders'){
      now= <UserOrders onRouteChange={this.onRouteChange} />
    }
    else if(route==='shophome'){
     now= <ShopHome 
     onRouteChange={this.onRouteChange}  
     shop={this.state.shop}
     clearState={this.clearState}/>
    }
    
  
   
    else {
    now= <div className='center pa7-ns'>
    <img src={Construction} alt='Logo' />  
    </div>
    }
    return (
     <div className='App'>  
      <Navigation onRouteChange={this.onRouteChange} />
     {now} 
     </div>
    );
  }
}

export default App;

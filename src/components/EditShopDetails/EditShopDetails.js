import React, { useState } from 'react';
import EditDetailsField from "../EditDetailsField/EditDetailsField"
const EditShopDetails = (props) => {
    const [details, setDetails] = useState({
        email: props.state.shop_email,
        password: props.state.shop_password,
        shopname: props.state.shop_name,
        phone: props.state.phone,
        address: props.state.address,
        category: props.state.category,
        pincode: props.state.pincode
    })
    function handleChange(event) {
        const { value, name } = event.target
        setDetails((prev) => {
            if (name === "Email") return { ...prev, email: value }
            else if (name === "Password") return { ...prev, password: value }
            else if (name === "ShopName") return { ...prev, shopname: value }
            else if (name === "Phone") return { ...prev, phone: value }
            else if (name === "Address") return { ...prev, address: value }
            else if (name === "Category") return { ...prev, category: value }
            else if (name === "Pincode") return { ...prev, pincode: value }
        })
    }
    //console.log(details)
    return (
        <div className="edituserdetails">
            <h2 className="b pa4">Edit Your Details</h2>
            <EditDetailsField title={"Email"} type={"email"} onChange={handleChange} value={details.email} />
            <EditDetailsField title={"Password"} type={"password"} onChange={handleChange} />
            <EditDetailsField title={"ShopName"} type={"text"} onChange={handleChange} value={details.shopname} />
            <EditDetailsField title={"Phone"} type={"number"} onChange={handleChange} value={details.phone} />
            <EditDetailsField title={"Address"} type={"text"} onChange={handleChange} value={details.address} />
            <EditDetailsField title={"Category"} type={"text"} onChange={handleChange} value={details.category} />
            <EditDetailsField title={"Pincode"} type={"number"} onChange={handleChange} value={details.pincode} />

            <div className="tc submit-btn pa5">
                <input type="submit"
                    onClick={() => { props.changeShop(details); props.onRouteChange('shophome') }} value="Save Changes" className="btn bg-orange white pointer grow" />
            </div>
        </div>
    )
}
export default EditShopDetails;
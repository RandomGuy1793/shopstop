import React, { useState } from 'react';
import EditDetailsField from "../EditDetailsField/EditDetailsField"
const EditUserDetails = (props) => {
    const [details, setDetails] = useState({
        email: props.state.mail,
        username: props.state.username,
        password: props.state.password,
        phone: props.state.phone,
        flatno: props.state.houseno,
        area: props.state.area,
        city: props.state.city,
        pincode: props.state.pincode
    })

    //console.log(props.state)
    function handleChange(event) {
        const { value, name } = event.target
        setDetails((prev) => {
            if (name === "Email") return { ...prev, email: value }
            else if (name === "Password") return { ...prev, password: value }
            else if (name === "Username") return { ...prev, username: value }
            else if (name === "Phone") return { ...prev, phone: value }
            else if (name === "FlatNo./HouseNo.") return { ...prev, flatno: value }
            else if (name === "Sector") return { ...prev, sector: value }
            else if (name === "Area") return { ...prev, area: value }
            else if (name === "City") return { ...prev, city: value }
            else if (name === "Pincode") return { ...prev, pincode: value }
        })
    }
    //console.log(details)
    return (
        <div className="edituserdetails">
            <h2 className="b pa4">Edit Your Details</h2>
            <EditDetailsField title={"Email"} type={"email"} onChange={handleChange} value={details.email} />
            <EditDetailsField title={"Password"} type={"password"} onChange={handleChange} />
            <EditDetailsField title={"Username"} type={"username"} onChange={handleChange} value={details.username} />
            <EditDetailsField title={"Phone"} type={"number"} onChange={handleChange} value={details.phone} />
            <EditDetailsField title={"FlatNo./HouseNo."} type={"number"} onChange={handleChange} value={details.flatno} />
            <EditDetailsField title={"Area"} type={"text"} onChange={handleChange} value={details.area} />
            <EditDetailsField title={"City"} type={"text"} onChange={handleChange} value={details.city} />
            <EditDetailsField title={"Pincode"} type={"number"} onChange={handleChange} value={details.pincode} />

            <div className="tc submit-btn pa5">
                <input type="submit"
                    onClick={() => { props.changeUser(details); props.onRouteChange('userhome') }} value="Save Changes" className="btn bg-orange white pointer grow" />
            </div>
        </div>
    )
}
export default EditUserDetails;

const CartItem = ({ name, qty, price, total_price }) => {

    return (
        <tr>
            <td class="text-left">{`${name} `}</td>
            <td className="text-center">{qty}</td>
            <td class="text-right">Rs. {total_price}</td>
        </tr>
    )
}
export default CartItem;





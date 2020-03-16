import Price from "../catalog/price";

const CartItem = ({item}) => {
    return (
        <tr>
            <td className="image">
                <img src={item.image} alt={item.name} />
            </td>
            <td className="detail">
                <strong>{item.name}</strong>
                <p>{item.desc}</p>
            </td>
            <td className="price">
                <Price price={item.price} />
            </td>
            <td className="qty">{item.qty}</td>
            <td className="sub-total"></td>
        </tr>
    );
}

export default CartItem;

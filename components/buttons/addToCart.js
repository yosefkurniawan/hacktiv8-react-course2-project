import Button from "./default";
import styles from "./addToCart.module.css";
const AddToCart = () => {
    return <Button className={`add-to-cart ${styles.addToCart}`} title="Add to Cart" />;
};

export default AddToCart;

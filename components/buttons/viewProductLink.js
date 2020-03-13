import Button from "./default"

const ViewProductLink = ({ products, productid }) => {
    return (
            <Button
                href={`/product/${productid}`}
                title="View"
                type="link"
            />
    );
};

export default ViewProductLink;

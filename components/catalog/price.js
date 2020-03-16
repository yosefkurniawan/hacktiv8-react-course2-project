function Price({price}) {
    let _price = price
            .toFixed(2) // always two decimal digits
            .replace(".", ",") // replace decimal point character with ,
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    _price = "Rp " + _price;
    return <span className="price">{_price}</span>;
}

export default Price
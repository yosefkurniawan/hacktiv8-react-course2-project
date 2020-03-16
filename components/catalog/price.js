function Price({price}) {
    const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2
    });
    return <div className="price">{formatter.format(price)}</div>;
}

export default Price
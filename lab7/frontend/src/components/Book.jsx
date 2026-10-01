export default function Book(props) {
    const { rating, bname, price, qty, picUrl } = props.book;
    const qtystyle = {
        fontSize: "1rem",
        color: "blue",
        textAlign: "center",
        backgroundColor: "yellow",
        padding: "10px",
    };
  return (
    <div className="book">
      <img src={picUrl}
        alt={bname} />
      <h1> {bname} </h1>
          <h2>Price: {price}</h2>
          <h3 style={qtystyle}>
              Quantity: {qty}
              <br></br>
      Rating: {rating}</h3>
      <button> Buy Now</button>
    </div>
  );
}

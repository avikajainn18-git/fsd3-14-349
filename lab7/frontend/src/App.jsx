const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "React Design Pattern",
  price: 1199,
  qty: 10,
  rating: 5.0,
}

const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/71CDMyWkq0L._AC_UY327_FMwebp_QL65_.jpg",
  bname: "The Road to React",
  price: 2886,
  qty: 11,
  rating: 4.5,
}

function Book(props) {
  return (
    <div>
      <img src={props.book.picUrl}
        alt={props.book.bname} />
      <h2> {props.book.bname} </h2>
      <h2>{props.book.price}</h2>
      <h3>Quantity: {props.book.qty}</h3>
      <h3>Rating: {props.book.rating}</h3>
    </div>
  );
}


export default function App() {
  return (
    <>
      < h1 >Hello React</h1 >
      <Book book={b1} />  
      <Book book={b2} />  
    </> 
  )
}
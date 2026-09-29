const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "React Design Pattern",
  price: 1199,
  qty: 10,
  rating: 5.0,
}

function Book() {
  return (
    <div>
      <img src={b1.picUrl}
      alt = {b1.bname}/>
      <h2> {b1.bname} </h2>
      <h2>{b1.price}</h2>
      <h3>Quantity: {b1.qty}</h3>
      <h3>Rating: {b1.rating}</h3>
    </div>
  )
}


export default function App() {
  return (
    <>
      < h1 >Hello React</h1 >
      <Book/>  
    </> 
  )
}
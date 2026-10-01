import Book from "./components/Book"
const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "React Design Pattern",
  price: 1199,
  qty: 10,
  rating: 4.2,
};

const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/71CDMyWkq0L._AC_UY327_FMwebp_QL65_.jpg",
  bname: "The Road to React",
  price: 2886,
  qty: 11,
  rating: 4.5,
};



export default function App() {
  return (
    <>
      < h1 >Online Book Store</h1 >
      <div className="container">
        <Book book={b1} />
        <Book book={b2} />
      </div>
    </> 
  )
}
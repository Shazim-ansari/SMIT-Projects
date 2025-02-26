import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const products = [
  {
    id: 1,
    Image: 'https://m.media-amazon.com/images/I/61nJopEvJ6L._AC_UL320_.jpg',
    title: "Anne Klein Women's Bracelet Watch",
    price: "29"
  },
  {
    id: 2,
    Image: 'https://m.media-amazon.com/images/I/81-HbGIsxVL._AC_UL320_.jpg',
    title: "Nine West Women's Floral Dial Bracelet Watch",
    price: "18"
  },
  {
    id: 3,
    Image: 'https://m.media-amazon.com/images/I/71QDsaFZF9L._AC_UL320_.jpg',
    title: "Anne Klein Women's Genuine Diamond Dial Bangle Watch",
    price: 200
  },
  {
    id: 4,
    Image: 'https://m.media-amazon.com/images/I/61u9FaAuQGL._AC_UL320_.jpg',
    title: "Anne Klein Women's Leather Strap Watch",
    price: "24"
  },
  {
    id: 5,
    Image: 'https://m.media-amazon.com/images/I/81PrmvhOIVL._AC_UL320_.jpg',
    title: "Anne Klein Women's Leather Strap Watch",
    price: "17"
  },
  {
    id: 6,
    Image: 'https://m.media-amazon.com/images/I/71gffDfaUuL._AC_UL320_.jpg',
    title: "Anne Klein Women's 105491SVTT Two-Tone Dress Watch",
    price: "26"
  },
  {
    id: 7,
    Image: 'https://m.media-amazon.com/images/I/81aSNKlJJLL._AC_UL320_.jpg',
    title: "Smart Watch for Women Fitness Tracker: Gold Smart Watches",
    price: "59"
  },
  {
    id: 8,
    Image: 'https://m.media-amazon.com/images/I/71VZmuIF54L._AC_UL320_.jpg',
    title: "OLEVS Women Watches, Elegant Rose Gold Small Wrist Ladies",
    price: "35"
  },
];

const Products = () => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded">
          <img className="w-40 py-5 px-5" src={product.Image} alt="" srcset="" />
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p>${product.price}</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="mt-2 bg-green-500 px-3 py-2 text-white rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
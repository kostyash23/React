import React from "react";
import "./Main.css";
import Cart from "../Cart/Cart";

let cartItems = [
  {
    name: "Common Projects",
    model: "Bball High",
    color: "White",
    price: "$549",
    quantity: 1
    // img: item1
  },
  {
    name: "Maison Margiela",
    model: "Future Sneakers",
    color: "White",
    price: "$870",
    quantity: 3
    // img: item2
  },
  {
    name: "Our Legacy",
    model: "Brushed Scarf",
    color: "Brown",
    price: "$349",
    quantity: 4
    // img: item3
  }
];

const Main = () => {
  return (
    <main className="main">
      Main
      <Cart cartItems={cartItems} />
    </main>
  );
};
export default Main;

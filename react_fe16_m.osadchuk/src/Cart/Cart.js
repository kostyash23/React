import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div class="shopping-cart">
      <div class="title">Shopping Bag</div>
      
{cartItems.map(el => (
  <div key={el.name} class="item">
        <div class="buttons">
        <span class="delete-btn"></span>
        <span class="like-btn"></span>
        </div>
      </div>

      <div class="description">
        <span>Common Projects</span>
        <span>Bball High</span>
        <span>White</span>
      </div>

      <div class="quantity">
        <button class="plus-btn" type="button" name="button">
          <img src="plus.svg" alt="" />
        </button>
        <input type="text" name="name" value="1"></input>
        <button class="minus-btn" type="button" name="button">
        </button>
      </div>
      <div class="total-price">$549</div>
))}
      
    </div>
  );
};

export default Cart;

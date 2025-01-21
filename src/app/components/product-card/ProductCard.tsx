"use client";
import Link from "next/link";
import { RootState } from "../../GlobalRedux/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/app/GlobalRedux/Features/cart/cart-slice";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function NewProductList() {
  const newProducts = useSelector(
    (state: RootState) => state.products.newProducts
  );
  const isLoading = useSelector(
    (state: RootState) => state.products.inProgress
  );

  const dispatch = useDispatch();
  const handleAddToCart = (product: {
    id: number;
    title: string;
    image: string;
    price: number;
  }) => {
    dispatch(addToCart(product)); // Dispatch the product to the Redux store
    console.log(`Product with ID ${product.id} added to cart.`);
  };

  /********************************************************** */
  // Filter products based on search text
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const filteredArrayProducts = newProducts.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );
  /********************************************************** */
  return (
    <div className="items1">
      <form
        className="d-flex mb-4 p-2"
        onSubmit={handleSearchSubmit}
        role="search"
      >
        <input
          className="form-control me-2"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchChange}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>

      {isLoading && <h5>Loading..Please wait...</h5>}

      <div className="d-flex flex-wrap justify-content-center align-items-start gap-4">
        {filteredArrayProducts.map((p) => (
          <div key={p.id} className="product-item">
            <div className="row">
              <div className="col">
                <div className="items1">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={p.image}
                      alt={p.title}
                      className="product-image"
                      height={75}
                      width={75}
                      style={{ marginLeft: "100px" }}
                    />
                    <div className="card-body">
                      <h6>+3 colors/patterns</h6>
                      <h6>Sponsered</h6>
                      <Link
                        href={"/products/" + p.id}
                        style={{ textDecoration: "none" }}
                      >
                        <h6>{p.title}</h6>
                      </Link>
                      <h4>{p.category}</h4>
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <div
                        style={{ color: "red", textDecoration: "line-through" }}
                      >
                        Save 50%
                      </div>
                      <h4>₹{p.price}</h4>MRP.999 Free Delivery for Prime Members
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        handleAddToCart({
                          id: p.id,
                          title: p.title,
                          image: p.image,
                          price: p.price,
                        })
                      }
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

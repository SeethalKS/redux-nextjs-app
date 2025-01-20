'use client'
import Link from 'next/link';
import { RootState } from '../../GlobalRedux/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/app/GlobalRedux/Features/cart/cart-slice';
import './ProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function NewProductList() {
  const newProducts = useSelector((state: RootState) => state.products.newProducts);
  const isLoading = useSelector((state: RootState) => state.products.inProgress);


  const dispatch = useDispatch();
  const handleAddToCart = (product: { id: number; title: string; image: string;price:number}) => {
    dispatch(addToCart(product)); // Dispatch the product to the Redux store
    console.log(`Product with ID ${product.id} added to cart.`);
  };

  return (
    <div className="items1">
   
      {/* <h3>NewProductList</h3> */}
          {isLoading && <h5>Loading..Please wait...</h5>}
          <div className="d-flex flex-wrap justify-content-center align-items-start gap-4">
          {newProducts && newProducts.map((p) => (
          <div key={p.id} className="product-item">
         
         <div className="row">
         <div className="col">
        
          <div className='items1'>
          <div className="card" style={{width: '18rem'}}>
          {/* <p>ID: {p.id}</p> */}
          <img src={p.image} alt={p.title} className="product-image" height={75} width={75} style={{marginLeft:'100px'}} />
          <div className="card-body">
          <h6>+3 colors/patterns</h6>
          <h6>Sponsered</h6>
          <Link href={'/products/'+p.id} style={{textDecoration:'none'}}>
          <h6>{p.title}</h6>
          </Link>
          <h4>{p.category}</h4>
          <FontAwesomeIcon icon={faStar} className='star' /><FontAwesomeIcon icon={faStar} className='star' /><FontAwesomeIcon icon={faStar} className='star' /><FontAwesomeIcon icon={faStar} className='star' /><FontAwesomeIcon icon={faStar} className='star' />
          
          <div style={{ color: "red", textDecoration: "line-through" }}>
            Save 50%
          </div>
          <h4>₹{p.price}</h4>MRP.999
          Free Delivery for Prime Members
          </div>
          <button className="btn btn-primary" onClick={() => handleAddToCart({ id: p.id, title: p.title, image: p.image,price:p.price})}
                  >
          Add to cart
        </button>
          </div>
        
       </div>

          </div>
          </div>
         

        </div>
        
      ))}</div>
      </div>
    
  );
}
{/* <Link href={'/products/'+prod.id}>
<div onClick={selectprod}>
     <img src={prod.image} width={50}/>
     {
       prod.title
     }
</div>
</Link> */}
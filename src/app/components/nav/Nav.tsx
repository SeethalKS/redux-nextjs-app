
import Link from 'next/link'
import React from 'react'
import './Nav.css'
import logo from '../../../assets/amazonlogo.png';
import Image from 'next/image';

export default function Nav() {
  return (
    <div className='main'>
    <div style={{ backgroundColor: 'black',marginTop:'-11px'}}>
      
      <nav className="navbar navbar-expand-lg" >
    <div className="container-fluid" style={{ backgroundColor: 'black',zIndex:'1'}}>
    <Link href="/home" className="navbar-brand" style={{ color: 'white',padding:'15px'}}>
      Redux
      {/* <Image src={logo} alt="Logo" width={70} height={70} /> */}
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link className='nav-link active' href='/home' style={{ color: 'white'}}>Home</Link>
            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
          </li>
          <li className="nav-item">
          <Link className='nav-link' href='/products' style={{ color: 'white'}}>Products</Link>
            {/* <a className="nav-link" href="#">Products</a> */}
          </li>
          <li className="nav-item">
          <Link className='nav-link' href='/cart'  style={{ color: 'white'}}>Cart</Link>
            {/* <a className="nav-link" href="#">Products</a> */}
          </li>
          <li className="nav-item">
          <Link className='nav-link' href='/categories' style={{ color: 'white'}}>Categories</Link>
            {/* <a className="nav-link" href="#">Products</a> */}
          </li>
          <li className="nav-item">
            <Link className='nav-link' href={'/about'} style={{ color: 'white'}}>About Us</Link>
            {/* // <a className="nav-link" href='/about-us'></a> */}
          </li>
        </ul>
      </div>
    </div>
  </nav>


  </div>

  </div>
  )
}

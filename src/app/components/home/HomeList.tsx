import Link from 'next/link';
import { RootState } from '../../GlobalRedux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

export default function Home() {
  const newimages = useSelector((state: RootState) => state.home.newImages);
  const isLoading = useSelector((state: RootState) => state.home.inProgress);

  return (
    <div style={{width:'350px'}}>
      {/* <h3>Home</h3> */}
      {isLoading && <h5>Loading... Please wait...</h5>}
      {newimages && (
        <div id="carouselExampleIndicators" className="carousel slide colrs">
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {newimages.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Carousel Inner */}
          <div className="carousel-inner">
            {newimages.map((p, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}  style={{marginLeft:'50px'}}
              >
                <img
                  src={p.image}
                  className="d-block w-180"
                 
                  height={300}
                  width={300}

                  style={{alignItems:'center'}}
                />
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}

      <div className="setalign" style={{marginLeft:'60px'}}>
        <Link href="../../products" legacyBehavior>
          <a className="navlink" style={{textDecoration:'none'}}>
            <h4>Shop Now</h4>
          </a>
        </Link>
      </div>
    </div>
  );
}

import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1_2_1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';

export default function Carousal() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner" id='carousel'>
                    <div className='carousel-caption' style={{zIndex:"10"}}>
                        
                            <div className="container-fluid">
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success text-white " type="submit">Search</button>
                                </form>
                            </div>
                        
                    </div>
                    <div className="carousel-item active">
                        <img src="https://www.pngkey.com/png/full/275-2752941_original-size-is-900-700-pixels-discounts.png" className="d-block w-100 " style={{filter: "brightness(30%"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" style={{filter: "brightness(30%"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img1_2_1} className="d-block w-100" style={{filter: "brightness(30%"}} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

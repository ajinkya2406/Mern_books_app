import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/cards/Card'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1_2_1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import Carousal from '../components/Carousal'
import { data } from 'react-router-dom'


export default function Home() {

    const [bookCat, setbookCat] = useState([]);
    const [bookitem, setbookitem] = useState([]);
    const [bookClass, setbookClass] = useState([]);
    const [search, setSearch] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/bookData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json();

        setbookitem(response[0]);
        setbookCat(response[1]);
        setbookClass(response[2]);
    }

    useEffect(() => {
        loadData();
    }, [])


    return (
        <div>
            <div><Navbar /></div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                    <div className="carousel-inner" id='carousel'>
                        <div className='carousel-caption' style={{ zIndex: "10" }}>

                            <div className="container-fluid">
                                <div className="d-flex justify-content-centre">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                                    {/* <button className="btn btn-outline-success text-white " type="submit">Search</button> */}
                                </div>
                            </div>

                        </div>
                        <div className="carousel-item active">
                            <img src="https://grbathla.com/wp-content/uploads/2021/02/9th-10th-Blog.jpg" className="d-block w-100 " style={{ filter: "brightness(30%" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://rukminim2.flixcart.com/image/850/1000/kxkqavk0/regionalbooks/f/k/q/class-10th-ncert-textbook-maths-science-social-science-kartika-original-imag9zvfe8tzmzex.jpeg?q=20&crop=false" className="d-block w-100" style={{ filter: "brightness(30%" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.tppl.org.in/2020/9476-large_default/sppu-bca-2-semester-5-in-1-combo-pack.jpg" className="d-block w-100" style={{ filter: "brightness(30%" }} alt="..." />
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
            <div className='container'>
            
                {
                    bookCat.length > 0
                        ? bookCat.map((data) => {
                            return (<div className='row mb-3'>
                                <div key={data._id} className='fs-3 m-3'>
                                    {data.CategoryName}
                                </div>           
                                <hr/>
                                

                                <hr />
                                
                                {bookitem.length > 0 ? bookitem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name?.toLowerCase().includes(String(search || "").toLowerCase())))
                                    .map(filteritems => {
                                        return (
                                            <div key={filteritems._id} className='col-12 col-md-6 col-lg-3'>
                                                <Card 
                                                    options={filteritems.options[0]}
                                                    bookitem = {filteritems}
                                                />
                                            </div>
                                        )
                                    }) : <div>no such data found</div>}
                            </div>
                            )
                        }) : ""
                }



            </div>
            <div><Footer /></div>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/cards/Card'
import Carousal from '../components/Carousal'
import { data } from 'react-router-dom'


export default function Home() {

    const [bookCat, setbookCat] = useState([]);
    const [bookitem, setbookitem] = useState([]);

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
    }

    useEffect(() => {
        loadData();
    }, [])


    return (
        <div>
            <div><Navbar /></div>
            <div><Carousal /></div>
            <div className='container'>
                {
                    bookCat.length > 0
                        ? bookCat.map((data) => {
                            return (<div>
                                <div key={data._id} className='fs-3 m-3'>
                                    {data.CategoryName}
                                </div>
                                <hr/>
                                {bookitem.length>0 ? bookitem.filter((item)=>item.CategoryName === data.CategoryName)
                                .map(filteritems =>{
                                    return(
                                        <div key={filteritems._id}>
                                            <Card book={filteritems} />
                                        </div>
                                    )
                                }):<div>no such data found</div>}
                            </div>
                            )
                        }) : ""
                }

                <Card />
            </div>
            <div><Footer /></div>
        </div>
    )
}

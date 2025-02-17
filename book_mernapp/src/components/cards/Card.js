import React, { useState } from 'react'
import { useDispatchCart, useCart } from '../ContextReducer';
export default function Card(props) {

    let dispatch = useDispatchCart();
    let data = useCart();
    let options = props.options;
    let priceOptions = Object.keys(options);
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")
    const handleAddToCart = async () => {
        await dispatch({type:"ADD",id:props.bookitem._id, name: props.bookitem.name, price:props.finalPrice, qty:qty, size:size})
        console.log(data)
    }

    return (
        <div>
            <div>
                <div>
                    <div className="card mt-3 " style={{ "width": "18rem", "maxHeight": "600px" }}>
                        <img src={props.bookitem.img} className="card-img-top justify-content-centre d-flex align-items-center" alt="..." style={{ height: "360px", objectFit: "fill" }} />
                        <div className="card-body">
                            <h5 className="card-title">{props.bookitem.name}</h5>


                            <div className='container w-100' >
                                <select className=' m-2 h-100 bg-success text-white' onChange={(e)=>setQty(e.target.value)}>
                                    {
                                        Array.from(Array(6), (e, i) => {
                                            return (
                                                <option key={i} value={i + 1}>{i + 1}</option>
                                            )
                                        })
                                    }
                                </select>

                                <select className='m-2 h-100 bg-success rounded text-white' onChange={(e)=>setSize(e.target.value)}>
                                    {priceOptions.map((data) => (
                                        <option key={data} value={data}>{data}</option>
                                    ))}
                                </select>

                                <div className='d-inline h-100 fs-5'>
                                    Total Price
                                </div>
                            </div>
                            <hr />
                            <button className={`btn btn-success justify-centre ms-2`} onClick={handleAddToCart}>add to cart</button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

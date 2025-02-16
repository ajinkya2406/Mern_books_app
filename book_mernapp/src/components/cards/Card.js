import React from 'react'

export default function Card(props) {

    let options = props.options;
    let priceOptions = Object.keys(options);


    return (
        <div>
            <div>
                <div>
                    <div className="card mt-3 " style={{ "width": "18rem", "maxHeight": "600px" }}>
                        <img src="https://m.media-amazon.com/images/I/81+Eh-enKAL._AC_UF1000,1000_QL80_.jpg" className="card-img-top justify-content-centre d-flex align-items-center" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{props.bookName}</h5>
                            

                            <div className='container w-100' >
                                <select className=' m-2 h-100 bg-success text-white'>
                                    {
                                        Array.from(Array(6), (e, i) => {
                                            return (
                                                <option key={i} value={i + 1}>{i + 1}</option>
                                            )
                                        })
                                    }
                                </select>

                                <select className='m-2 h-100 bg-success rounded text-white'>
                                    {priceOptions.map((data) => (
                                        <option key={data} value={data}>{data}</option>
                                    ))}
                                </select>

                                <div className='d-inline h-100 fs-5'>
                                    Total Price
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer'
import img2 from '../images/img2.jpg';

export default function Cart() {

    let data = useCart();
    let dispatch = useDispatchCart();
    if (data.length === 0) {
        return (
            <div>
                <div className='m-5 w-100 text-centre fs-3'>The Cart is Empty!</div>
            </div>
        )
    }

    let totalPrice = data.reduce((total, book) => total + book.price, 0)
    return (
        <div>
            <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md '>
                <table className='table table-hover'>
                    <thread className='text-success fs-4'>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Option</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'></th>
                        </tr>
                    </thread>
                    <tbody>
                        {data.map((book, index) => (
                            <tr>
                                <th scope='row'>{index + 1}</th>
                                <td>{book.name}</td>
                                <td>{book.quantity}</td>
                                <td>{book.size}</td>
                                <td>{book.price}</td>
                                <td><button type='button' className='btn p-0'><img src={img2} alt='delete' onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button></td>
                            </tr>
                        ))

                        }
                    </tbody>
                </table>
                <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
                <div>
                    <button className='btn bg-success mt-5'> Check Out </button>
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Model1 from '../Model1';
import Cart from '../screen/Cart';
import { useCart } from './ContextReducer';

export default function Navbar() {

let data = useCart() || [];
const[cartView, setCartView] = useState(false)  
const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  }

  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">EduMat</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav me-auto mb-2">
              <Link className="nav-link active fs-5.5" aria-current="page" to="/">Home</Link>

              {(localStorage.getItem("authToken")) ?
                <Link className="nav-link active fs-5.5" aria-current="page" to="/">My Order</Link>
                : ""}

            </div>
            {(!localStorage.getItem("authToken")) ?
              <div className='d-flex'>

                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
              </div>
              :
              <div>
                <div className='btn bg-white text-success mx-2'onClick={()=>{setCartView(true)}}>
                  My Cart {" "}
                  <Badge pill bg="danger" className="ms-1">{data.length}</Badge>
                </div>
                {cartView?<Model1 onClose={()=>setCartView(false)}><Cart/></Model1>:null}
                <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
                  Logout
                </div>
              </div>
            }
          </div>
        </div>
      </nav>

    </div>
  )
}

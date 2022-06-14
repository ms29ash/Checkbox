import React, { useEffect } from 'react'
import '../Styles/Navbar.css'
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { resetCart } from '../features/item/ItemSlice'



function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    console.log(location.pathname)

    const cart = useSelector((state) => state?.item?.cart)
    const amount = (basket) =>
        basket?.length === 0 ? 0 : basket
            .map(item => item.item.price * item.quantity)
            .reduce((itemPrice, accPrice) => accPrice + itemPrice)
        ;
    const totalItems = (basket) => basket?.length === 0 ? 0 : basket
        .map(item => item.quantity)
        .reduce((itemPrice, accPrice) => accPrice + itemPrice)
        ;

    return (

        <>
            <div className="nav">
                <img onClick={() => { navigate('/') }} src="./images/logo.png" className="nav__img" alt="" />
                {location.pathname === '/bill' ? "" : <div className="price" >
                    <div className="stat">

                        <h3 className="subtotal">Total Items {cart && totalItems(cart)} </h3>
                        <h3 className="subtotal"> Total Price  &#8377;{cart ? amount(cart) : 0}</h3>
                    </div>
                    <Button onClick={() => dispatch(resetCart())} disabled={cart && amount(cart) < 1} className="reset__button proceed__button" variant="contained">Reset</Button>
                    <Button onClick={() => { navigate('/bill') }} disabled={cart && amount(cart) < 1} className="proceed__button" variant="contained">Proceed</Button>

                </div>}
            </div>
            <Outlet />

        </>

    )
}

export default Navbar

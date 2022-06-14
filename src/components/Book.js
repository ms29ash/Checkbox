import React, { useEffect, useState, useRef } from 'react'
import '../Styles/Book.css'
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../features/item/ItemSlice'
function Book(props) {
    const currentItem = useSelector((state) => state.item.currentItem)
    const [Styles, setStyles] = useState({})

    const dispatch = useDispatch()

    const { name, img, price } = currentItem.item || {}


    const [number, setNumber] = useState(0)

    useEffect(() => {

        setStyles(() => {
            if (props.show) {
                return {
                    transform: 'translateX(0)',
                    width: '30vw'
                }
            } else {
                return null;
            }
        })
    }, [props.show])


    return (
        <>
            {<div className="book" style={Styles}>
                <img src={`./images/${img}`} alt="" className="book__img" />
                <div className="book__details">

                    <h1>{name}</h1>
                    <h3>&#8377;{price}</h3>
                </div>
                <div className="book__price">

                    <div className="item__no">



                        <IconButton disabled={number < 1} onClick={() => { setNumber(number - 1) }} className="icon_btn" color="primary" aria-label="upload picture" component="span">
                            <IndeterminateCheckBoxIcon />

                        </IconButton>
                        <h5 >{number}</h5>
                        <IconButton onClick={() => { setNumber(number + 1) }} className="icon_btn" color="primary" aria-label="upload picture" component="span">
                            <AddBoxIcon />
                        </IconButton>
                    </div>
                    <h3>&#8377;{price * number}</h3>

                </div>
                <Button disabled={number < 1} className="continue__button" variant="contained" onClick={() => {
                    dispatch(addItem({
                        item: currentItem.item,
                        quantity: number,
                    }), setNumber(0))

                }} >Continue</Button>

            </div>}
        </>
    )
}

export default Book

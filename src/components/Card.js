import React from 'react'
import '../Styles/Card.css'
import { useSelector, useDispatch } from 'react-redux'
import { currentItem } from '../features/item/ItemSlice'


function Card(props) {
    const { img, price, name } = props?.item || {}
    const dispatch = useDispatch()
    const clickHandler = () => {

        props.setShow(true);
        dispatch(currentItem({
            item: props.item
        }))

    }
    return (
        <div className="card" onClick={clickHandler} >
            <img className="card__img" src={`./images/${img}`} alt="" />
            <div className="card__text">
                <h2>{name}</h2>
                <h3>&#8377;{price}</h3>
            </div>
        </div>
    )
}

export default Card

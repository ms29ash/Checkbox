import Card from './Card';
import Book from './Book';
import { useState } from 'react'
import { useSelector } from 'react-redux'
// import { Routes, Route, Link } from "react-router-dom";



function Home() {
    const [show, setShow] = useState(false);
    const products = useSelector((state) => state.item.products)


    return (
        <>
            <div className="card__container">

                {
                    products?.map((item) => {

                        return <Card setShow={setShow} key={item.name} item={item} />
                    })
                }
            </div>
            <Book show={show} />
        </>
    );
}

export default Home;

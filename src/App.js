import './App.css';
import Page from './components/Page';
import Navbar from './components/Navbar';
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Link } from "react-router-dom";
import Bill from './components/Bill';
import Home from './components/Home';



function App() {
  const [show, setShow] = useState(false);
  const products = useSelector((state) => state.item.products)


  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="bill" element={<Bill />} />
        </Route>
        <Route path="*" element={<Page />} />

      </Routes>
      {/* <div className="card__container">

        {
          products?.map((item) => {

            return <Card setShow={setShow} key={item.name} item={item} />
          })
        }
      </div> */}



    </div>
  );
}

export default App;

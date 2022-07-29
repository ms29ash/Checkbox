import React from 'react';
import '../Styles/Bill.css';
import { useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { useDispatch } from 'react-redux'
import { addItem } from '../features/item/ItemSlice'




function Bill() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.item.cart)



    const subtotal = (products) =>
        products?.length === 0 ? 0 : products
            .map(item => item.item.price * item.quantity)
            .reduce((itemPrice, accPrice) => accPrice + itemPrice)
        ;

    return (

        <div className="bill">
            <h1 className="bill__head">Bill</h1>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={3}>
                                Details
                            </TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Qty.</TableCell>
                            <TableCell align="right">Unit</TableCell>
                            <TableCell align="right">Sum</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product, index) => (
                            <TableRow key={index}>
                                <TableCell>{product.item.name}</TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={() => {

                                        dispatch(addItem({
                                            item: product.item,
                                            quantity: -1,
                                        }))
                                    }} className="icon_btn no-print" color="primary" aria-label="upload picture" component="span">
                                        <IndeterminateCheckBoxIcon />
                                    </IconButton>
                                    {product.quantity}
                                    <IconButton onClick={() => {

                                        dispatch(addItem({
                                            item: product.item,
                                            quantity: 1,
                                        }))
                                    }
                                    } className="icon_btn no-print" color="primary" aria-label="upload picture" component="span">
                                        <AddBoxIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right">{product.item.price}</TableCell>
                                <TableCell align="right">{product.item.price * product.quantity}</TableCell>
                            </TableRow>
                        ))}

                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">{subtotal(products)}</TableCell>
                        </TableRow>
                        <TableRow className="no-print">
                            <TableCell colSpan={3} align="right"><Button onClick={() => window.print()} className="proceed__button " variant="contained">Proceed</Button></TableCell>

                        </TableRow>

                    </TableBody>
                </Table>


            </TableContainer>


        </div>
    )
}

export default Bill

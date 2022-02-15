import { Button, Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { TableCell } from '@mui/material';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hook/useAuth';

const ManageAllOrders = () => {
    const { user, isLoading } = useAuth();
    const [orders, setOrders] = useState([]);



    useEffect(() => {
        fetch(`https://young-ravine-53752.herokuapp.com/allOrders`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setOrders(data))
    }, [])


    const approvedOrder = id => {
        const proceed = window.confirm('Are you sure, you want to Approved?');
        if (proceed) {
            const url = `https://young-ravine-53752.herokuapp.com/modified/${id}`
            fetch(url, {
                method: "PUT"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Order Shipped')
                        fetch(`https://young-ravine-53752.herokuapp.com/allOrders`)
                            .then(res => res.json())
                            // .then(data => console.log(data))
                            .then(data => setOrders(data))
                    }
                })
        }

    }

    const cancelOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://young-ravine-53752.herokuapp.com/deleteOrder/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Order cancel successfully')
                        const remain = orders.filter(order => order._id !== id)
                        setOrders(remain);
                    }

                })
        }

    }
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: '50%' }} aria-label="Ordered List">
                    <TableHead>
                        <h3 >Manage All Orders {orders.length}</h3>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Item Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Shipping</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.customerName}
                                </TableCell>
                                <TableCell align="right">{row.orderName}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right"><Button onClick={() => approvedOrder(row._id)}>Shipped</Button></TableCell>
                                <TableCell align="right"><Button onClick={() => cancelOrder(row._id)}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </div >

    );
};

export default ManageAllOrders;
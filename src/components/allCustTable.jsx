import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'S.No', width: 84 },
    { field: 'account_no', headerName: 'Account Numbers', type: 'number', width: 180 },
    { field: 'name', headerName: 'Customer Name', width: 200 },
    { field: 'address', headerName: 'Customer Address', width: 260 },
    { field: 'email', headerName: 'Customer Email', width: 170 },
    { field: 'phone_no', headerName: 'Customer Contact', type: 'number', width: 170 },
    { field: 'balance', headerName: 'Customer Account Balance', type: 'number', width: 230 },
];


export default function DataTable({ allUsers = [], totalLength, handleClick }) {

    const handlingClick = (e) => {
        handleClick(e.row)
        // console.log('running', e)
    }

    return (

        <div style={{ height: 400, width: '100%' }}>
            {
                !allUsers.length ?
                    <h1>Loading...</h1> :
                    <DataGrid rows={allUsers} columns={columns} onRowDoubleClick={(e) => handlingClick(e)} pageSize={5} />
            }
        </div>
    );

}
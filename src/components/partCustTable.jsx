import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


const columns = [
    { field: 'account_no', headerName: 'Account Numbers', type: 'number', width: 200 },
    { field: 'name', headerName: 'Customer Name', width: 200 },
    { field: 'address', headerName: 'Customer Address', width: 300 },
    { field: 'email', headerName: 'Customer Email', width: 200 },
    { field: 'phone_no', headerName: 'Customer Contact', type: 'number', width: 170 },
    { field: 'balance', headerName: 'Customer Account Balance', type: 'number', width: 230 },
];


const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
];

export default function PartCustTable({ state }) {
    console.log(state)
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid autoHeight={true} rows={state} columns={columns} pageSize={1} />
        </div>
    );
}
import { Table, TableBody,TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Api = () => {

var[user,setUsers]=useState([]);
axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response.data)
            setUsers(response.data);
        })

  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>User Name</TableCell>
                        <TableCell>City</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {user.map((val)=>{
                        return(
                            <TableRow>
                                <TableCell >{val.name}</TableCell>
                                <TableCell >{val.username}</TableCell>
                                <TableCell >{val.address.city}</TableCell>
                            </TableRow>
                        )
                    })}
                    </TableBody>
                
            </Table>
        </TableContainer>
    </div>
  )
}

export default Api
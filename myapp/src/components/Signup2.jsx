import { Button,TextField,} from '@mui/material'
import React from 'react'

const Signup2 = () => {
  return (
    <div>
        <TextField variant='outlined' label='Name' /><br/><br></br>
        <TextField variant='outlined' label='Age' /><br/><br></br>
        <TextField variant='outlined' label='number' /><br/><br></br>
        <TextField variant='outlined' label='Password' /><br/><br></br>
        <Button variant='contained'>Submit</Button>
</div>
         



  )
}

export default Signup2
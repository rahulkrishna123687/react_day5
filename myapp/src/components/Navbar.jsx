import { AppBar,Button,Toolbar, Typography} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                 <Typography varient='h6'>myapp</Typography><br></br>
                 <Link to='/signup'>
                 <Button variant="contained">Login</Button></Link><br></br>
              
                 

                 <Link to='/l'>
                      <Button variant="contained">Login</Button> </Link> <br></br>  

                      <Link to='/v'>
                      <Button variant="contained">wel</Button> </Link> <br></br>
                      <Link to='/v'>
                      <Button variant="contained">wel</Button> </Link> <br></br>
                     

                      <Link to='/a'>
                  
                      <Button variant="contained">api</Button> </Link> <br></br>
                      </Toolbar>
                    </AppBar>
<br /><br /><br />
     </div>
  )
}

export default Navbar
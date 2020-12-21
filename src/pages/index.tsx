import { Button } from '@material-ui/core'
import * as  React from 'react'

import './main.css'



import {Link } from "gatsby";

export default () => {
    return (
        <div className='blogs'>
            
            
            

            <div style={{display: "flex", justifyContent: "space-around", flexFlow: "row-wrap" , alignItems: "center", width: "100%",}}>

          

            <div style={{textAlign: "center", margin: "0 auto"}}>
                <h1 style={{color:'black', marginTop:'320px'}}>Click here to navigate to Blog Page </h1>
                <Button variant="contained" color="primary" style={{marginTop:'20px', padding:'10px', width:'200px'}}>
                    <Link to = '/blogs' style={{color: "inherit", textDecoration: "none"}}>Click Here </Link>
                </Button>

            </div>

            </div>
        </div>
    )
}
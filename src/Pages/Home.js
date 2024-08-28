import React from 'react'


// ------------------------------------------------ Componnets ---------------------------------/
import { Divider,Button } from '@mui/material'
import './home.css'

// -----------------------------=Images -----------------------------
import Image from '../Assests/Images/hoemImage.png'


// ---------------------------------Icons ---------------------------------

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Home = () => {

    return (
        <div className="home-header">

            <div>
                <div style={{ marginTop: '1%', marginLeft: "8%" }}>
                    <img src={Image} alt="header" />
                </div>
            </div>

            <div style={{marginTop:'2%'}}>
                <h2 style={{ fontSize: "80px", color: 'orange', marginTop: '5%', color:'ne' }}>NIKE REACT</h2>
                <h2 style={{ fontSize: "80px", color: 'blue', marginTop: '-5rem' }}>INFINITY RUN 2</h2>
                <p style={{ fontSize: "16px" , marginTop: '-2rem' }}>lorem text content varient dummy of priniting </p>
                <p style={{ fontSize: "16px" , marginTop: '-1rem' }}>and type texting industry</p>
                <div>
                    <Button variant="contained" startIcon={<AddShoppingCartIcon />} style={{marginTop:'1%'}}>
                       Buy Now
                    </Button>
                </div>
            </div>



        </div>
    )
}
export default Home 
import React from 'react'

import { Divider, Button, Paper, Box } from '@mui/material'

import baseball from '../Assests/Images/baseball.png'
import nike from '../Assests/Images/nike.png'
import sneaker from '../Assests/Images/sneaker.png'


import SlipIn from '../Assests/Images/slip.png'
import SlipOn from '../Assests/Images/slipin.png'
import prestige from '../Assests/Images/prestige.png'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Product = () => {

    return (
        <div>


            <div style={{ marginLeft: '5%' }}>
                <h2 > CASUAL SHOES</h2>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: "30%",
                            height: "65vh",
                        },
                    }}
                >

                    <Paper elevation={2} >
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                                <img src={baseball} alt="header" style={{ width: '100%', display: 'flex', marginLeft: "100%", justifyContent: 'center', alignItems: 'center', marginTop: '3%' }} />
                            </div>
                            <div style={{ marginLeft: '5%' }}>
                                <h2 style={{ color: '#363958' }}> Nike Shoe</h2>
                                <p style={{ fontSize: "12px" }}>lorem text content varient dummy of priniting </p>
                                <p style={{ fontSize: "12px" }}>and type texting industry</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '5%' }}>
                                <h2 style={{ fontSize: '35px', color: 'orangered', margin: 0 }}>$234</h2>
                                <Button variant="contained" startIcon={<AddShoppingCartIcon />} style={{ height: '100%' }}>
                                    Buy Now
                                </Button>
                            </div>

                        </div>
                    </Paper>
                    <Paper elevation={2} >
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                                <img src={sneaker} alt="header" style={{ width: '100%', display: 'flex', marginLeft: "100%", justifyContent: 'center', alignItems: 'center', marginTop: '3%' }} />
                            </div>
                            <div style={{ marginLeft: '5%' }}>
                                <h2 style={{ color: '#363958' }}> snekaer baseball show</h2>
                                <p style={{ fontSize: "12px" }}>lorem text content varient dummy of priniting </p>
                                <p style={{ fontSize: "12px" }}>and type texting industry</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '5%' }}>
                                <h2 style={{ fontSize: '35px', color: 'orangered', margin: 0 }}>$234</h2>
                                <Button variant="contained" startIcon={<AddShoppingCartIcon />} style={{ height: '100%' }}>
                                    Buy Now
                                </Button>
                            </div>

                        </div>
                    </Paper>
                    <Paper elevation={2} >
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                                <img src={nike} alt="header" style={{ width: '100%', display: 'flex', marginLeft: "100%", justifyContent: 'center', alignItems: 'center', marginTop: '3%' }} />
                            </div>
                            <div style={{ marginLeft: '5%' }}>
                                <h2 style={{ color: '#363958' }}> Sneaker skate show</h2>
                                <p style={{ fontSize: "12px" }}>lorem text content varient dummy of priniting </p>
                                <p style={{ fontSize: "12px" }}>and type texting industry</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '5%' }}>
                                <h2 style={{ fontSize: '35px', color: 'orangered', margin: 0 }}>$234</h2>
                                <Button variant="contained" startIcon={<AddShoppingCartIcon />} style={{ height: '100%' }}>
                                    Buy Now
                                </Button>
                            </div>

                        </div>
                    </Paper>
                </Box>
            </div>
            <div style={{ marginLeft: '5%' }}>
                <h2 > FORMAL SHOES</h2>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: "30%",
                            height: "65vh",
                        },
                    }}
                >

                    <Paper elevation={2} >
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                                <img src={SlipIn} alt="header" style={{ width: '100%', display: 'flex', marginLeft: "100%", justifyContent: 'center', alignItems: 'center', marginTop: '3%' }} />
                            </div>
                            <div style={{ marginLeft: '5%' }}>
                                <h2 style={{ color: '#363958' }}> Prestige high-cut Leather</h2>
                                <p style={{ fontSize: "12px" }}>lorem text content varient dummy of priniting </p>
                                <p style={{ fontSize: "12px" }}>and type texting industry</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '5%' }}>
                                <h2 style={{ fontSize: '35px', color: 'orangered', margin: 0 }}>$234</h2>
                                <Button variant="contained" startIcon={<AddShoppingCartIcon />} style={{ height: '100%' }}>
                                    Buy Now
                                </Button>
                            </div>

                        </div>
                    </Paper>
                    <Paper elevation={2} >
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                                <img src={SlipOn} alt="header" style={{ width: '100%', display: 'flex', marginLeft: "100%", justifyContent: 'center', alignItems: 'center', marginTop: '3%' }} />
                            </div>
                            <div style={{ marginLeft: '5%' }}>
                                <h2 style={{ color: '#363958' }}> Slip on Formal shoe</h2>
                                <p style={{ fontSize: "12px" }}>lorem text content varient dummy of priniting </p>
                                <p style={{ fontSize: "12px" }}>and type texting industry</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '5%' }}>
                                <h2 style={{ fontSize: '35px', color: 'orangered', margin: 0 }}>$234</h2>
                                <Button variant="contained" startIcon={<AddShoppingCartIcon />} style={{ height: '100%' }}>
                                    Buy Now
                                </Button>
                            </div>

                        </div>
                    </Paper>
                    <Paper elevation={2} >
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                                <img src={prestige} alt="header" style={{ width: '100%', display: 'flex', marginLeft: "100%", justifyContent: 'center', alignItems: 'center', marginTop: '3%' }} />
                            </div>
                            <div style={{ marginLeft: '5%' }}>
                                <h2 style={{ color: '#363958' }}> Slip on Formal Shoe</h2>
                                <p style={{ fontSize: "12px" }}>lorem text content varient dummy of priniting </p>
                                <p style={{ fontSize: "12px" }}>and type texting industry</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '5%' }}>
                                <h2 style={{ fontSize: '35px', color: 'orangered', margin: 0 }}>$234</h2>
                                <Button variant="contained" startIcon={<AddShoppingCartIcon />} style={{ height: '100%' }}>
                                    Buy Now
                                </Button>
                            </div>

                        </div>
                    </Paper>
                </Box>

            </div>
        </div>
    )
}
export default Product 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-scroll";
import { Fade } from "react-reveal";
import config from 'react-reveal/globals';
config({ ssrFadeout: true });



function Navbar() {
    const [hide, ShowNav] = useState(true);
    const handleNav = () => {
        ShowNav(!hide);
    };
    return <>
        <Box sx={{
            position: "fixed", top: "30px",
            right: {
                md:"80px",
                sm: "60px",
                xs:"15px"
            },
            left:{
                sm:"unset",
                xs:"15px"
            }, background: "#ffffff", zIndex: 999, borderRadius: "30px", px: 1, display: "flex", justifyContent: "center", alignItems: "center", boxShadow: 3
        }}>
            <Button variant='text' sx={{
                fontSize: {
                    sm: "20px"
                }, fontWeight: 600, textTransform: "capitalize", "&:hover": {
                    background: 'transparent',
                },
                fontFamily: "'Balsamiq Sans', cursive",
                mr: {
                    sm:2,
                    xs:1
                }
            }} ><a id='navLink' href="">Discord<NorthEastIcon size={20} /></a></Button>
            <Button variant='text' sx={{
                fontSize: {
                    sm: "20px"
                }, fontWeight: 600, textTransform: "capitalize", "&:hover": {
                    background: 'transparent',
                },
                fontFamily: "'Balsamiq Sans', cursive",
                mr: {
                    sm:2,
                    xs:1
                }
            }} ><a id='navLink' href="">Twitter<NorthEastIcon size={20} /></a></Button>
            <Button variant='text' sx={{
                fontSize: {
                    sm: "20px"
                }, fontWeight: 600, textTransform: "capitalize", "&:hover": {
                    background: 'transparent',
                },
                fontFamily: "'Balsamiq Sans', cursive",
                mr: {
                    sm:2,
                    xs:1
                }
            }} ><a id='navLink' href="">Members Only<NorthEastIcon size={20} /></a></Button>
            <Button variant='text' sx={{
                fontWeight: 600, textTransform: "capitalize", "&:hover": {
                    background: 'transparent',
                },
                cursor: "pointer",
                color: "#f87171",
            }}
                onClick={handleNav}
            >
                {hide ? <MenuIcon sx={{ fontSize: '40px' }} /> : <CloseIcon sx={{ fontSize: '40px' }} />}
            </Button>
        </Box>
        <Box component="div" sx={hide ? { display: "none" } : { position: "fixed", width: "100vw", height: "100vh", background: "#7c3aed", zIndex: 99, display: "block", display: "flex", justifyContent: "center", alignItems: "center" }} >
            <Fade bottom >
                <Box component="div" sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
                    <Fade bottom cascade>
                        <a id='nav-Link' href="">Buy on Solanart<NorthEastIcon size={20} /></a>
                    </Fade>
                    <Fade bottom cascade>
                        <a id='nav-Link' href="">Buy on MagicEden<NorthEastIcon size={20} /></a>
                    </Fade>
                    <Fade bottom cascade>
                        <a id='nav-Link' href="">Rarities<NorthEastIcon size={20} /></a>
                    </Fade>
                    <Fade bottom cascade>
                        <Link
                            duration={500}
                            className={"nav-link"}
                            onClick={handleNav}
                            to={'PARTNER'}
                            spy={true}
                            activeClass={"active"}
                            smooth={true}
                        >
                            Partners
                        </Link>
                    </Fade>
                    <Fade bottom cascade>
                        <Link
                            duration={500}
                            className={"nav-link"}
                            onClick={handleNav}
                            to={'FAQ'}
                            spy={true}
                            activeClass={"active"}
                            smooth={true}
                        >
                            FAQ 
                        </Link>
                    </Fade>
                    <Fade bottom cascade>
                        <Link
                            duration={500}
                            className={"nav-link"}
                            onClick={handleNav}
                            to={'roadmap'}
                            spy={true}
                            activeClass={"active"}
                            smooth={true}
                        >
                            Roadmap
                        </Link>
                    </Fade>
                    <Fade bottom cascade>
                        <Link
                            duration={500}
                            className={"nav-link"}
                            onClick={handleNav}
                            to={'TEAM'}
                            spy={true}
                            activeClass={"active"}
                            smooth={true}
                        >
                            Team
                        </Link>
                    </Fade>
                    <Box component="div" sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 2 }} >
                        <Button variant='text' sx={{
                            textTransform: "capitalize", "&:hover": {
                                background: 'transparent',
                            },
                            fontFamily: "'Balsamiq Sans', cursive",
                            pb: 0,
                            mr: 1
                        }} ><a className='nav-Link nav-link-social' href=""><TwitterIcon sx={{fontSize:'30px'}} /></a></Button>
                        <Button variant='text' sx={{
                            textTransform: "capitalize", "&:hover": {
                                background: 'transparent',
                            },
                            fontFamily: "'Balsamiq Sans', cursive",
                            pb: 0,
                            mr: 1
                        }} ><a className='nav-Link nav-link-social' href=""><InstagramIcon sx={{fontSize:'30px'}} /></a></Button>
                        <Button variant='text' sx={{
                            textTransform: "capitalize", "&:hover": {
                                background: 'transparent',
                            },
                            fontFamily: "'Balsamiq Sans', cursive",
                            pb: 0,
                            mr: 1
                        }} ><a className='nav-Link nav-link-social' href=""><InstagramIcon sx={{fontSize:'30px'}} /></a></Button>
                    </Box>
                </Box>
            </Fade>
        </Box>
    </>
}
export default Navbar;

import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Image from 'next/image';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Fade } from "react-reveal";
import Zoom from 'react-reveal/Zoom';
import Link from '@mui/material/Link';
import { FiArrowUpRight } from "react-icons/Fi";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

function Footer() {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'start',
        // color: theme.palette.text.secondary,
        background: "none",
        boxShadow: 'none'
    }));

    return <>
        <Box component="div" sx={{ background: '#8157c1', py: 14 }} >
            <Box component="div" sx={{ position: 'relative' }} >
                {/* <Box>
                    <Image
                        src={"/img/background.jpg"}
                        alt={"Background Image"}
                        layout={"fill"}
                        objectFit={"cover"}
                    />
                </Box> */}
                <Box component="div" sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: 'center' }} >
                    <Box className="buttons" component="div" sx={{
                        display: "flex", justifyContent: "center", alignItems: "center", mb: 8, flexDirection: {
                            sm: 'row',
                            xs: 'column'
                        }
                    }} >
                        <Button sx={{
                            padding: "13px 15px", borderRadius: "30px", textTransform: "capitalize", mr: {
                                sm: 4
                            },
                            mb: {
                                sm: 0,
                                xs: 2
                            },
                            background: "#ffffff", color: "#8157c1", transition: "all 0.3s ease", "&:hover": {
                                backgroundColor: '#f7f3f3',
                                transform: "scale(1.05)"
                            },
                            fontWeight: 600,
                            fontFamily: "'Balsamiq Sans', cursive",
                            fontSize: "18px",
                            boxShadow: 3
                        }} variant="contained">Buy on Solanart <YouTubeIcon sx={{ ml: 1, color: 'red' }} />
                        </Button>
                        <Button sx={{
                            padding: "13px 15px", borderRadius: "30px", textTransform: "capitalize",
                            background: "#ffffff", color: "#8157c1", transition: "all 0.3s ease", "&:hover": {
                                backgroundColor: '#f7f3f3',
                                transform: "scale(1.05)"
                            },
                            fontWeight: 600,
                            fontFamily: "'Balsamiq Sans', cursive",
                            fontSize: "18px",
                            boxShadow: 3
                        }} variant="contained">Buy on MagicEden <YouTubeIcon sx={{ ml: 1, color: 'red' }} />
                        </Button>
                    </Box>
                    <Box sx={{ width: '50%', display: "flex", justifyContent: "center", alignItems: "center",mb:6 }}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2 }} columns={{ xs: 2, sm: 3, md: 5 }} >
                            <Grid item xs={1}>
                                <Item>
                                    <Link sx={{ display: "flex", justifyContent: 'center', alignItems: "center",color: 'white', fontSize: "22px", fontFamily: "'Balsamiq Sans', cursive" }} href="#" underline="none">
                                        Discord<FiArrowUpRight size={20} />
                                    </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item>
                                    <Link sx={{ display: "flex", justifyContent: 'center', alignItems: "center",color: 'white', fontSize: "22px", fontFamily: "'Balsamiq Sans', cursive" }} href="#" underline="none">
                                        Twitter<FiArrowUpRight size={20} />
                                    </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item>
                                    <Link sx={{ display: "flex", justifyContent: 'center', alignItems: "center",color: 'white', fontSize: "22px", fontFamily: "'Balsamiq Sans', cursive" }} href="#" underline="none">
                                        Instagram<FiArrowUpRight size={20} />
                                    </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item>
                                    <Link sx={{ display: "flex", justifyContent: 'center', alignItems: "center",color: 'white', fontSize: "22px", fontFamily: "'Balsamiq Sans', cursive" }} href="#" underline="none">
                                        Medium<FiArrowUpRight size={20} />
                                    </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item>
                                    <Link sx={{ display: "flex", justifyContent: 'center', alignItems: "center",color: 'white', fontSize: "22px", fontFamily: "'Balsamiq Sans', cursive" }} href="#" underline="none">
                                        Email<FiArrowUpRight size={20} />
                                    </Link>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: "#d3c8fd",
                            mb: 2,
                            fontFamily: "'Balsamiq Sans', cursive",
                            fontSize: '20px',
                        }}
                        component="div"
                        gutterBottom
                    >
                        Copyright 2021 Red Panda Squad.
                        <Link sx={{ color: 'white', fontSize: "22px", fontFamily: "'Balsamiq Sans', cursive" }} href="#" underline="none">
                            Terms & Conditions.
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
    </>
}

export default Footer;

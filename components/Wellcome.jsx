import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Image from 'next/image';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Fade } from "react-reveal";
import Zoom from 'react-reveal/Zoom';

const images = [
    {
        original: 'img/1.png',
    },
    {
        original: 'img/2.png',
    },
    {
        original: 'img/3.png',
    },
];

function Wellcome() {
    return <Box id={"home"} sx={{ pt: 8, pb: 12, background: '#8157c1' }} >
        <Box component="div" sx={{ position: 'relative' }} >
            {/* for setting background picture in "wellcome section uncomment this box and place url in "src"  */}
            {/* <Box>
                    <Image
                        src={"/img/background.jpg"}
                        alt={"Background Image"}
                        layout={"fill"}
                        objectFit={"cover"}
                    />
                </Box> */}
            <Container
                component="div"
                maxWidth="xl"
                sx={{
                    position: "relative", display: "flex", justifyContent: 'center', flexDirection: {
                        md: 'row',
                        xs: 'column-reverse'
                    }, alignItems: "center", minHeight: "100vh"
                }}
            >
                <Box component="div" sx={{
                    display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column", width: {
                        lg: '50%',
                        md: "70%",
                    },
                    mb: {
                        md: 0,
                        xs: 8
                    }
                }} >
                    <Fade bottom cascade big>
                        <Typography
                            variant="h1"
                            sx={{
                                fontFamily: `'Paytone One', sans-serif`,
                                // fontWeight: "600",
                                lineHeight: "90px",
                                color: "#ffffff",
                                mb: 6,
                                textShadow: "2px 2px 4px #00000066",
                                fontFamily: "'Patrick Hand', cursive"
                            }}
                            component="div"
                            gutterBottom
                        >
                            Welcome to the
                            Red Panda Squad
                        </Typography>
                    </Fade>
                    <Fade bottom cascade big>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontFamily: `'Paytone One', sans-serif`,
                                fontWeight: "400",
                                color: "#ffffff",
                                mb: 4,
                                fontFamily: "'Balsamiq Sans', cursive",
                                fontSize: '21px',
                                // textShadow: "2px 2px 4px #00000066",
                            }}
                            component="div"
                            gutterBottom
                        >
                            RPS is a collection of 10,000 Red Panda NFTs — unique digital collectibles
                            living on the Solana blockchain. Your Red Panda gives you a share of our
                            upcoming marketplace and grants you access to our members-only club,
                            as well as the many metaverses of our partner projects
                        </Typography>
                    </Fade>
                    <Box component="div" sx={{
                        display: "flex", justifyContent: "center", alignItems: "start", flexDirection: {
                            sm: "row",
                            xs: "column"
                        }
                    }} >
                        <Fade bottom cascade big>
                            <Button type="primary" sx={{
                                padding: "13px 15px", borderRadius: "30px", textTransform: "capitalize", mr: 3, mb: {
                                    sm: 0,
                                    xs: 2
                                }, background: '#f87171',
                                transition: "all 0.3s ease", "&:hover": {
                                    backgroundColor: '#f84141',
                                    transform: "scale(1.05)"
                                },
                                fontFamily: "'Balsamiq Sans', cursive",
                                fontWeight: 600,
                                fontSize: "15px"
                            }} variant="contained">Read more <ReadMoreIcon sx={{ ml: 1 }} /></Button>
                            <Button sx={{
                                padding: "13px 15px", borderRadius: "30px", textTransform: "capitalize", mr: 3, mb: {
                                    sm: 0,
                                    xs: 2
                                },
                                background: "#ffffff", color: "gray", transition: "all 0.3s ease", "&:hover": {
                                    backgroundColor: '#f7f3f3',
                                    transform: "scale(1.05)"
                                },
                                fontWeight: 600,
                                fontFamily: "'Balsamiq Sans', cursive",
                                fontSize: "15px"
                            }} variant="contained">RPS Street Art <YouTubeIcon sx={{ ml: 1, color: 'red' }} /></Button>
                            <Button sx={{
                                padding: "13px 15px", borderRadius: "30px", textTransform: "capitalize", mr: 3, mb: {
                                    sm: 0,
                                    xs: 2
                                },
                                background: "#ffffff", color: "gray", transition: "all 0.3s ease", "&:hover": {
                                    backgroundColor: '#f7f3f3',
                                    transform: "scale(1.05)"
                                },
                                fontWeight: 600,
                                fontFamily: "'Balsamiq Sans', cursive",
                                fontSize: "15px"
                            }} variant="contained">Buy Your Red Panda</Button>
                        </Fade>
                    </Box>
                </Box>
                <Box component="div" sx={{
                    width: {
                        lg: '50%',
                        md: '40%'
                    }, display: "flex", justifyContent: "center", alignItems: "center"
                }} >
                    <Box sx={{ ml:{
                        md:8
                    },mt:{
                        md:0,
                        xs:8
                    },borderRadius: "50%", overflow: 'hidden' }} >
                        <Image src={"/img/gif.gif"}
                            width={500}
                            height={500}
                            objectFit='contain'
                            alt='Gif'
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
        {/* <ArtGallery /> */}
    </Box>
}

export default Wellcome;
